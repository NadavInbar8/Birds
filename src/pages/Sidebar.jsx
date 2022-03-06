import { useEffect, useState, useRef, useCallback } from 'react';
import { BirdDetails } from './BirdDetails';
import useFetch from './useFetch';
import bird from '../assets/bird.svg';

export const Sidebar = () => {
  const [selectedBird, setSelectedBird] = useState(null);
  const [page, setPage] = useState(1);
  const { loading, error, birds } = useFetch(page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <section className='sidebar'>
        <div className='birds-title'>
          <img className='bird-title-pic' src={bird} alt='' />
          <h1>Birds</h1>
        </div>
        <ul>
          {birds.length > 0 ? (
            birds.map((bird, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedBird(bird);
                  }}
                >
                  <img src={bird.image} className='sidebar-pic' />
                  <span>{bird.name}</span>
                </li>
              );
            })
          ) : (
            <li>no birds</li>
          )}
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          <div ref={loader} />
        </ul>
      </section>
      {selectedBird ? <BirdDetails bird={selectedBird} /> : null}
    </>
  );
};
