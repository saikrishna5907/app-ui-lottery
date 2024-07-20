import classNames from 'classnames';
import { StatProps } from '../types/StatProps';

const Stat = ({
  title,
  value,
  description,
  descriptionClassName,
  titleClassName,
  valueClassName,
}: StatProps) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className={classNames('stat-title', titleClassName)}>{title}</div>
        <div className={classNames('stat-value', valueClassName)}>{value}</div>
        {description && (
          <div className={classNames('stat-desc', descriptionClassName)}>{description}</div>
        )}
      </div>
    </div>
  );
};
export default Stat;
