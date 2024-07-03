import { useContext } from "react"
import { UserContext } from "z-library-a"


const ComponentC = () => {
    const user = useContext(UserContext)
  return (
    <div>ComponentC {user} Library B</div>
  )
}

export default ComponentC