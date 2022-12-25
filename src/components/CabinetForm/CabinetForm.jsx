import { useForm } from 'react-hook-form';
import { Avatar } from '@mui/material';

import TitleH1 from 'components/ui/TitleH1/TitleH1';
import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputFile from 'components/FormComponents/FormInputFile';
import FormInputSelect from 'components/CabinetForm/FormComponents/FormInputSelect';
import FormInputEmail from 'components/FormComponents/FormInputEmail';

import DeleteIcon from 'components/icons/Delete/Delete';

import {
  optionsSex,
  optionsDate,
  optionsMonth,
  optionsYear,
} from './FormComponents/optionsSelect';

import s from './CabinetForm.module.scss';

export default function CabinetForm() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      file: '',
      firstName: '',
      lastName: '',
      sex: '',
      date: '',
      month: '',
      year: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div className={s.cabinetForm}>
      <TitleH1 text="Account settings" />
      <Text text="Profile photo" textClass="textAccount" />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.imgForm}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            width="72px"
            height="72px"
          />
          <FormInputFile
            name="file"
            control={control}
            label="Upload Avatar"
            required={false}
          />
          <DeleteIcon width="20px" height="20px" />
        </div>
        <div className={s.names}>
          <div className={s.name}>
            <Text text="First Name:" textClass="textFormEmail" />
            <FormInputText
              name="firstName"
              control={control}
              label="First Name"
              required="This is a required field"
            />
          </div>
          <div className={s.name}>
            <Text text="Last Name:" textClass="textFormEmail" />
            <FormInputText
              name="lastName"
              control={control}
              label="Last Name"
              required="This is a required field"
            />
          </div>
        </div>
        <Text text="Sex (optional):" textClass="textFormEmail" />
        <FormInputSelect
          name="sex"
          options={optionsSex}
          control={control}
          label="sex"
          required={false}
        />
        <Text text="Date of birth (optional):" textClass="textFormEmail" />
        <div className={s.date}>
          <FormInputSelect
            name="date"
            options={optionsDate}
            control={control}
            label="date"
            required={false}
          />
          <FormInputSelect
            name="month"
            options={optionsMonth}
            control={control}
            label="month"
            required={false}
          />
          <FormInputSelect
            name="year"
            options={optionsYear}
            control={control}
            label="year"
            required={false}
          />
        </div>
        <Text text="Email:" textClass="textFormEmail" />
        <FormInputEmail
          name="email"
          control={control}
          label="your@email.com"
          type="email"
          required="This is a required field"
        />
        <Button text="Update my settings" type="submit"></Button>
      </form>
    </div>
  );
}
