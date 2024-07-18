import { TActionState } from './Common';

export type TAlertProps = {
  type: TActionState;
  message: string | React.ReactNode;
};
