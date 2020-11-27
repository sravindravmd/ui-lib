import { useEffect } from 'react'

const useClickOutside = (ref, callback, isOpen) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    }
  }, [isOpen])
}
export default useClickOutside
