// redux/actions/ratingform.js
import { POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE } from '../reducers/types';


export const submitReview = (reviewData) => async (dispatch) => {
  try {
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    const data = await res.json();

    if (data.success) {
      dispatch({
        type: POST_REVIEW_SUCCESS,
        payload: data.message,
      });
    } else {
      dispatch({
        type: POST_REVIEW_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_REVIEW_FAILURE,
      payload: error.message,
    });
  }
};
