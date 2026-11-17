import { useState, useEffect } from "react";
import { getTrack, type TrackDetailsResource } from "../dal/api";


export function useTrackDetail(trackId: null | string) {
   const [selectedTrack, setSelectedTrack] = useState< TrackDetailsResource | null>(null);

    

    useEffect( () => {
        if(trackId !== null){

          getTrack(trackId)
            .then((json) => setSelectedTrack(json.data))
    
        }else{
          setSelectedTrack(null);  
        }
        
    
        },
        [trackId])

        return { selectedTrack }

}