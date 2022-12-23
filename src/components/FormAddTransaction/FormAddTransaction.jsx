import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { addTransaction } from 'redux/transaction/transaction-operations';
import { geCurrentDate } from 'redux/transaction/transaction-selectors';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputNumber from 'components/FormComponents/FormInputNumber';
import FormInputSelect from 'components/FormComponents/FormInputSelect';

import Button from 'components/ui/Button/Button';

import CalculatorIcon from 'components/icons/Calculator/Calculator';

import CalendarHome from 'components/CalendarHome/CalendarHome';

import s from './FormAddTransaction.module.scss';

export default function FormAddTransaction() {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery('(min-width: 768px)');

  const currentDate = useSelector(geCurrentDate);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: '',
      description: '',
      category: '',
      balance: '',
    },
  });

  const onSubmit = data => {
    const addTransactionData = {
      transitionName: 'expenses',
      transitionDate: currentDate,
      transitionCategory: data.category,
      transitionValue: +data.balance,
      transitionDescription: data.description,
    };
    console.log(addTransactionData);

    dispatch(addTransaction(addTransactionData));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {isTablet && <CalendarHome />}
      <FormInputText
        name="description"
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
        <FormInputNumber name="balance" control={control} label="00.00" required={true} />
        <CalculatorIcon width="20" height="20" />
      </div>
      <div className={s.overlayBtn}>
        <Button text="Input" btnClass="btnFormAddExpInc" />
        <Button text="Clear" btnClass="btnFormAddExpInc" />
      </div>
    </form>
  );
}
