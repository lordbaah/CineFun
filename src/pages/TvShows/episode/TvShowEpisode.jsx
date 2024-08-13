import React from 'react'

const TvShowEpisode = ({episodes}) => {
  return (
    <div>
        <h2>Episodes - Season 1</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TvShowEpisode
