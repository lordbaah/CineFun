import React from 'react'

const TVShowVideo = ({videos}) => {
  // Limit the number of videos to a maximum of 3
  const limitedVideos = videos.slice(0, 3);


  return (
    <section className="videos-section">
      <div className="container">
        <h2>Trailers</h2>
        <div className='video-list-wrapper'>
          {limitedVideos.length > 0 ? (
            limitedVideos.map((video) => (
              <div key={video.id} className="video">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))
          ) : (
            <p>No trailers available.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default TVShowVideo
