import { useState } from 'react';

import ArrowCalendLeftIcon from 'components/icons/ArrowCalendLeft/ArrowCalendLeft';
import ArrowCalendRightIcon from 'components/icons/ArrowCalendRight/ArrowCalendRight';
import ProductsIcon from 'components/icons/Products/Products';
import AlcoholIcon from 'components/icons/Alcohol/Alcohol';
import EntertainmentIcon from 'components/icons/Entertainment/Entertainment';
import HealthIcon from 'components/icons/Health/Health';
import TransportIcon from 'components/icons/Transport/Transport';
import HousingIcon from 'components/icons/Housing/Housing';
import TechniqueIcon from 'components/icons/Technique/Technique';
import CommunalIcon from 'components/icons/Communal/Communal';
import SportsIcon from 'components/icons/Sports/Sports';
import EducationIcon from 'components/icons/Education/Education';
import OtherIcon from 'components/icons/Other/Other';

import Text from 'components/ui/Text/Text';

import s from './SliderReport.module.scss';

import data from './data.js';

const FilterIcon = (category, height) => {
  switch (category?.toLocaleLowerCase()) {
    case 'products':
      return <ProductsIcon height={height} />;
    case 'alcohol':
      return <AlcoholIcon height={height} />;
    case 'entertainment':
      return <EntertainmentIcon height={height} />;
    case 'health':
      return <HealthIcon height={height} />;
    case 'transport':
      return <TransportIcon height={height} />;
    case 'housing':
      return <HousingIcon height={height} />;
    case 'technique':
      return <TechniqueIcon height={height} />;
    case 'communal, communication':
      return <CommunalIcon height={height} />;
    case 'sports, hobbies':
      return <SportsIcon height={height} />;
    case 'education':
      return <EducationIcon height={height} />;
    case 'other':
      return <OtherIcon height={height} />;
    default:
      return '';
  }
};

export default function SliderReport() {
  const [item, setItem] = useState(true);

  const handlerToggle = () => {
    setItem(!item);
  };

  return (
    <div className={s.overlay}>
      <ArrowCalendLeftIcon width="7px" height="10px" onClick={handlerToggle} />
      {item ? <Text text="Expenses" /> : <Text text="Income" />}
      <ArrowCalendRightIcon width="7px" height="10px" onClick={handlerToggle} />
      {item && (
        <ul className={s.list}>
          {data.map(({ category, sum }) => (
            <li key={category}>
              <Text text={category} />
              {FilterIcon(category, '56')}
              <Text text={sum} />
            </li>
          ))}
        </ul>
      )}
      {!item && <ul>Income</ul>}
    </div>
  );
}
