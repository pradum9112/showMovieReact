import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="ms-5 my-3">
        <code>
          <h1> Movie List</h1>
        </code>
      </h2>
      <ul className="list-group  mx-5 ">
        {shows.map((show) => (
          <li key={show?.show?.id} className="list-group-item ">
            <div className="row">
              <div className="my-2 offset-2 col-lg-4  ">
                <img src={show?.show?.image?.medium} alt="Show Image" />
              </div>
              <div className="col-lg-4 offset-2 my-5 ">
                <p>
                  <b>Movie name: </b>
                  <b>
                    <code>{show?.show?.name}</code>
                  </b>
                </p>
                <p>
                  <b>Runtime: </b>
                  {show?.show?.runtime}
                </p>
                <p>
                  <b>OfficialSite: </b>
                  <Link to={show?.show?.officialSite}>Go to officialSite</Link>
                </p>
                <p>
                  <b>Genres: </b>
                  {show?.show?.genres}
                </p>
                <b>Language: </b>
                <span>{show?.show?.language}</span>
              </div>
            </div>
            <Link to={`/show/${show?.show?.id}`}>
              <button className="btn btn-dark ms-5 my-2 ">Show Detail</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowsList;
