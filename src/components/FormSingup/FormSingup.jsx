import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { signUp } from 'redux/auth/auth-operations';
import { getErrorSignUp, getRegNewUser } from 'redux/auth/auth-selectors';
import { clearError } from 'redux/auth/auth-slice';

import Button from 'components/ui/Button/Button';
import Text from 'components/ui/Text/Text';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import FormInputPassword from 'components/FormComponents/FormInputPassword';

import s from './FormSingup.module.scss';

export default function FormLogin() {
  const dispatch = useDispatch();

  const errorSignUp = useSelector(getErrorSignUp);
  const newUser = useSelector(getRegNewUser);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const { control, handleSubmit, setError, reset } = useForm({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  const onSubmit = ({ firstName, email, password, confirmPassword }) => {
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
    dispatch(signUp({ firstName, email, password }));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Text text="Sing up using your work email:" textClass="textFormHead" />
      <Text text="Name:" textClass="textFormEmail" />
      <FormInputText
        name="firstName"
        control={control}
        label="name"
        required="This is a required field"
      />
      <Text text="Email:" textClass="textFormEmail" />
      <FormInputEmail
        name="email"
        control={control}
        label="your@email.com"
        type="email"
        required="This is a required field"
      />
      <Text text="Password:" textClass="textFormPassword" />
      <FormInputPassword
        name="password"
        control={control}
        label="Password"
        type="password"
        required="This is a required field"
      />
      <Text text="Confirm password:" textClass="textFormPassword" />
      <FormInputPassword
        name="confirmPassword"
        control={control}
        label="Confirm password"
        type="password"
        required="This is a required field"
      />
      {errorSignUp && <Text textClass="textError" text={errorSignUp} />}
      {newUser && (
        <Text textClass="textError" text="Thank you for registration. Please Login!" />
      )}
      <div className={s.buttonsLay}>
        <NavLink className={getClassName} to="/login">
          Log In
        </NavLink>
        <Button text="Sign Up" btnClass="btnLogin" />
      </div>
    </form>
  );
}
