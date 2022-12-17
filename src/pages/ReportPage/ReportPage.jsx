import Section from 'components/layout/Section/Section';

import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import Balance from 'components/Balance/Balance';
import ArrowLeft from 'components/icons/ArrowLeft/ArrowLeft';
import Calendar from 'components/Calendar/Calendar';
import Budget from 'components/Budget/Budget';
import ExpAndInc from 'components/ExpAndInc/ExpAndInc';

import s from './Report.module.scss';

export default function ReportPage() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <Section sectionClass="section">
      <div className={s.wrappTop}>
        <Link to="/home">
          <div className={s.arrowWrap}>
            <ArrowLeft />
            {isTablet && <p>Main page</p>}
          </div>
        </Link>
        {isTablet && <Balance />}
        <Calendar />
        {isMobile && <Balance />}
      </div>
      <Budget />
      <ExpAndInc />
    </Section>
  );
}
