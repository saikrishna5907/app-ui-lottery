import classnames from 'classnames';
import Spinner from '../Spinner';
import { TButtonProps } from '../types';

const Button = (props: TButtonProps) => {
  const {
    title,
    className,
    loading = false,
    loadingPosition = 'start',
    variant = 'btn-primary',
    responsive,
    wide = false,
    outline = false,
    buttonSize = 'lg',
    icon,
    iconPosition = 'start',
    ...rest
  } = props;
  const { 'data-testid': dataTestId = 'button', disabled } = rest;

  const loader = (
    <Spinner loading={loading} aria-label="Loading Spinner" data-testid={`${dataTestId}-loader`} />
  );

  const responsiveClasses = responsive && 'btn-xs sm:btn-sm md:btn-md lg:btn-lg';
  const wideClasses = wide && 'btn-wide';
  const outlineClasses = outline && 'btn-outline';
  const buttonSizeClasses = `btn-${buttonSize}`;

  return (
    <button
      className={classnames(
        'btn',
        variant,
        buttonSizeClasses,
        outlineClasses,
        wideClasses,
        responsiveClasses,
        className,
      )}
      {...rest}
      disabled={disabled || loading}
    >
      {loadingPosition === 'start' && loader}
      {icon && iconPosition === 'start' && icon}
      {title}
      {icon && iconPosition === 'end' && icon}
      {loadingPosition === 'end' && loader}
    </button>
  );
};

export default Button;
