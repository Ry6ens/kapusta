import s from './Button.module.scss';

export default function Button({ id, text, btnClass = 'btn', type = 'button', onClick }) {
  return (
    <button id={id} className={s[btnClass]} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
