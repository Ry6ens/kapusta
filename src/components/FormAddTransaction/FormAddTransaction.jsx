import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import { addTransaction } from 'redux/transaction/transaction-operations';
import { getCurrentDate } from 'redux/transaction/transaction-selectors';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputNumber from 'components/FormComponents/FormInputNumber';
import FormInputSelect from 'components/FormComponents/FormInputSelect';

import Button from 'components/ui/Button/Button';

import CalculatorIcon from 'components/icons/Calculator/Calculator';

import CalendarHome from 'components/Calendar/Calendar';

import s from './FormAddTransaction.module.scss';

export default function FormAddTransaction() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isTablet = useMediaQuery('(min-width: 768px)');

  const currentDate = useSelector(getCurrentDate);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: '',
      description: '',
      category: '',
      balance: '',
    },
  });

  const onSubmit = data => {
    if (pathname === '/income') {
      const addTransactionData = {
        transitionName: 'income',
        transitionDate: currentDate,
        transitionCategory: data.category,
        transitionValue: +data.balance,
        transitionDescription: data.description,
      };

      dispatch(addTransaction(addTransactionData));
    }

    if (pathname === '/expenses') {
      const addTransactionData = {
        transitionName: 'expenses',
        transitionDate: currentDate,
        transitionCategory: data.category,
        transitionValue: +data.balance,
        transitionDescription: data.description,
      };

      dispatch(addTransaction(addTransactionData));
    }

    reset();
  };

  const resetForm = () => {
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
        <Button text="Clear" btnClass="btnFormAddExpInc" onClick={resetForm} />
      </div>
    </form>
  );
}
