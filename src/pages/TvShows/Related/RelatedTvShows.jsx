import Card from '../../../components/TvShowCard/Tvshowcard'

const RelatedTvShows = ({relatedShows}) => {
  return (
    <section className='section'>
        <div className="container related-movies">
            <h2>Recommended Shows</h2>
            <div className="related-movies-list">
                {relatedShows.slice(0, 10).map((relatedShow) => (
                <Card
                key={relatedShow.id}
                card_img={relatedShow.poster_path ? `https://image.tmdb.org/t/p/w500${relatedShow.poster_path}` : 'https://placehold.co/200x300?text=No+Image'}
                card_desc={relatedShow.name}
                tvId={relatedShow.id}
                />
                ))}
            </div>
        </div>
    </section>
  )
}

export default RelatedTvShows
