// nextjs-datafetching/app/utils/handleError.js
export const handleError = (error) => {
  if (error.response) {
    console.error('Server Error:', error.response.data);
    return error.response.data.message || 'Server Error';
  } else if (error.request) {
    console.error('Network Error:', error.message);
    return 'Network Error: Please check your connection.';
  } else {
    console.error('Unexpected Error:', error.message);
    return 'Unexpected Error occurred.';
  }
};
