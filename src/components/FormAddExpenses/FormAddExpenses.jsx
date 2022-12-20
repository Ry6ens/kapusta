import { useForm } from 'react-hook-form';
import useMediaQuery from '@mui/material/useMediaQuery';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputNumber from 'components/FormComponents/FormInputNumber';
import FormInputSelect from 'components/FormComponents/FormInputSelect';

import Button from 'components/ui/Button/Button';

import CalculatorIcon from 'components/icons/Calculator/Calculator';

import CalendarHome from 'components/CalendarHome/CalendarHome';

import s from './FormAddExpInc.module.scss';

export default function FormAddExpInc() {
  const isTablet = useMediaQuery('(min-width: 768px)');

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: '',
      product: '',
      category: '',
      balance: '',
    },
  });

  const onSubmit = data => {
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {isTablet && <CalendarHome />}
      <FormInputText
        name="product"
        control={control}
        label="Product description"
        required={true}
      />
      <FormInputSelect
        name="category"
        control={control}
        label="Product category"
        required={true}
      />
      <div className={s.overlayCalc}>
        <FormInputNumber
          name="balance"
          control={control}
          label="00.00 UAH"
          required={true}
        />
        <CalculatorIcon width="20" height="20" />
      </div>
      <div className={s.overlayBtn}>
        <Button text="Input" btnClass="btnFormAddExpInc" />
        <Button text="Clear" btnClass="btnFormAddExpInc" />
      </div>
    </form>
  );
}
