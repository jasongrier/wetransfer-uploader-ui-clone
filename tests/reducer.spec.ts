import { AnyAction } from 'redux'
import produce from 'immer'
import {
  CANCEL_UPLOAD,
  START_UPLOAD,
  UPDATE_FILE_COUNT,
  UPDATE_RECIPIENTS_COUNT,
  UPDATE_TIME_REMAINING,
  UPDATE_TOTAL_SIZE,
  UPDATE_UPLOADED_SIZE,
  IState,
} from './types'

export const initialState: IState = {
  fileCount: 0,
  recipientsCount: 0,
  timeRemaining: 0,
  totalSize: 0,
  uploadedSize: 0,
  uploadInProgress: false,
}

export default (state: IState = initialState, { type, payload }: AnyAction): IState => {
  switch (type) {
    case CANCEL_UPLOAD: {
      return produce(state, (draftState) => {
        draftState.uploadInProgress = false
      })
    }

    case START_UPLOAD: {
      return produce(state, (draftState) => {
        draftState.uploadInProgress = true
      })
    }

    case UPDATE_FILE_COUNT: {
      return produce(state, (draftState) => {
        draftState.fileCount = payload
      })
    }

    case UPDATE_RECIPIENTS_COUNT: {
      return produce(state, (draftState) => {
        draftState.recipientsCount = payload
      })
    }

    case UPDATE_TIME_REMAINING: {
      return produce(state, (draftState) => {
        draftState.timeRemaining = payload
      })
    }

    case UPDATE_TOTAL_SIZE: {
      return produce(state, (draftState) => {
        draftState.totalSize = payload
      })
    }

    case UPDATE_UPLOADED_SIZE: {
      return produce(state, (draftState) => {
        draftState.uploadedSize = payload
      })
    }

    default:
      return state
  }
}
