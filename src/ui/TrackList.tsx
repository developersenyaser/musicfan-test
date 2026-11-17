
import { TrackItem} from "./TrackItem";

import { useTracks } from '../bll/useTracks'
import styles from './TrackList.module.css'


type Props = {
  selectedTrackId: string | null,
  onTrackSelect: (id: null | string) => void,
}

export function TrackList({onTrackSelect, selectedTrackId} : Props) {

      const {tracks} = useTracks();


      const handleResetClick = ()  => { onTrackSelect(null) };

      const handleClick = (trackId: string) => { onTrackSelect?.(trackId) };

    return (

    
       <div className={styles.trackList}> 

        <button onClick={handleResetClick}>RESET</button>

        <hr />
        
        <h1>Musicfan</h1>
        <div style={{ display: 'flex'}}>
          <div>

            {tracks === null 
              ? <h3>LOADING</h3>
              : <ul className={styles.tracks}>
          {tracks.map((track) => {

            return(
              <TrackItem  key ={ track.id }
                          isSelected = { track.id === selectedTrackId }
                          track = {track} 
                          onSelect = { handleClick } 
              />

            )
            
          })}

        </ul>
            }
            
            </div>

          </div>
        </div>
        
    )


}


