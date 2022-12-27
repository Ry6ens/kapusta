import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCalendarDate } from 'redux/transaction/transaction-selectors';
import { UserGetExpenses } from 'api/user';
import { getChartData } from 'redux/transaction/transaction-operations';

import ArrowsLeft from 'components/icons/Arrows/Left';
import ArrowsRight from 'components/icons/Arrows/Right';

// icons
import Products from 'components/icons/Products/Products';
import Alcohol from 'components/icons/Alcohol/Alcohol';
import Entertainment from 'components/icons/Entertainment/Entertainment';
import Health from 'components/icons/Health/Health';
import Transport from 'components/icons/Transport/Transport';
import Housing from 'components/icons/Housing/Housing';
import Technique from 'components/icons/Technique/Technique';
import Communal from 'components/icons/Communal/Communal';
import Sports from 'components/icons/Sports/Sports';
import Education from 'components/icons/Education/Education';
import Other from 'components/icons/Other/Other';
import Rectangle from 'components/icons/Rectangle/Rectangle';

import s from './ExpAndInc.module.scss';

export default function ExpAndInc() {
  const dispatch = useDispatch();
  const calendarDate = useSelector(getCalendarDate);

  // state
  const [isExpenses, setIsExpenses] = useState(true);
  const [isIncome, setIsIncome] = useState(false);
  const [dataExpenses, setDataExpenses] = useState(null);
  const [activItem, setActivItem] = useState(null);

  const filteredDataExpenses = dataExpenses?.filter(el => el.price !== 0);

  useEffect(() => {
    const getExp = async () => {
      try {
        const res = await UserGetExpenses({
          reqDate: calendarDate || '12/01/2022',
        });

        const changeObjFormat = res.map(el => {
          for (const key in el) {
            return { name: key, price: el[key] };
          }
        });

        setDataExpenses(changeObjFormat);
      } catch (error) {
        console.log(error.message);
      }
    };
    getExp();
  }, [calendarDate]);

  useEffect(() => {
    setActivItem(null);
  }, [calendarDate]);

  // functions
  const handlerSwitcher = () => {
    setIsExpenses(!isExpenses);
    setIsIncome(!isIncome);
  };

  const FilterIcon = name => {
    switch (name?.toLocaleLowerCase()) {
      case 'products':
        return <Products />;
      case 'alcohol':
        return <Alcohol />;
      case 'entertainment':
        return <Entertainment />;
      case 'health':
        return <Health />;
      case 'transport':
        return <Transport />;
      case 'housing':
        return <Housing />;
      case 'technique':
        return <Technique />;
      case 'communal, communication':
        return <Communal />;
      case 'sports, hobbies':
        return <Sports />;
      case 'education':
        return <Education />;
      case 'other':
        return <Other />;
      default:
        return 'havant';
    }
  };

  const chooseCategory = ({ currentTarget }) => {
    console.log(activItem);
    setActivItem(currentTarget.dataset.name);
    dispatch(
      getChartData({
        reqDate: calendarDate,
        transitionCategory: currentTarget.dataset.name,
      })
    );
  };

  return (
    <div className={s.wrapp}>
      <div className={s.switcher}>
        <button onClick={handlerSwitcher}>
          <ArrowsLeft />
        </button>
        {isExpenses ? <p>Expenses</p> : <p>Income</p>}
        <button onClick={handlerSwitcher}>
          <ArrowsRight />
        </button>
      </div>
      {isExpenses && (
        <ul className={s.list}>
          {filteredDataExpenses ? (
            filteredDataExpenses?.map(({ price, name }, i) => (
              <li
                className={`${s.item} ${activItem === name && s.active}`}
                key={name + i}
                onClick={chooseCategory}
                data-name={name}
              >
                <p>{price}</p>
                <div className={s.iconWrap}>
                  {FilterIcon(name)}
                  <div className={s.Rectangle}>
                    <Rectangle />
                  </div>
                </div>
                <p>{name}</p>
              </li>
            ))
          ) : (
            <h1>Here will be your expenses</h1>
          )}
        </ul>
      )}
      {isIncome && <h1>Here will be your incomes</h1>}
    </div>
  );
}
