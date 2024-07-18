export type TButtonType =
  | 'btn-neutral'
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-accent'
  | 'btn-ghost'
  | 'btn-link'
  | 'btn-info'
  | 'btn-success'
  | 'btn-warning'
  | 'btn-error';

export type TButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'title'
> & {
  title: string | React.ReactNode;
  loading?: boolean;
  loadingPosition?: 'start' | 'end';
  'data-testid'?: string;
  variant?: TButtonType;
  responsive?: boolean;
  outline?: boolean;
  wide?: boolean;
  buttonSize?: 'sm' | 'xs' | 'lg';
};
