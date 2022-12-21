import PropTypes from 'prop-types';
import s from './ErrorMessage.module.scss';

const ErrorMessage = ({ status }) => {
  return (
    <div className={s.errorMessageBlock}>
      <div className={s.boo}>
        <div className={s.face} id="face"></div>
      </div>
      <p className={s.errorMessageTitle}>Щось пішло не так...</p>
      <p className={s.errorMessageText}>{status}</p>
    </div>
  );
};

export default ErrorMessage;

ErrorMessage.defaultProps = {
  status: {},
};

ErrorMessage.propTypes = {
  status: PropTypes.string,
};
