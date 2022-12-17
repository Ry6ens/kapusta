import { useEffect } from 'react';

import Section from 'components/layout/Section/Section';

import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import ProductList from 'components/ProductList/ProductList';

import products from './products.js';

export default function HomePage() {
  return (
    <>
      <Section sectionClass="sectionHome">
        <LinkReport />
        <FormAddBalance />
        <CalendarHome />
        <ProductList products={products} />
      </Section>
      <ButtonsExpenInc />
    </>
  );
}
