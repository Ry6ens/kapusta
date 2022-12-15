import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// const TextFieldStyled = styled(TextField)({
//   '& label': {
//     // padding: '17px',
//     // fontFamily: "'Roboto', Sans-serif",
//     fontSize: '14px',
//     lineHeight: '1.14',
//     letterSpacing: '0.04em',
//     textTransform: 'initial',
//     color: '#A6ABB9',
//   },
//   '& div': {
//     // minWidth: '240px',
//     borderRadius: '30px',
//   },
//   '& div input': {
//     padding: '17px',
//   },
//   '& label.Mui-focused': {
//     // fontFamily: "'Roboto', Sans-serif",
//     // fontWeight: '500',
//     // color: '#43291b',
//     // left: '3px',
//   },
//   '& .MuiInput-underline': {
//     // marginTop: '30px',
//   },
//   '& .MuiInput-underline:before': {
//     // borderBottom: '1px solid hsl(0deg, 0%, 80%)',
//     // bottom: '-3px',
//   },
//   '& .MuiInput-underline:after': {
//     // borderBottom: '2px solid #43291b',
//     // bottom: '-3px',
//   },
//   '& .MuiInput-input': {
//     // paddingLeft: '10px',
//     // fontFamily: "'Roboto', Sans-serif",
//     // fontSize: '16px',
//     // fontWeight: '300',
//     // lineHeight: '2',
//     // letterSpacing: '0.24em',
//     // textTransform: 'initial',
//     // boxShadow:
//     //   'inset 0 0 0 1px rgba(253, 251, 248, 1), inset 0 0 0 100px rgba(253, 251, 248, 1)',
//   },
//   '& .MuiFormHelperText-root': {
//     // paddingLeft: '10px',
//     // fontFamily: "'Roboto', Sans-serif",
//     // fontSize: '10px',
//     // fontWeight: '300',
//     // lineHeight: '2',
//     // letterSpacing: '0.24em',
//     // textTransform: 'initial',
//   },
// });

const TextFieldStyled = styled(TextField)(
  ({ theme }) => `

font-size: 14px;
line-height: 1.14;

padding: 17px 19px;

color: #A6ABB9;
background: #F6F7FB;

border-radius: 30px;
border: none;

&::placeholder {
  color: #A6ABB9;
}

&:hover,
&:focus {
  border-color: var(--btn-hover);
}
`
);

export default function FormInputPassword({ name, control, label, type }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This is a required field',
        minLength: 3,
        maxLength: 30,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextFieldStyled
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
