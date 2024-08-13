import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CrewSection = ({ crew }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCrew = showAll ? crew : crew.slice(0, 6); // Display first 6 crew members initially

  return (
      <section className='section'>
          <div className="container">
            <h2>Crew</h2>
            <div className="crew-list">
              {visibleCrew.map((crewMember) => (
                <div key={crewMember.id} className="crew-member">
                  {/* <LazyLoadImage
                    src={crewMember.profile_path ? `https://image.tmdb.org/t/p/w200${crewMember.profile_path}` : 'https://placehold.co/200x300?text=No+Image'}
                    alt={crewMember.name}
                    effect="blur"
                    placeholderSrc="https://placehold.co/200x300?text=Loading"
                  /> */}
                  <p>{crewMember.name}</p>
                  <p>{crewMember.job}</p>
                </div>
              ))}
            </div>
            {crew.length > 6 && (
              <button onClick={() => setShowAll(!showAll)} className="view-more-btn">
                {showAll ? 'View Less' : 'View More'}
              </button>
            )}
          </div>
      </section>
  );
};

export default CrewSection;
