import s from './TitleH2.module.scss';

export default function TitleH2({ titleClass = 'title', text }) {
  return <h2 className={s[titleClass]}>{text}</h2>;
}
