import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { signUp } from 'redux/auth/auth-operations';

import Button from 'components/ui/Button/Button';
import Text from 'components/ui/Text/Text';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import FormInputPassword from 'components/FormComponents/FormInputPassword';

import s from './FormSingup.module.scss';

export default function FormLogin() {
  const dispatch = useDispatch();

  const { control, handleSubmit, setError, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  const onSubmit = ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      setError('password', {
        type: 'manual',
        message: 'This is wrong password',
      });
      setError('confirmPassword', {
        type: 'manual',
        message: 'This is wrong password',
      });
      return;
    }
    dispatch(signUp({ name, email, password }));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Text text="Sing up using your work email:" textClass="textFormHead" />
      <Text text="Name:" textClass="textFormEmail" />
      <FormInputText name="name" control={control} label="name" />
      <Text text="Email:" textClass="textFormEmail" />
      <FormInputEmail
        name="email"
        control={control}
        label="your@email.com"
        type="email"
      />
      <Text text="Password:" textClass="textFormPassword" />
      <FormInputPassword
        name="password"
        control={control}
        label="Password"
        type="password"
      />
      <Text text="Confirm password:" textClass="textFormPassword" />
      <FormInputPassword
        name="confirmPassword"
        control={control}
        label="Confirm password"
        type="password"
      />
      <div className={s.buttonsLay}>
        <NavLink className={getClassName} to="/login">
          Log in
        </NavLink>
        <Button text="Registration" btnClass="btnLogin" />
      </div>
    </form>
  );
}
