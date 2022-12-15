import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldStyled = styled(TextField)({
  '& label': {
    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '0.04em',
    textTransform: 'initial',
    color: '#A6ABB9',
    background: '#F6F7FB',
  },
  '& div': {
    border: 'none',
    borderRadius: '30px',
    background: '#F6F7FB',
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

export default function FormInputEmail({ name, control, label, type }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This is a required field',
        pattern:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextFieldStyled
          variant="outlined"
          placeholder={label}
          type={type}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
