import DeleteIcon from 'components/icons/Delete/Delete';

import s from './TransactionTable.module.scss';

export default function TransactionTable({ products }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Date</th>
          <th className={s.th}>Description</th>
          <th className={s.th}>Category</th>
          <th className={s.th}>Sum</th>
          <th className={s.th}></th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {products?.map(({ id, title, price, date, category }) => (
          <tr key={id} className={s.item}>
            <td className={s.td}>{date}</td>
            <td className={s.td}>{title}</td>
            <td className={s.td}>{category}</td>
            <td className={s.td}>{price}</td>
            <td className={s.td}>
              <DeleteIcon width="18" height="18" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
