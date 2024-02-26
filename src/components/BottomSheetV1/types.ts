import {ReactNode} from 'react';

export interface ActionExpandProps {
  content?: ReactNode;
}

export enum BottomSheetEvents {
  SHOW = 'show',
  HIDE = 'hide',
  DISMISS = 'dismiss',
}
