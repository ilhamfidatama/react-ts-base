export const LISTENER_TYPE_REQUEST = 'LISTENER_TYPE_REQUEST';
export const LISTENER_TYPE_SUCCESS = 'LISTENER_TYPE_SUCCESS';
export const LISTENER_TYPE_FAILURE = 'LISTENER_TYPE_FAILURE';

export const onRequest = () => ({
  type: LISTENER_TYPE_REQUEST,
});

export const onSuccess = (todos: any) => ({
  type: LISTENER_TYPE_SUCCESS,
  payload: todos,
});

export const onFailure = (error: any) => ({
  type: LISTENER_TYPE_FAILURE,
  payload: error,
});
