import { useForm } from 'react-hook-form';

import FormInputNumber from 'components/FormComponents/FormInputNumber';

import Button from 'components/ui/Button/Button';
import Text from 'components/ui/Text/Text';

import s from './FormAddBalance.module.scss';

export default function FormAddBalance() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      balance: '',
    },
  });

  const onSubmit = data => {
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Text text="Balance" textClass="textHomeBalance" />
      <FormInputNumber name="balance" control={control} label="00.00 UAH" />
      <Button text="Confirm" btnClass="btnConfirm" />
    </form>
  );
}
