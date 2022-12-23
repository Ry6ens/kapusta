import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { userAddBalance } from 'redux/user/user-operations';
import { getUserBalance } from 'redux/user/user-selectors';

import FormInputNumber from './FormInputNumber';

import Button from 'components/ui/Button/Button';
import Text from 'components/ui/Text/Text';

import s from './FormAddBalance.module.scss';

export default function FormAddBalance() {
  const dispatch = useDispatch();
  const balance = useSelector(getUserBalance);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      newBalance: '',
    },
  });

  const onSubmit = userData => {
    dispatch(userAddBalance(userData));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Text text="Balance" textClass="textHomeBalance" />
      <div className={s.overlay}>
        <FormInputNumber
          name="newBalance"
          control={control}
          label={balance}
          required={true}
        />
        <Text text="UAH" textClass="textFormAddBalance" />
        <Button text="Confirm" btnClass="btnConfirm" />
      </div>
    </form>
  );
}
