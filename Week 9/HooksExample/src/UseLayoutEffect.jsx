// Runs before browser paint. Use rarely.
// Use when:
// DOM measurement
// Layout calculation
// Avoiding flicker
//Most cases: use useEffect, not useLayoutEffect.

import { useId } from "react";


export default function UseLayoutEffect() {
    const id = useId();
    
  return (
    <div>
      <label htmlFor="{id}">Name</label>
      <input id={id} type="text"/>
    </div>
  )
}
