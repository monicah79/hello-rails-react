export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export function fetchGreetingSuccess(greeting) {
  return {
    type: FETCH_GREETING_SUCCESS,
    greeting,
  };
}

export function fetchGreeting() {
  return (dispatch) => {
    fetch('/api/messages')
      .then((response) => response.json())
      .then((data) => {
        const message = data[0];
        dispatch(fetchGreetingSuccess(message.content));
      });
  };
}
