import s from './Budget.module.scss';

export default function Budget() {
  return (
    <div className={s.wrap}>
      <div>
        <p className={s.text}>Expenses:</p>
        <p className={s.expenses}>- 18 000.00 UAH.</p>
      </div>
      <div className={s.line}>{/* <VerticalLine /> */}</div>
      <div>
        <p className={s.text}>Income:</p>
        <p className={s.income}>+ 45 000.00 UAH.</p>
      </div>
    </div>
  );
}
