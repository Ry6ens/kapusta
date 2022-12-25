import { NavLink } from 'react-router-dom';

import Section from 'components/layout/Section/Section';
import ButtonBack from 'components/ui/ButtonBack/ButtonBack';

import ArrowRight from 'components/icons/ArrowRight/ArrowRight';

import s from './SettingsPage.module.scss';

export default function SettingsPage() {
  return (
    <Section sectionClass="sectionMarg">
      <ButtonBack btnClass="btnExp" width="18" height="12" to="/" />
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="account">
              <span>Account</span>
              <ArrowRight width="15px" height="15px" />
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="support">
              <span>Support</span>
              <ArrowRight width="15px" height="15px" />
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="terms">
              <span>Terms and Policies</span>
              <ArrowRight width="15px" height="15px" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Section>
  );
}
