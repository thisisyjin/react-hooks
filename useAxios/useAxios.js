import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now()); // 고유한 임의의 숫자 생성
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]); // trigger이 변경될때마다 리패칭
  return { ...state, refetch };
};

export default useAxios;
