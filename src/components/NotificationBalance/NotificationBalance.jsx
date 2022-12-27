import Text from 'components/ui/Text/Text';

import s from './NotificationBalance.module.scss';

export default function NotificationBalance() {
  return (
    <div className={s.overlay}>
      <Text text="Hello! To get started, enter the current balance of your account!" />
      <Text text="You can't spend money until you have it :)" />
    </div>
  );
}
