import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getErrorSignUp, getNewUser } from 'redux/auth/auth-selectors';

import FormSingup from 'components/FormSingup/FormSingup';
import Section from 'components/layout/Section/Section';

import KapustaManyIcon from 'components/icons/KapustaMany/KapustaMany';
import KapustaOneIcon from 'components/icons/KapustaOne/KapustaOne';
import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';
import LogoKapustaMobIcon from 'components/icons/LogoKapustaMob/LogoKapustaMob';
import LogoKapustaTabIcon from 'components/icons/LogoKapustaTab/LogoKapustaTab';

export default function SignUpPage() {
  const errorSignUp = useSelector(getErrorSignUp);
  const newUserEmail = useSelector(getNewUser);

  if (!errorSignUp && newUserEmail) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Section sectionClass="section">
        <LogoKapustaMobIcon iconClass="home" width="183" height="63" />
        <LogoKapustaTabIcon iconClass="home" width="305" height="100" />
        <KapustaManyIcon iconClass="home" width="1334" height="232" />
        <KapustaOneIcon
          iconClass="homeTop"
          width="83"
          heigth="89"
          transform="rotate(180)"
        />
        <FormSingup />
        <KapustaOneIcon iconClass="homeBottom" width="83" height="89" />
        <KapustaTwoIcon iconClass="homeBottom" width="183" height="142" />
      </Section>
    </>
  );
}
