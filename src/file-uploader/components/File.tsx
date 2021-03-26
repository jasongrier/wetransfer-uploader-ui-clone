import React, { Fragment, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cancelUpload, updateUploadedSize } from "../actions";
import { IState } from "../types";

/**
 * IRL this would wrap an <input type="file">, and/or some FileReader/Blob logic.
 *
 * @returns ReactElement
 */
export default function File(): ReactElement {
  const { totalSize, uploadedSize } = useSelector((state: IState) => ({
    totalSize: state.totalSize,
    uploadedSize: state.uploadedSize,
  }));

  const dispatch = useDispatch();

  useEffect(
    function startUploading() {
      const timeoutId = window.setTimeout(() => {
        const updatedUploadedSize = uploadedSize + 100000000;

        if (updatedUploadedSize > totalSize) {
          dispatch(cancelUpload());
        } else {
          dispatch(updateUploadedSize(updatedUploadedSize));
        }
      }, 1000);

      return function cleanup() {
        clearTimeout(timeoutId);
      };
    },
    [totalSize, uploadedSize]
  );

  return <Fragment />;
}
