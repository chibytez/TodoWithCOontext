import {useState} from "react"

const useToggle = (initialvalue = false) => {
  
  const [state,setState]= useState(initialvalue)
  const toggle = () => {
    setState(!state)
  };
  return [state,toggle]
}

export default useToggle;