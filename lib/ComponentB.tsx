import { Component1, UserContext } from "z-library-a"
import ComponentC from "./ComponentC"
import { useContext } from "react"


const ComponentB = () => {
  const user = useContext(UserContext)
  return (
    <Component1>
        <div>Component B - Library B</div>
        <div>ComponentB - Lib B {user}</div>
        <ComponentC />
    </Component1>
  )
}

export default ComponentB