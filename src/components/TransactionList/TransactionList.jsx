import { useState } from 'react';

import Modal from 'components/layout/Modal/Modal';

import Text from 'components/ui/Text/Text';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import s from './TransactionList.module.scss';
import Button from 'components/ui/Button/Button';

export default function TransactionList({ listClass = 'list', products }) {
  const [showModal, setShowModal] = useState(false);

  const handelClick = () => {
    document.body.classList.add('no-scroll');

    setShowModal(true);
  };

  const elements = products?.map(({ id, title, price, date, category }) => (
    <li key={id} className={s.item}>
      <p className={s.title}>{title}</p>
      <p className={s.price}>{price}</p>
      <DeleteIcon
        iconClass="iconProductList"
        width="20"
        height="20"
        onClick={handelClick}
      />
      <p className={s.date}>{date}</p>
      <p className={s.category}>{category}</p>
    </li>
  ));

  const handelClose = () => {
    setShowModal(false);
  };

  const handleDeleteItem = () => {
    setShowModal(false);
  };

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
