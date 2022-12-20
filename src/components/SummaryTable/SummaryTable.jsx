import s from './SummaryTable.module.scss';

import items from './items';

export default function Summary() {
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
        {items?.map(({ id, title, price }) => (
          <tr key={id} className={s.item}>
            <td className={s.td}>{title}</td>
            <td className={s.td}>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
