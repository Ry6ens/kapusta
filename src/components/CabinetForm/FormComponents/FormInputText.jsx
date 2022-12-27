import { Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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

const TextFieldStyledExpIncTab = styled(TextField)({
  width: '180px',

  border: '2px solid var(--btn-color)',
  borderTopLeftRadius: '30px',

  background: 'var(--background-color)',

  '& div input': {
    padding: '10px 15px',

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
  },
  '& p': {
    margin: '4px 0px',

    textTransform: 'initial',
  },
});

const TextFieldStyledExpIncDesk = styled(TextField)({
  width: '300px',

  border: '2px solid var(--btn-color)',
  borderTopLeftRadius: '30px',

  background: 'var(--background-color)',

  '& div input': {
    padding: '10px 15px',

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
  },
  '& p': {
    margin: '4px 0px',

    textTransform: 'initial',
  },
});

const TextFieldStyledAccount = styled(TextField)({
  width: '100%',

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

export default function FormInputText({ name, control, label, required }) {
  const { pathname } = useLocation();

  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTabletMin = useMediaQuery('(min-width: 768px)');
  const isTabletMax = useMediaQuery('(max-width: 1279.98px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const styleFormLogReg = pathname === '/login' || pathname === '/signup' ? true : false;
  const styleFormAddExpInc =
    pathname === '/expenses' || pathname === '/income' ? true : false;
  const styleFormAccount = pathname === '/settings/account' ? true : false;

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
            <>
              {isMobile && (
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
              {isTabletMin && isTabletMax && (
                <TextFieldStyledExpIncTab
                  type="text"
                  variant="outlined"
                  placeholder={label}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              {isDesktop && (
                <TextFieldStyledExpIncDesk
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

          {styleFormAccount && (
            <TextFieldStyledAccount
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
