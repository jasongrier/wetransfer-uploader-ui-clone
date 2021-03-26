import {
  CANCEL_UPLOAD,
  START_UPLOAD,
  UPDATE_FILE_COUNT,
  UPDATE_RECIPIENTS_COUNT,
  UPDATE_TIME_REMAINING,
  UPDATE_TOTAL_SIZE,
  UPDATE_UPLOADED_SIZE,
  Action,
} from './types'

export const cancelUpload = (): Action => ({
  type: CANCEL_UPLOAD,
  payload: null,
})

export const startUpload = (): Action => ({
  type: START_UPLOAD,
  payload: null,
})

export const updateFileCount = (count: number): Action => ({
  type: UPDATE_FILE_COUNT,
  payload: count,
})

export const updateRecipientsCount = (count: number): Action => ({
  type: UPDATE_RECIPIENTS_COUNT,
  payload: count,
})

export const updateTimeRemaining = (time: number): Action => ({
  type: UPDATE_TIME_REMAINING,
  payload: time,
})

export const updateTotalSize = (size: number): Action => ({
  type: UPDATE_TOTAL_SIZE,
  payload: size,
})

export const updateUploadedSize = (size: number): Action => ({
  type: UPDATE_UPLOADED_SIZE,
  payload: size,
})
