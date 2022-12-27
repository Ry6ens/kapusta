import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Avatar } from '@mui/material';

import { getUser } from 'redux/auth/auth-selectors';
import { userDelete } from 'redux/user/user-operations';
import { logOut } from 'redux/auth/auth-operations';

import TitleH1 from 'components/ui/TitleH1/TitleH1';
import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputFile from 'components/FormComponents/FormInputFile';
import FormInputSelect from 'components/CabinetForm/FormComponents/FormInputSelect';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import Modal from 'components/layout/Modal/Modal';

import DeleteIcon from 'components/icons/Delete/Delete';
import CloseIcon from 'components/icons/Close/Close';

import {
  optionsSex,
  optionsDate,
  optionsMonth,
  optionsYear,
} from './FormComponents/optionsSelect';

import s from './CabinetForm.module.scss';

export default function CabinetForm() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(getUser);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      file: '',
      firstName: '',
      lastName: '',
      sex: '',
      date: '',
      month: '',
      year: '',
      email: '',
    },
  });

  const onSubmit = data => {
    // console.log(data);
    reset();
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleDeleteAccount = () => {
    dispatch(userDelete(user._id));
    dispatch(logOut());
  };

  const handleDeleteAvatar = () => {};

  const handelClose = () => {
    setShowModal(false);
  };

  return (
    <div className={s.cabinetForm}>
      <TitleH1 text="Account settings" />
      <Text text="Profile photo" textClass="textAccount" />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.imgForm}>
          <Avatar
            alt={user.name}
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
          <DeleteIcon
            iconClass="iconAccount"
            width="20px"
            height="20px"
            onClick={handleDeleteAvatar}
          />
        </div>
        <div className={s.names}>
          <div className={s.name}>
            <Text text="First Name:" textClass="textFormEmail" />
            <FormInputText
              name="firstName"
              control={control}
              label={user.firstName}
              required="This is a required field"
            />
          </div>
          <div className={s.name}>
            <Text text="Last Name:" textClass="textFormEmail" />
            <FormInputText
              name="lastName"
              control={control}
              label={user.lastName}
              required="This is a required field"
            />
          </div>
        </div>
        <Text text="Sex (optional):" textClass="textFormEmail" />
        <FormInputSelect
          name="sex"
          options={optionsSex}
          control={control}
          label={user.gender}
          required={false}
        />
        <Text text="Date of birth (optional):" textClass="textFormEmail" />
        <div className={s.date}>
          <FormInputSelect
            name="date"
            options={optionsDate}
            control={control}
            label={user.dateBirth}
            required={false}
          />
          <FormInputSelect
            name="month"
            options={optionsMonth}
            control={control}
            label={user.monthBirth}
            required={false}
          />
          <FormInputSelect
            name="year"
            options={optionsYear}
            control={control}
            label={user.yearBirth}
            required={false}
          />
        </div>
        <Text text="Email:" textClass="textFormEmail" />
        <FormInputEmail
          name="email"
          control={control}
          label={user.email}
          type="email"
          required="This is a required field"
        />
        <Button text="Update my settings" btnClass="btnAccount" type="submit" />
        <Button
          text="Delete Account"
          btnClass="btnAccountDelete"
          type="button"
          onClick={handleOpenModal}
        />
      </form>
      {showModal && (
        <Modal onClose={handelClose}>
          <CloseIcon width="12" height="12" iconClass="iconModal" onClick={handelClose} />
          <Text text="Do you really want to delete account?" textClass="textModal" />
          <div className={s.overlayBtns}>
            <Button text="Yes" onClick={handleDeleteAccount} />
            <Button text="No" onClick={handelClose} />
          </div>
        </Modal>
      )}
    </div>
  );
}
