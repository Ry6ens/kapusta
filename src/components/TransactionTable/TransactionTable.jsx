import { useState } from 'react';

import Modal from 'components/layout/Modal/Modal';

import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import s from './TransactionTable.module.scss';

export default function TransactionTable({ sectionClass = 'tbody', products }) {
  const [showModal, setShowModal] = useState(false);

  const handelDelete = () => {
    document.body.classList.add('no-scroll');

    setShowModal(true);
  };

  const handelClose = () => {
    setShowModal(false);
  };

  const handleDeleteItem = () => {
    setShowModal(false);
  };

  return (
    <>
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
        <tbody className={s[sectionClass]}>
          {products?.map(({ id, title, price, date, category }) => (
            <tr key={id} className={s.item}>
              <td className={s.td}>{date}</td>
              <td className={s.td}>{title}</td>
              <td className={s.td}>{category}</td>
              <td className={s.td}>{price}</td>
              <td className={s.td}>
                <DeleteIcon
                  iconClass="iconTransactionTable"
                  width="18"
                  height="18"
                  onClick={handelDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal onClose={handelClose}>
          <CloseIcon width="12" height="12" iconClass="iconModal" onClick={handelClose} />
          <Text text="Are you sure?" textClass="textModal" />
          <div className={s.overlayBtns}>
            <Button text="Yes" onClick={handleDeleteItem} />
            <Button text="No" onClick={handelClose} />
          </div>
        </Modal>
      )}
    </>
  );
}
