import { useLocation } from 'react-router-dom';
import { Controller } from 'react-hook-form';
// import InputLabel from '@mui/material/InputLabel';
// import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

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

// const InputLabelStyled = styled(InputLabel)({
//   fontSize: '14px',
//   lineHeight: '1.14',
//   letterSpacing: '0.04em',
//   textTransform: 'initial',

//   color: 'var(--text-color-input)',

//   '&.Mui-focused': { display: 'none' },
// });

const MenuItemStyled = styled(MenuItem)({
  padding: '0px 20px',
  minHeight: '30px',

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

const optionsExp = [
  'Transport',
  'Health',
  'Alcohol',
  'Entertainment',
  'Housing',
  'Technique',
  'Communal, communication',
  'Sports, hobbies',
  'Education',
  'Other',
];

const optionsInc = ['Salary', 'Add.Income'];

export default function FormInputSelect({ name, control, label, required }) {
  const { pathname } = useLocation();

  const options = pathname === '/expenses' ? optionsExp : optionsInc;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CssFormControl>
          {/* <InputLabelStyled>{label}</InputLabelStyled> */}
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
    />
  );
}
