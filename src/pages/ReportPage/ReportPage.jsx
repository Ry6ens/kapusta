import { useSelector } from 'react-redux';

import { getBalance } from 'redux/transaction/transaction-selectors';

import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack';

import Text from 'components/ui/Text/Text';
import Calendar from 'components/Calendar/Calendar';
import BalanceChart from 'components/BalanceChart/BalanceChart';
import SliderReport from 'components/SliderReport/SliderReport';

import ExpAndInc from 'components/ExpAndInc/ExpAndInc';
import BarChart from 'components/BarChart/BarChart';

import s from './Report.module.scss';

export default function ReportPage() {
  const balance = useSelector(getBalance);

  const newStyleBalance = balance + ' UAH';

  return (
    <Section sectionClass="sectionMarg">
      <ButtonBack text="Main page" width="18" height="12" to="/" />
      <Text text="Current period:" textClass="textReport" />
      <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
      <Text text="Balance:" textClass="textBalance" />
      <Text text={newStyleBalance} textClass="textBalanceDisplay" />
      <BalanceChart />
      <SliderReport />

      <ExpAndInc />
      <BarChart />
    </Section>
  );
}
