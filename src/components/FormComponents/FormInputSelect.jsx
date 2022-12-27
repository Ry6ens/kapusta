import { useLocation } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { optionsExp, optionsInc } from './optionsSelect';

const CssFormControl = styled(FormControl)({
  width: '100%',

  border: '2px solid var(--background-color)',
  borderBottomRightRadius: '30px',

  background: 'var(--second-background-color)',

  '& div div': {
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '1.17',
    letterSpacing: '0.02em',

    textAlign: 'left',
    textTransform: 'initial',

    color: 'var(--second-text-color)',
  },
  '& div svg': {
    fill: 'var(--text-color-input)',
  },
  '&.Mui-focused': { borderColor: 'transparent' },
  '& div fieldset': {
    border: '1px solid transparent',
    borderBottomRightRadius: '30px',
  },
  '& .MuiFormLabel-root ': {
    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '0.04em',
    textAlign: 'left',
    textTransform: 'initial',

    color: 'var(--text-color-input)',
  },
});

const CssFormControlTab = styled(FormControl)({
  width: '180px',

  border: '2px solid var(--btn-color)',
  borderLeft: 'none',

  background: 'var(--background-color)',

  '& div div': {
    padding: '10px 15px',

    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '1.17',
    letterSpacing: '0.02em',

    textAlign: 'left',
    textTransform: 'initial',

    color: 'var(--second-text-color)',
  },
  '& div svg': {
    fill: 'var(--text-color-input)',
  },
  '&.Mui-focused': { borderColor: 'transparent' },
  '& div fieldset': {
    border: '1px solid transparent',
  },
  '& .MuiFormLabel-root ': {
    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '0.04em',
    textAlign: 'left',
    textTransform: 'initial',

    color: 'var(--text-color-input)',
  },
});

const MenuItemStyled = styled(MenuItem)({
  padding: '0px 20px',
  height: '30px',

  fontSize: 'var(--text-size)',
  lineHeight: 'var(--line-height)',
  letterSpacing: '0.02em',
  textTransform: 'initial',

  color: 'var(--text-color-input)',

  '&:hover': {
    background: 'var(--btn-color)',
    color: 'var(--text-color)',
  },
  '&:focus': {
    background: 'var(--btn-color)',
    color: 'var(--text-color)',
  },
});

export default function FormInputSelect({ name, control, label, required }) {
  const { pathname } = useLocation();

  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const options = pathname === '/expenses' ? optionsExp : optionsInc;

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
            <CssFormControl>
              <Select
                displayEmpty
                labelId="select-standard-label"
                variant="outlined"
                value={value}
                onChange={onChange}
                label={label}
                input={<OutlinedInput />}
                error={!!error}
              >
                <MenuItemStyled disabled value="">
                  {label}
                </MenuItemStyled>
                {options.map(option => (
                  <MenuItemStyled key={option} value={option}>
                    {option}
                  </MenuItemStyled>
                ))}
              </Select>
            </CssFormControl>
          )}
          {isTablet && (
            <CssFormControlTab>
              <Select
                displayEmpty
                labelId="select-standard-label"
                variant="outlined"
                value={value}
                onChange={onChange}
                label={label}
                input={<OutlinedInput />}
                error={!!error}
              >
                <MenuItemStyled disabled value="">
                  {label}
                </MenuItemStyled>
                {options.map(option => (
                  <MenuItemStyled key={option} value={option}>
                    {option}
                  </MenuItemStyled>
                ))}
              </Select>
            </CssFormControlTab>
          )}
        </>
      )}
    />
  );
}
