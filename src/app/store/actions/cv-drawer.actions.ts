import { Action } from '@ngrx/store';
import { CvFormDrawerState } from '@app/store/models';

export enum CvFormDrawerStateActionsTypes {
  LOAD_FORM_DRAWER = '[CV FORM DRAWER] Load Cv form drawer state',
  UPDATE_FORM_DRAWER = '[CV FORM DRAWER] Update Cv form drawer state'
}

export class LoadCvFormDrawerAction implements Action {
  readonly type = CvFormDrawerStateActionsTypes.LOAD_FORM_DRAWER;
}
export class UpdateCvFormDrawerAction implements Action {
  readonly type = CvFormDrawerStateActionsTypes.UPDATE_FORM_DRAWER;

  constructor(public payload: CvFormDrawerState) {}
}
export type CvFormDrawerActions =
  | LoadCvFormDrawerAction
  | UpdateCvFormDrawerAction;
