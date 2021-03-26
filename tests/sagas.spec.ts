import { put, select, takeLatest } from 'redux-saga/effects'

import {
  updateFileCount,
  updateRecipientsCount,
  updateTimeRemaining,
  updateTotalSize,
  updateUploadedSize,
} from './actions'

import { FAKE_TOTAL_SIZE, FAKE_TOTAL_TIME, CANCEL_UPLOAD, START_UPLOAD, UPDATE_UPLOADED_SIZE, IState } from './types'

/**
 * Fakes some API/FileReader stuff that happens when upload begins
 */
function* start(): any {
  try {
    yield put(updateFileCount(11))
    yield put(updateRecipientsCount(4))
    yield put(updateTimeRemaining(FAKE_TOTAL_TIME))
    yield put(updateTotalSize(FAKE_TOTAL_SIZE))
    yield put(updateUploadedSize(1))
  } catch (err) {
    console.error(err)
  }
}

/**
 * Fakes some upload time estimates
 */
function* updateSize(): any {
  try {
    const state: IState = yield select()
    yield put(updateTimeRemaining(FAKE_TOTAL_TIME - (FAKE_TOTAL_TIME * state.uploadedSize) / FAKE_TOTAL_SIZE))
  } catch (err) {
    console.error(err)
  }
}

/**
 * Fakes some stuff that happens when upload is cancelled
 */
function* cancel(): any {
  try {
    yield put(updateFileCount(0))
    yield put(updateRecipientsCount(0))
    yield put(updateTotalSize(0))
  } catch (err) {
    console.error(err)
  }
}

function* fileUploader() {
  yield takeLatest(START_UPLOAD, start)
  yield takeLatest(CANCEL_UPLOAD, cancel)
  yield takeLatest(UPDATE_UPLOADED_SIZE, updateSize)
}

export { fileUploader }
