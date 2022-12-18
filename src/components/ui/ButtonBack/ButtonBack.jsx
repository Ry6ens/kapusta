import { useNavigate } from 'react-router-dom';

import ArrowLeftIcon from 'components/icons/ArrowLeft/ArrowLeft';

import s from './ButtonBack.module.scss';

export default function ButtonBack({ width, height }) {
  const navigate = useNavigate();

  return (
    <button type="button" className={s.btnBack} onClick={() => navigate(-1)}>
      <ArrowLeftIcon width={width} height={height} />
    </button>
  );
}
