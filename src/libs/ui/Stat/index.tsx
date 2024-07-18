import { StatProps } from '../types/StatProps';

const Stat = ({ title, value, description }: StatProps) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value text-sm break-all">{value}</div>
        {description && <div className="stat-desc">{description}</div>}
      </div>
    </div>
  );
};
export default Stat;
