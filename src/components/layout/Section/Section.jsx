import s from './Section.module.scss';

export default function Section({ sectionClass = 'section', children }) {
  return <section className={s[sectionClass]}>{children}</section>;
}
