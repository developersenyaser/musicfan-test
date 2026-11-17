export type TrackDetailsResource =  {
  id: string,
  attributes: {
    title: string,
    lyrics: string | null,
  }
}

type GetTrackDetailOutput = {data: TrackDetailsResource}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey){
    return undefined
  }else{
    return {
      'api-key': apiKey
    }
  }
}

export const getTrack = (trackId: string | null) => {
    const promise: Promise<GetTrackDetailOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, 
          { headers: prepareHeaders()
        }).then(res => res.json())

        return promise

}

type AttachmentsDto = {url: string}

type TrackListItemOutputAttributes = {
    title: string,
    attachments: Array<AttachmentsDto>
  }

export type TrackListItemOutput = { 
  id: string,
  attributes: TrackListItemOutputAttributes,
}

type GetTrackListOutput = {data: Array<TrackListItemOutput>}


export const getTracks = () => {
        
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', 
          { headers:  prepareHeaders()
        }).then(res => res.json())
    
        return promise
}
