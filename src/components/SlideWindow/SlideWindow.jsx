import FormAddExpInc from 'components/FormAddTransaction/FormAddTransaction';

import Text from 'components/ui/Text/Text';

import ArrowLeftIcon from 'components/icons/ArrowLeft/ArrowLeft';

import './SlideWindow.scss';
import Section from 'components/layout/Section/Section';

export default function SlideWindow({ text }) {
  const handleClick = ({ target, currentTarget }) => {
    if (target.nodeName === 'path' || target.nodeName === 'svg') {
      currentTarget.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
      return;
    }

    currentTarget.classList.add('is-active');
    document.body.classList.add('no-scroll');
  };
  return (
    <div className="btnAddExp" type="button" onClick={handleClick}>
      <Text text={text} />
      <div className="menu_nav">
        <Section>
          <div className="btnBack" type="button">
            <ArrowLeftIcon width="18" height="12" />
          </div>
          <FormAddExpInc />
        </Section>
      </div>
    </div>
  );
}
