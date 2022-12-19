import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const TextFieldStyledMob = styled(TextField)({
  '& div': {
    width: '140px',
    height: '44px',

    background: '#F6F7FB',

    border: '2px solid #FFFFFF',
    borderRadius: '22px 0px 0px 22px',
  },
  '& div fieldset': {
    border: '1px solid transparent',
    borderRadius: '22px 0px 0px 22px',
  },
  '& input': {
    padding: '12px 14px 12px 60px',

    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '1.17',
    letterSpacing: '0.02em',
    textTransform: 'initial',

    color: 'var(--second-text-color)',
    background: 'transparent',

    borderRadius: '30px',
  },
  '& input::placeholder': {
    color: 'var(--second-text-color)',
    opacity: 1,
  },
  '& p': {
    margin: '4px 0px',

    textTransform: 'initial',
  },
});

const TextFieldStyledTab = styled(TextField)({
  '& div': {
    width: '125px',

    background: '#F6F7FB',

    border: '2px solid #FFFFFF',
    borderRadius: '16px',
  },
  '& div fieldset': {
    border: '2px solid var(--background-color)',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
  },
  '& input': {
    padding: '12px 20px 12px 40px',

    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '1.14',
    letterSpacing: '0.02em',
    textTransform: 'initial',

    color: 'var(--second-text-color)',
    background: 'transparent',

    borderRadius: '30px',
  },
  '& input::placeholder': {
    color: 'var(--second-text-color)',
    opacity: 1,
  },
  '& p': {
    margin: '4px 0px',

    textTransform: 'initial',
  },
});

export default function FormInputNumber({ name, control, label, required }) {
  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          {isMobile && (
            <TextFieldStyledMob
              type="number"
              variant="outlined"
              placeholder={label}
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              InputProps={{
                disableunderline: 'true',
              }}
            />
          )}
          {isTablet && (
            <TextFieldStyledTab
              type="number"
              variant="standard"
              placeholder={label}
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              InputProps={{
                disableUnderline: true,
              }}
            />
          )}
        </>
      )}
    />
  );
}
