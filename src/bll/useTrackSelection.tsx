import { useState } from "react";

export function useTrackSelection() {
  
  const [trackId, setTrackId] = useState<null | string>(null);

  const handleTrackSelect = (id: null | string): void => { 
    
    setTrackId(id)
  
  } 
   
  return {trackId, handleTrackSelect}


}
