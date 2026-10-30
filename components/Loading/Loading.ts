import { useEffect } from "react";
import { useSpring } from "@react-spring/web";

export const useBasicLoading = (
  status: boolean,
  loading: (value: boolean) => void,
) => {
  const loadingProps = useSpring({
    opacity: status ? 1 : 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      loading(true);
    }, 500);
    return () => clearTimeout(timer);
  });

  return loadingProps;
};
