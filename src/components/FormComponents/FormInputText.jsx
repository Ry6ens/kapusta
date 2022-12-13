import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label': {
    paddingLeft: '10px',
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    zIndex: '1',
  },
  '& label.Mui-focused': {
    fontFamily: "'ZionTrainOTLight', Sans-serif",
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
    fontFamily: "'ZionTrainOTLight', Sans-serif",
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
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '10px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
  },
});

export default function FormInputText({ name, control, label, type, required }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CssTextField
          label={label}
          variant="standard"
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
