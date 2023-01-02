import Text from 'components/ui/Text/Text';

import s from './BalanceChart.module.scss';

export default function BalanceChart() {
  return (
    <div className={s.overlay}>
      <div className={s.overlayExp}>
        <Text text="Expenses:" textClass="textBalanceChart" />
        <Text text="- 18 000.00 UAH" textClass="textBalanceChartNumber" />
      </div>
      <div className={s.vertBorder}></div>
      <div className={s.overlayInc}>
        <Text text="Income:" textClass="textBalanceChart" />
        <Text text="+ 45 000.00 UAH" textClass="textBalanceChartNumber" />
      </div>
    </div>
  );
}
