import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldStyled = styled(TextField)({
  width: '130px',

  '& div input': {
    color: 'transparent',
    cursor: 'pointer',
  },
  '& div fieldset': {
    border: 'none',
  },
});

export default function FormInputFile({ name, control, label, required }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextFieldStyled
          placeholder={label}
          type="file"
          accept="image/png, image/jpeg"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
