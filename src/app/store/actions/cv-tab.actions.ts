import { Action } from '@ngrx/store';
import { CvSelected } from '@app/store/models';

export enum CvSelectedTabActionTypes {
  LOAD_SELECTED_TAB = '[CV TAB] Load Cv selected Tab',
  UPDATE_SELECTED_TAB = '[CV TAB] Update Cv selected Tab'
}

export class LoadCvSelectedTabAction implements Action {
  readonly type = CvSelectedTabActionTypes.LOAD_SELECTED_TAB;
}
export class UpdateCvSelectedTabAction implements Action {
  readonly type = CvSelectedTabActionTypes.UPDATE_SELECTED_TAB;

  constructor(public payload: CvSelected) {}
}

export type CvSelectedTabActions =
  | LoadCvSelectedTabAction
  | UpdateCvSelectedTabAction;
