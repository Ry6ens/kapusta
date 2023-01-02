import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getBalance } from 'redux/transaction/transaction-selectors';

import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack';

import Text from 'components/ui/Text/Text';
import Calendar from 'components/Calendar/Calendar';
import BalanceChart from 'components/BalanceChart/BalanceChart';
import SliderReport from 'components/SliderReport/SliderReport';

import BarChart from 'components/BarChart/BarChart';

import s from './ReportPage.module.scss';

export default function ReportPage() {
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTabletMin = useMediaQuery('(min-width: 768px)');
  const isTabletMax = useMediaQuery('(max-width: 1279.98px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const balance = useSelector(getBalance);

  const newStyleBalance = balance + ' UAH';

  return (
    <Section sectionClass="sectionMarg">
      {isMobile && (
        <>
          <ButtonBack text="Main page" width="18" height="12" to="/" />
          <Text text="Current period:" textClass="textReport" />
          <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
          <Text text="Balance:" textClass="textBalance" />
          <Text text={newStyleBalance} textClass="textBalanceDisplay" />
          <BalanceChart />
          <SliderReport />

          <BarChart />
        </>
      )}

      {isTabletMin && isTabletMax && (
        <>
          <div className={s.overlay}>
            <ButtonBack text="Main page" width="18" height="12" to="/" />
            <div className={s.overlayBalance}>
              <Text text="Balance:" textClass="textBalance" />
              <Text text={newStyleBalance} textClass="textBalanceDisplay" />
            </div>
            <div className={s.overlayCalendar}>
              <Text text="Current period:" textClass="textReport" />
              <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            </div>
          </div>

          <BalanceChart />
          <SliderReport />

          <BarChart />
        </>
      )}

      {isDesktop && (
        <>
          <div className={s.overlay}>
            <ButtonBack text="Main page" width="18" height="12" to="/" />
            <div className={s.overlayBalance}>
              <Text text="Balance:" textClass="textBalance" />
              <Text text={newStyleBalance} textClass="textBalanceDisplay" />
            </div>
            <div className={s.overlayCalendar}>
              <Text text="Current period:" textClass="textReport" />
              <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            </div>
          </div>

          <BalanceChart />
          <SliderReport />

          <BarChart />
        </>
      )}
    </Section>
  );
}
