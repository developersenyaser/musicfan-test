import { type TrackListItemOutput } from "../dal/api";
import styles from './TrackItem.module.css'
import clsx from "clsx";

type Props = { 
    isSelected: boolean, 
    onSelect: (trackId: string) => void,
    track: TrackListItemOutput,
}


export function TrackItem({ onSelect, track, isSelected, }: Props) {

    const handleClick = () => onSelect(track.id); 


    return(

        

        <li 
        className = {clsx( {
            [styles.track]: true,
            [styles.selected]: isSelected
            
        })} 
        
        key={track.id}>

            <div onClick={ handleClick }>{track.attributes.title}</div>

            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>

    )
    
}