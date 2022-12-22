import s from './Logout.module.scss';

export default function LogoutIcon({ iconClass, width, height, onClick }) {
  return (
    <div className={s[iconClass]} onClick={onClick}>
      <svg
        viewBox="0 0 16 16"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)" fill="#CBCCD0">
          <path d="M10 14H2V2h8v1h2V0H0v16h12v-3h-2v1Z" />
          <path d="m12.293 4.293-1.414 1.414L12.172 7H7v2h5.172l-1.293 1.293 1.414 1.414L16 8l-3.707-3.707Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
