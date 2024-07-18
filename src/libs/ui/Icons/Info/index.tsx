import { TSVGProps } from '../../types';

const InfoIcon = ({
  fill = 'none',
  width = '24',
  height = '24',
  className = 'stroke-info h-6 w-6 shrink-0',
}: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
};

export default InfoIcon;
