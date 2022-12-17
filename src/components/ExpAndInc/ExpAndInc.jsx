import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [isExpenses, setIsExpenses] = useState(true);
  const [isIncome, setIsIncome] = useState(false);

  const handlerSwitcher = () => {
    setIsExpenses(!isExpenses);
    setIsIncome(!isIncome);
  };

  const arr2 = [
    { price: 100, name: 'Products' },
    { price: 1002, name: 'Alcohol' },
    { price: 1002, name: 'Entertainment' },
    { price: 1002, name: 'Health' },
    { price: 1002, name: 'Transport' },
    { price: 0, name: 'Housing' },
    { price: 1002, name: 'Technique' },
    { price: 1002, name: 'Communal' },
    { price: 0, name: 'Sports' },
    { price: 1002, name: 'Education' },
    { price: 1002, name: 'Other' },
  ];

  const arr = arr2.filter(el => el.price !== 0);

  const FilterIcon = name => {
    switch (name.toLocaleLowerCase()) {
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
      case 'communal':
        return <Communal />;
      case 'sports':
        return <Sports />;
      case 'education':
        return <Education />;
      case 'other':
        return <Other />;
      default:
        return 'havant';
    }
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
          {arr.map(({ price, name }, i) => (
            <>
              <li className={s.item}>
                <p>{price}</p>
                <div className={s.iconWrap}>
                  {FilterIcon(name)}
                  <div className={s.Rectangle}>
                    <Rectangle />
                  </div>
                </div>
                <p>{name}</p>
              </li>
              {isMobile && (i === 2 || i === 5 || i === 8 || i === 9) && (
                <li className={s.line}></li>
              )}
            </>
          ))}
        </ul>
      )}
      {isIncome && <h1>inc</h1>}
    </div>
  );
}
