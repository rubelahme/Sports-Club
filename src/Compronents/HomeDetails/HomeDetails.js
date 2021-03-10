import React from "react";
import { useHistory } from "react-router-dom";
import "./HomeDetails.css";

const HomeDetails = (props) => {
  const { idLeague, strBadge, strCountry, strSport } = props.team;
  console.log(props.team);
  let history = useHistory([]);
  const handelClick = (id) => {
    history.push(`/Details/${id}`);
  };

  return (
    <div className="details">
      <img src={strBadge} alt="" />
      <h2>{strCountry}</h2>
      <p>
        <small>Sports type: {strSport}</small>
      </p>
      <button className="bg-dark" onClick={() => handelClick(idLeague)}>
        Explore
      </button>
    </div>
  );
};

export default HomeDetails;
