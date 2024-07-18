import { THeaderProps } from '../types';

const Header = (props: THeaderProps) => {
  const { title, children } = props;
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">{title}</a>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-center gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Header;
