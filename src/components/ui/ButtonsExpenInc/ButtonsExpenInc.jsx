// import s from './ButtonsExpenInc.module.scss';
import './ButtonsExpenInc.scss';

import Button from 'components/ui/Button/Button';

export default function ButtonsExpenInc() {
  const handleClick = ({ target, currentTarget }) => {
    console.log(currentTarget.textContent);

    if (currentTarget.textContent === 'Expenses') {
      currentTarget.classList.toggle('is-active');
      return;
    }
    if (currentTarget.textContent === 'Income') {
      currentTarget.classList.toggle('is-active');
      return;
    }
    currentTarget.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  };
  return (
    <div className="overlay">
      <Button text="Expenses" btnClass="btnExpenInc" onClick={handleClick} />
      {/* <div className="hamburger hamburger--squeeze" type="button" onClick={handleClick}>
        Expenses
        <div className="hamburger-menu_nav">Expenses</div>
      </div> */}
      <Button text="Income" btnClass="btnExpenInc" onClick={handleClick} />
    </div>
  );
}
