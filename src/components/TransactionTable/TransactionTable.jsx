import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment/moment';

import {
  deleteTransaction,
  getTransactionsByMonth,
} from 'redux/transaction/transaction-operations';

import Modal from 'components/layout/Modal/Modal';

import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import s from './TransactionTable.module.scss';

export default function TransactionTable({ sectionClass = 'tbody', items }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');

  if (items === undefined) {
    return;
  }

  const reversedItems = [...items].sort((a, b) =>
    b.transitionDate.localeCompare(a.transitionDate)
  );

  const handelDelete = ({ currentTarget: { id } }) => {
    document.body.classList.add('no-scroll');

    setShowModal(true);
    setId(id);
  };

  const handelClose = () => {
    setShowModal(false);
  };

  const handleDeleteItem = () => {
    dispatch(deleteTransaction(id));
    dispatch(
      getTransactionsByMonth({ reqDate: moment(new Date()).format('MM/DD/yyyy') })
    );
    setShowModal(false);
  };

  const elements = reversedItems.map(
    ({
      _id,
      transitionDescription,
      transitionValue,
      transitionDate,
      transitionCategory,
    }) => (
      <tr key={_id} className={s.item}>
        <td className={s.td}>{transitionDate}</td>
        <td className={s.td}>{transitionDescription}</td>
        <td className={s.td}>{transitionCategory}</td>
        <td className={s.td}>{transitionValue}</td>
        <td className={s.td}>
          <DeleteIcon
            iconClass="iconTransactionTable"
            width="18"
            height="18"
            id={_id}
            onClick={handelDelete}
          />
        </td>
      </tr>
    )
  );

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
        <tbody className={s[sectionClass]}>{elements}</tbody>
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
