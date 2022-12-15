import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';

import { googleLogIn } from 'redux/auth/auth-operations';

import Text from 'components/ui/Text/Text';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import FormInputPassword from 'components/FormComponents/FormInputPassword';

import s from './FormLogin.module.scss';
import Button from 'components/ui/Button/Button';

export default function FormLogin() {
  const dispatch = useDispatch();

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '160834485099-gokn0fab6bj7qdmo42gdgp116u78c1dt.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    // google.accounts.id.prompt();

    google.accounts.id.renderButton(document.getElementById('singInDiv'), {
      theme: 'outline',
      type: 'icon',
      size: 'large',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCallbackResponse(response) {
    const userObj = jwt_decode(response.credential);
    dispatch(googleLogIn(userObj));
  }

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();

    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Text
        text="You can log in with your Google &#173; Account:"
        textClass="textFormHead"
      />
      <div id="singInDiv" className={s.googleButton} />
      <Text
        text="Or log in using an email and password,
after registering:"
        textClass="textFormCommit"
      />
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
      <div className={s.buttonsLay}>
        <Button text="Log in" />
        <Button text="Registration" />
      </div>
    </form>
  );
}
