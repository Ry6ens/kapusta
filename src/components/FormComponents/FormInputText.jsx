import { Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldStyled = styled(TextField)({
  '& div': {
    border: 'none',
    borderRadius: '30px',
    background: 'var(--second-background-color)',
  },
  '& div input': {
    padding: '17px',

    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '0.04em',
    textTransform: 'initial',

    color: '#A6ABB9',
    background: '#F6F7FB',

    borderRadius: '30px',
  },
  '& p': {
    margin: '4px 0px',

    textTransform: 'initial',
  },
});

const TextFieldStyledExpInc = styled(TextField)({
  width: '100%',

  border: '2px solid var(--background-color)',
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',

  background: 'var(--second-background-color)',
  '& div input': {
    padding: '17px',

    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '1.17',
    letterSpacing: '0.02em',
    textTransform: 'initial',

    color: 'var(--second-text-color)',
  },
  '& div input:placeholder': {
    padding: '17px',

    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '0.04em',
    textTransform: 'initial',

    color: 'var(--text-color-input)',
  },
  '& div fieldset': {
    border: '1px solid transparent',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
  },
  '& p': {
    margin: '4px 0px',

    textTransform: 'initial',
  },
});

export default function FormInputText({ name, control, label, required }) {
  const { pathname } = useLocation();

  const styleFormLogReg = pathname === '/login' || pathname === '/signup' ? true : false;
  const styleFormAddExpInc =
    pathname === '/expenses' || pathname === '/income' ? true : false;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          {styleFormLogReg && (
            <TextFieldStyled
              variant="outlined"
              placeholder={label}
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}

          {styleFormAddExpInc && (
            <TextFieldStyledExpInc
              type="text"
              variant="outlined"
              placeholder={label}
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        </>
      )}
    />
  );
}
