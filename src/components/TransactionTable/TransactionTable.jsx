import { useState } from 'react';

import Modal from 'components/layout/Modal/Modal';

import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import s from './TransactionTable.module.scss';

// import { useSelector } from 'react-redux';
// import { getTransactions } from 'redux/transaction/transaction-selectors';

export default function TransactionTable({ sectionClass = 'tbody', items }) {
  const [showModal, setShowModal] = useState(false);

  // const items = useSelector(getTransactions);
  // const items = [
  //   {
  //     owner: '63a58e84a79c31351b3843ae',
  //     reportDate: '11/2022',
  //     transitionCategory: 'Entertainment',
  //     transitionDate: '12/23/2022',
  //     transitionDescription: 'Cap',
  //     transitionName: 'expenses',
  //     transitionValue: 100,
  //     _id: '63a5d1ac9de0e178f455be6e',
  //   },
  // ];
  // console.log(items);

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
          {/* {items?.map(
            ({
              _id,
              transitionDate,
              transitionCategory,
              transitionValue,
              transitionDescription,
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
                    onClick={handelDelete(_id)}
                  />
                </td>
              </tr>
            )
          )} */}
          {items?.map(({ id, title, price, date, category }) => (
            <tr key={id} className={s.item}>
              <td className={s.td}>{title}</td>
              <td className={s.td}>{price}</td>
              <td className={s.td}>{date}</td>
              <td className={s.td}>{category}</td>
              <td className={s.td}>
                <DeleteIcon
                  iconClass="iconTransactionTable"
                  width="18"
                  height="18"
                  onClick={handelDelete(id)}
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
