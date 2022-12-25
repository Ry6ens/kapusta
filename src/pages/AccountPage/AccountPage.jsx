import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack';

import CabinetForm from 'components/CabinetForm/CabinetForm';

export default function AccountPage() {
  return (
    <>
      <Section sectionClass="sectionMarg">
        <ButtonBack btnClass="btnExp" width="18" height="12" to="/settings" />
        <CabinetForm />
      </Section>
    </>
  );
}
