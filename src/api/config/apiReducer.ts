import {
    LISTENER_TYPE_REQUEST,
    LISTENER_TYPE_SUCCESS,
    LISTENER_TYPE_FAILURE,
  } from './listenerType';
  
  const initialState = {
    loading: false,
    responseData: [],
    error: '',
  };
  
  const apiReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case LISTENER_TYPE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTENER_TYPE_SUCCESS:
        return {
          ...state,
          loading: false,
          responseData: action.payload,
          error: '',
        };
      case LISTENER_TYPE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default apiReducer;
  