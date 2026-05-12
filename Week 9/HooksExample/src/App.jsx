import UseState from "./UseState"
import UseEffect from "./UseEffect"
import UseContext from "./UseContext"
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
//import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
// import UseLayoutEffect from "./UseLayoutEffect";
// import CustomHook from "./CustomHook";

export default function App() {
  return (
    <div>
      <UseState/>
      <UseEffect/>
      <UseContext/>
      <UseRef/>
      <UseReducer/>
      {/* <UseMemo/> */}
      <UseCallback/>
      {/* <UseLayoutEffect/> */}
      {/* <CustomHook/> */}
    </div>
  )
}
