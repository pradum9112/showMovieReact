import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <code>
        <h2>Movie Detail</h2>
        <span>
          <p>
            <b>Movie name: {show?.name}</b>
          </p>
        </span>
      </code>
      <div className="row">
        <div className="my-2 offset-2 col-lg-4  ">
          <img src={show?.image?.medium} alt="Show Image" />
        </div>
        <div className="col-lg-4 offset-2 my-1 ">
          <p>
            <b>Movie name: </b>
            <b>
              <code>{show?.name}</code>
            </b>
          </p>
          <p>
            <b>Runtime: </b>
            {show?.runtime}
          </p>
          <p>
            <b>Watch now: </b>
            <Link to={show?.url}>Click Here</Link>
          </p>
          <p></p>
          <p>
            <b>OfficialSite: </b>
            <Link to={show?.officialSite}>Go to officialSite</Link>
          </p>
          <p>
            <b>type: </b>
            {show?.type}
          </p>
          <p>
            <b>Genres: </b>
            {show?.genres}
          </p>
          <p>
            <b>Language: </b>
            <span>{show?.language}</span>
          </p>
          <p>
            <b>Rating: </b>
            {show?.rating?.average}
          </p>
        </div>
      </div>

      <p>{show?.summary}</p>

      <button className="btn btn-dark">Book Movie Ticket</button>
      <Link to="/">
        <button className="btn btn-dark mx-2">Back</button>
      </Link>
    </div>
  );
};

export default ShowDetails;
