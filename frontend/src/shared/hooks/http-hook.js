import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]); // if user changes the UI to other screen, means we've to cancel this particular request

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);
      try {
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: headers,
          signal: httpAbortController.signal,
        });
        const responseData = await response.json();
        // here we only wants response having statuscode 200, because statuscode 400, 500 will be considered as a successful response
        // and for 200 code we'll get OK in the response, so, we'll leverage this property

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqController) => reqController !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortController) =>
        abortController.abort()
      );
    };
  }, []); // here useEffect will work as clean up mechanism, if user changes UI, then it'll abort the previous request

  return { isLoading, error, sendRequest, clearError };
};
