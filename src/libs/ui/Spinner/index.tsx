import { TSpinnerProps } from '../types';

const Spinner = ({ size = 'md', loading = false }: TSpinnerProps) => {
  if (!loading) return null;
  return <span className={`loading loading-spinner loading-${size}`}></span>;
};

export default Spinner;
