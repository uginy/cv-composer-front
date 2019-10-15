import {
  CvFormDrawerStateActionsTypes,
  CvFormDrawerActions
} from '@app/store/actions';

import { CvFormDrawerState } from '../models';

export interface CvDrawerState {
  drawerState?: boolean;
}

const initialState: CvFormDrawerState = {
  drawerState: false
};

export function CvDrawerReducer(
  state: CvFormDrawerState = initialState,
  action: CvFormDrawerActions
) {
  switch (action.type) {
    case CvFormDrawerStateActionsTypes.LOAD_FORM_DRAWER:
      return { ...state };
    case CvFormDrawerStateActionsTypes.UPDATE_FORM_DRAWER:
      return {
        ...state,
        drawerState: action.payload
      };
    default:
      return state;
  }
}
