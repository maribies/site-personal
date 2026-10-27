import { useEffect } from 'react'
import { useSpring } from '@react-spring/web';

export const basicLoading = (status, loading) => {
  const loadingProps = useSpring({
    opacity: status ? 1 : 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      loading(true)
    }, 500)
    return () => clearTimeout(timer)
  })

  return loadingProps;
}
