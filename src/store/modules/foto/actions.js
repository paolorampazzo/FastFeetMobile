export function sendRequest(uri) {
  return {
    type: '@foto/SEND_REQUEST',
    payload: { uri },
  };
}

export function sendPhotoSuccess(id) {
  return {
    type: '@foto/SUCCESS',
    payload: { id },
  };
}

export function sendPhotoFailure() {
  return {
    type: '@foto/FAILURE',
  };
}
