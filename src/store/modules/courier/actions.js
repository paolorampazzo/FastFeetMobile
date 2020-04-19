export function signInRequest(id) {
  return {
    type: '@courier/SIGN_IN_MOBILE_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(user) {
  return {
    type: '@courier/SIGN_IN_MOBILE_SUCCESS',
    payload: { user },
  };
}

export function signInFailure() {
  return {
    type: '@courier/SIGN_IN_MOBILE_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@courier/SIGN_OUT_MOBILE',
  };
}
