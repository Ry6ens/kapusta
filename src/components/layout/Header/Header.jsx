import Section from '../Section/Section';

import Logo from 'images/logo/logo.png';

export default function Header() {
  return (
    <header>
      <Section>
        <img src={Logo} alt="logo" />
      </Section>
    </header>
  );
}
