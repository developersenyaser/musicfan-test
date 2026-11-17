import { TrackDetail } from './ui/TrackDetail.tsx'
import { TrackList }  from './ui/TrackList.tsx'
import { useTrackSelection } from './bll/useTrackSelection.tsx';

function App() {
  
  const {trackId, handleTrackSelect} = useTrackSelection();
  
  return (
    <div style={ {display: 'flex'}}>
    <TrackList onTrackSelect = { handleTrackSelect } selectedTrackId = {trackId}/>
    <TrackDetail trackId = {trackId}/>  
    </div>
  )
}

export default App
