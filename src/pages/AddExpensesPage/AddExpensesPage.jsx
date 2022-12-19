import FormAddExpInc from 'components/FormAddExpenses/FormAddExpenses';

import './hamburgers.scss';

export default function AddExpensesPage() {
  const handleClick = ({ target, currentTarget }) => {
    if (target.nodeName === 'UL') {
      return;
    }
    currentTarget.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  };
  return (
    <div className="hamburger hamburger--squeeze" type="button" onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
      <div className="hamburger-menu_nav">
        <FormAddExpInc />
      </div>
    </div>
  );
}
