import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  deleteTransaction,
  getTransactionsByMonth,
  getExpensesTransByDate,
  getIncomeTransByDate,
} from 'redux/transaction/transaction-operations';
import {
  getCurrentDate,
  getTransactions,
  isMessage,
} from 'redux/transaction/transaction-selectors';

import Modal from 'components/layout/Modal/Modal';

import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import s from './TransactionTable.module.scss';

export default function TransactionTable({ sectionClass = 'tbody' }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const didMountRef = useRef(false);

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');

  const items = useSelector(getTransactions);
  const currentDate = useSelector(getCurrentDate);
  const message = useSelector(isMessage);

  useEffect(() => {
    if (didMountRef.current) {
      if (pathname === '/income') {
        dispatch(getIncomeTransByDate({ reqDate: currentDate }));
      }

      if (pathname === '/expenses') {
        dispatch(getExpensesTransByDate({ reqDate: currentDate }));
      }

      if (pathname === '/') {
        dispatch(getTransactionsByMonth({ reqDate: currentDate }));
      }
    }

    didMountRef.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  if (items === undefined) {
    return;
  }

  const reversedItems = [...items].reverse();

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
        <td>{transitionDate}</td>
        <td>{transitionDescription}</td>
        <td>{transitionCategory}</td>
        <td
          className={
            transitionCategory === 'Salary' || transitionCategory === 'Add.Income'
              ? s.priceInc
              : s.priceExp
          }
        >
          {transitionCategory === 'Salary' || transitionCategory === 'Add.Income'
            ? ''
            : '-'}
          {transitionValue} UAH
        </td>
        <td className={s.icon}>
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
