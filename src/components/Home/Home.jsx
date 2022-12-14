import LogoKapustaBigIcon from 'components/icons/LogoKapustaBig/LogoKapustaBig';
import KapustaOneIcon from 'components/icons/KapustaOne/KapustaOne';

import s from './Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={s.logo}>
        <LogoKapustaBigIcon width="183" heigth="63" />
      </div>
      <div className={s.kapustaTop}>
        <KapustaOneIcon width="83" heigth="89" transform="rotate(180)" />
      </div>
    </>
  );
}
