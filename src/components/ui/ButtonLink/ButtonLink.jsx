import { Link } from 'react-router-dom';

import Text from 'components/ui/Text/Text';

import s from './ButtonLink.module.scss';

export default function ButtonLink({ btnClass, to, text }) {
  return (
    <Link className={s[btnClass]} to={to}>
      <Text textClass="btnLink" text={text} />
    </Link>
  );
}
