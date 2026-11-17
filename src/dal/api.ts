export type TrackDetailsResource =  {
  id: string,
  attributes: {
    title: string,
    lyrics: string | null,
  }
}

type GetTrackDetailOutput = {data: TrackDetailsResource}

export const getTrack = (trackId: string | null) => {
    const promise: Promise<GetTrackDetailOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, 
          { headers: {
            'api-key': 'd03d02d2-2ff8-4270-b620-2db3e72f15df',
          }
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
          { headers: {
            'api-key': 'd03d02d2-2ff8-4270-b620-2db3e72f15df',
          }
        }).then(res => res.json())
    
        return promise
}
