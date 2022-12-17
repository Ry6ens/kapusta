import s from './Close.module.scss';

export default function CloseIcon({ iconClass, width, height, onClick }) {
  return (
    <div className={s[iconClass]} onClick={onClick}>
      <svg viewBox="0 0 14 14" width={width} height={height}>
        <path d="m1 1 12 12M1 13 13 1" stroke="#52555F" strokeWidth="2" />
      </svg>
    </div>
  );
}
