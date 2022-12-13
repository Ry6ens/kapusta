import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldStyled = styled(TextField)({
  '& label': {
    paddingLeft: '10px',
    fontFamily: "'Roboto', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    zIndex: '1',
  },

  '& label.Mui-focused': {
    fontFamily: "'Roboto', Sans-serif",
    fontWeight: '500',
    color: '#43291b',
    left: '3px',
  },
  '& .MuiInput-underline': {
    marginTop: '30px',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid hsl(0deg, 0%, 80%)',
    bottom: '-3px',
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid #43291b',
    bottom: '-3px',
  },
  '& .MuiInput-input': {
    paddingLeft: '10px',
    fontFamily: "'Roboto', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    boxShadow:
      'inset 0 0 0 1px rgba(253, 251, 248, 1), inset 0 0 0 100px rgba(253, 251, 248, 1)',
  },
  '& .MuiFormHelperText-root': {
    paddingLeft: '10px',
    fontFamily: "'Roboto', Sans-serif",
    fontSize: '10px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
  },
});

export default function FormInputEmail({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Обов'язкове поле",
        pattern:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextFieldStyled
          label={label}
          variant="standard"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
