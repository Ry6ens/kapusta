import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { userAddBalance } from 'redux/user/user-operations';

import FormInputNumber from './FormInputNumber';

import Button from 'components/ui/Button/Button';
import Text from 'components/ui/Text/Text';

import s from './FormAddBalance.module.scss';

export default function FormAddBalance() {
  const dispatch = useDispatch();

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
      <FormInputNumber
        name="newBalance"
        control={control}
        label="00.00 UAH"
        required={true}
      />
      <Button text="Confirm" btnClass="btnConfirm" />
    </form>
  );
}
