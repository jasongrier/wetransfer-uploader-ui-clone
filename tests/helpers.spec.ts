export function formatFileSize(size: number) {
  if (size > 999999) {
    return Math.round(size / 1000000) + 'GB'
  } else if (size > 99999) {
    return Math.round(size / 100000) + 'MB'
  } else if (size > 999) {
    return Math.round(size / 1000) + 'KB'
  } else {
    return size + 'B'
  }
}
