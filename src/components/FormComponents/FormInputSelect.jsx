import Select from 'react-select';

import s from './SelectOptions.module.scss';

const optionsProductCategory = [
  { value: 'Transport', label: 'Transport' },
  { value: 'Health', label: 'Health' },
  { value: 'Alcohol', label: 'Alcohol' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Housing', label: 'Housing' },
  { value: 'Technique', label: 'Technique' },
  { value: 'Communal, communication', label: 'Communal, communication' },
  { value: 'Sports, hobbies', label: 'Sports, hobbies' },
  { value: 'Education', label: 'Education' },
  { value: 'Other', label: 'Other' },
];

export default function FormInputSelect({ onChange }) {
  const selectValue = e => {
    onChange(e.value);
  };

  return (
    <Select
      options={optionsProductCategory}
      className={s.options}
      onChange={e => selectValue(e)}
      isSearchable={false}
    />
  );
}
