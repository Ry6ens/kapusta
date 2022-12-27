import { useSelector } from 'react-redux';

import { getMonthlySum } from 'redux/transaction/transaction-selectors';

import s from './SummaryTable.module.scss';

export default function Summary() {
  const items = useSelector(getMonthlySum);

  if (items === undefined) {
    return;
  }

  const reversedItems = [...items].reverse();

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th} colSpan="2">
            Summary
          </th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {reversedItems.map(({ month, sum }) => (
          <tr key={month} className={s.item}>
            <td className={s.td}>{month}</td>
            <td className={s.td}>{sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
