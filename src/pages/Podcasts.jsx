import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Podcasts = () => {
  const [searchParams] = useSearchParams();
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('A-Z'); // Default filter set to A-Z
  const [searchQuery, setSearchQuery] = useState('');

  const genresFilter = parseInt(searchParams.get("genres"));

  const genreMapping = {
    1: "Personal Growth🍃",
    2: "True Crime and Investigative Journalism🔎",
    3: "History📜",
    4: "Comedy😂",
    5: "Entertainment🎥🍿",
    6: "Business📈",
    7: "Fiction☕",
    8: "News📰",
    9: "Kids and Family👨‍👩‍👧‍👧",
  
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching new data
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
        setLoading(false);
      });
  }, [genresFilter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = () => {
    setFilter('A-Z'); // Reset filter to default when a search is performed
  };

  const sortShows = (a, b) => {
    if (filter === 'A-Z') {
      return a.title.localeCompare(b.title);
    } else if (filter === 'Z-A') {
      return b.title.localeCompare(a.title);
    } else if (filter === 'ascending') {
      return new Date(a.updated).getTime() - new Date(b.updated).getTime();
    } else if (filter === 'descending') {
      return new Date(b.updated).getTime() - new Date(a.updated).getTime();
    }
    return 0;
  };

  const formatUpdatedAt = (updated) => {
    const date = new Date(updated);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const filteredShows = shows
    .filter(show => show.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort(sortShows);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex mb-3">
        <input
          type="text"
          placeholder="Search podcasts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control me-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
      <label htmlFor="filter">Sort by:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="ascending">Date Ascending</option>
        <option value="descending">Date Descending</option>
      </select>
      <div className="ms-2">
        {Object.keys(genreMapping).map(key => (
          <Link key={key} to={`?genres=${key}`} className="btn btn-outline-secondary rounded-pill me-2">{genreMapping[key]}</Link>
        ))}
      </div>
      <div className="row p-3 border border-secondary border-2 rounded">
        {filteredShows.map((show) => (
          <div key={show.id} className="col-md-3 mb-4">
            <Link className="link-underline link-underline-opacity-0" to={`/podcasts/${show.id}`}>
              <div className="card p-3" style={{ width: '18rem' }}>
                <img src={show.image} alt={show.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{show.title}</h5>
                  <p className="card-text fw-semibold">{show.description.length > 100 ? show.description.slice(0, 100) + '...' : show.description}</p>
                </div>
                <ul className="list-group list-group-flush bg-dark">
                  <li className="list-group-item">Seasons: {show.seasons}</li>
                  <li className="list-group-item">Last Updated: {formatUpdatedAt(show.updated)}</li>
                  <li className="list-group-item">Genres: {show.genres.map(genreId => genreMapping[genreId]).join(', ')} <img className='ms-3' src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="" width="18px" height="18px" /></li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
