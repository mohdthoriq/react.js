import useCounter from './useCounter'
import useToggle from './useToggle'

const useCounterWithToggle = (initialValue = 0) => {
  const { count, increment, decrement, reset } = useCounter(initialValue)
  const [isVisible, toggleVisibility] = useToggle(true)
  return { count, increment, decrement, reset, isVisible, toggleVisibility }
}

export default useCounterWithToggle
