import { Link } from 'react-router-dom';

import Text from 'components/ui/Text/Text';

import BarChartIcon from 'components/icons/BarChart/BarChart';

import s from './LinkReport.module.scss';

export default function LinkReport() {
  return (
    <Link to="/report" className={s.overlay}>
      <Text text="Reports" textClass="textHomeReports" />
      <BarChartIcon width="14" height="14" />
    </Link>
  );
}
