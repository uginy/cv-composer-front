import {
  CvSelectedTabActionTypes,
  CvSelectedTabActions
} from '@app/store/actions';

import { CvSelected } from '../models';

export interface CvState {
  selectedTab?: number;
}

const initialState: CvSelected = {
  selectedTab: 0
};

export function CvReducer(
  state: CvSelected = initialState,
  action: CvSelectedTabActions
) {
  switch (action.type) {
    case CvSelectedTabActionTypes.LOAD_SELECTED_TAB:
      return { ...state };
    case CvSelectedTabActionTypes.UPDATE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload
      };
    default:
      return state;
  }
}
