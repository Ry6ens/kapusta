import { Link } from 'react-router-dom';

import ArrowLeftIcon from 'components/icons/ArrowLeft/ArrowLeft';
import Text from 'components/ui/Text/Text';

import s from './ButtonBack.module.scss';

export default function ButtonBack({ btnClass = 'btn', width, height, text, to }) {
  return (
    <Link className={s[btnClass]} to={to}>
      <ArrowLeftIcon width={width} height={height} />
      <Text text={text} />
    </Link>
  );
}
