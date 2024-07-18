import { ReactNode } from 'react';

export interface StatProps {
  value: string | number | ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
}