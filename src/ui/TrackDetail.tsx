import { useTrackDetail } from "../bll/useTrackDetail";
import styles from './TrackDetail.module.css'

type Props = {
  trackId: null | string,
}

export function TrackDetail({trackId}: Props) {

    
    const {selectedTrack} = useTrackDetail(trackId);
   
    
    return (

          <div className={styles.trackDetail}>
            <h3>Track Detail</h3>
            {trackId === null 
            ? 'no track selected'
            : selectedTrack === null
              ? 'LOADING..'
              :  <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <div><p>{selectedTrack.attributes.lyrics}</p></div>
              </div>
            }


          </div>
    )
}