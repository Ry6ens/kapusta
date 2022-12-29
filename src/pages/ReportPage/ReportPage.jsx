import useMediaQuery from '@mui/material/useMediaQuery';

import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack';

import Balance from 'components/Balance/Balance';
import Calendar from 'components/Calendar/Calendar';
import Budget from 'components/Budget/Budget';
import ExpAndInc from 'components/ExpAndInc/ExpAndInc';
import BarChart from 'components/BarChart/BarChart';

import s from './Report.module.scss';

export default function ReportPage() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <Section sectionClass="sectionMarg">
      <ButtonBack text="Main page" width="18" height="12" to="/" />

      <div className={s.wrappTop}>
        {isTablet && <Balance />}
        <Calendar />
        {isMobile && <Balance />}
      </div>
      <Budget />
      <ExpAndInc />
      <BarChart />
    </Section>
  );
}
