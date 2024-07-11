import { accessTokenVar } from "z-library-a"
// import { useContext } from "react"
import { useReactiveVar } from "@apollo/client";


const ComponentB = () => {
  // const user = useContext(UserContext);
  const accessTokenData = useReactiveVar(accessTokenVar);

  return (
    <>
        <div>Component B - Library B</div>
        {/* <div>ComponentB - Lib B {user}</div> */}
        {/* <ComponentC /> */}

        <div>
         {/* <UpdateButton /> */}

          <p>Lib b:: {JSON.stringify(accessTokenVar())}</p>
          <p>Access Token: {accessTokenData.accessToken}</p>
          <p>Role: {accessTokenData.claims.role}</p>
          <p>Sub: {accessTokenData.claims.sub}</p>
        </div>
    </>
  )
}

export default ComponentB