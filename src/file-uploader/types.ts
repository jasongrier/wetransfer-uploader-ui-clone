import { AnyAction } from "redux";

export const FAKE_TOTAL_SIZE = 360000000;
export const FAKE_TOTAL_TIME = 30;
export const WIDTH = 156;
export const STROKE_WIDTH = 12;
export const RADIUS = WIDTH / 2 - STROKE_WIDTH / 2;
export const CENTER = WIDTH / 2;
export const CIRCUMFERENCE = Math.PI * RADIUS * 2;

export interface IState {
  fileCount: number;
  recipientsCount: number;
  timeRemaining: number;
  totalSize: number;
  uploadedSize: number;
  uploadInProgress: boolean;
}

export const CANCEL_UPLOAD = "CANCEL_UPLOAD";
export const START_UPLOAD = "START_UPLOAD";
export const UPDATE_FILE_COUNT = "UPDATE_FILE_COUNT";
export const UPDATE_RECIPIENTS_COUNT = "UPDATE_RECIPIENTS_COUNT";
export const UPDATE_TIME_REMAINING = "UPDATE_TIME_REMAINING";
export const UPDATE_TOTAL_SIZE = "UPDATE_TOTAL_SIZE";
export const UPDATE_UPLOADED_SIZE = "UPDATE_UPLOADED_SIZE";

export interface ICancelUpload extends AnyAction {
  type: typeof CANCEL_UPLOAD;
  payload: null;
}

export interface IStartUpload extends AnyAction {
  type: typeof START_UPLOAD;
  payload: null;
}

export interface IUpdateFileCount extends AnyAction {
  type: typeof UPDATE_FILE_COUNT;
  payload: number;
}

export interface IUpdateRecipientsCount extends AnyAction {
  type: typeof UPDATE_RECIPIENTS_COUNT;
  payload: number;
}

export interface IUpdateTimeRemaining extends AnyAction {
  type: typeof UPDATE_TIME_REMAINING;
  payload: number;
}

export interface IUpdateTotalSize extends AnyAction {
  type: typeof UPDATE_TOTAL_SIZE;
  payload: number;
}

export interface IUpdateUploadedSize extends AnyAction {
  type: typeof UPDATE_UPLOADED_SIZE;
  payload: number;
}

export type Action =
  | ICancelUpload
  | IStartUpload
  | IUpdateFileCount
  | IUpdateRecipientsCount
  | IUpdateTimeRemaining
  | IUpdateTotalSize
  | IUpdateUploadedSize;
