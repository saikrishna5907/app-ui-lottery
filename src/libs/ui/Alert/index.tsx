import InfoIcon from '../Icons/Info';
import { TAlertProps } from '../types/AlertTypes';

const Alert = ({ type, message }: TAlertProps) => {
  return (
    <div role="alert" className="alert">
      {type === 'info' && <InfoIcon />}
      <span>{message}</span>
    </div>
  );
};

export default Alert;
