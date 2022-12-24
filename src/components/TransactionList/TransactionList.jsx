import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

import {
  deleteTransaction,
  getTransactionsByMonth,
} from 'redux/transaction/transaction-operations';
import { getCurrentDate } from 'redux/transaction/transaction-selectors';

import Modal from 'components/layout/Modal/Modal';

import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import s from './TransactionList.module.scss';

export default function TransactionList({ listClass = 'list', items }) {
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);

  useEffect(() => {}, [currentDate]);

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');

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

  const elements = items?.map(
    ({
      _id,
      transitionDescription,
      transitionValue,
      transitionDate,
      transitionCategory,
    }) => (
      <li key={_id} className={s.item}>
        <p className={s.title}>{transitionDescription}</p>
        <p className={s.price}>{transitionValue}</p>
        <DeleteIcon
          iconClass="iconProductList"
          width="20"
          height="20"
          id={_id}
          onClick={handelDelete}
        />
        <p className={s.date}>{transitionDate}</p>
        <p className={s.category}>{transitionCategory}</p>
      </li>
    )
  );

  return (
    <>
      <ul className={s[listClass]}>{elements}</ul>
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
