// useRef is a React hook used to persist values between renders and directly access 
// DOM elements without causing component re-render.

import { useRef } from "react";


function InputFocus() {
   //useRef() creates a reference object.
   const inputRef = useRef(null);


    //"React, when this input DOM element is created, store it inside inputRef.current"
   function handleFocus(){
    inputRef.current.focus();
   }

return (
    <div>
       <input ref={inputRef} placeholder="Enter Name"/>
       <button onClick={handleFocus}>Focus Input</button>
    </div>
);
}
export default InputFocus;




// Normally React works with: State, Props, UI Rendering
// But sometimes we need direct access to actual DOM element:
//ilike: nput, button, video ,scroll div, canvas For this react gives (useRef)





//Output behavior
// 1. Page loads
// 2. Input box appears
// 3. User clicks button
// 4. Cursor moves inside input automatically