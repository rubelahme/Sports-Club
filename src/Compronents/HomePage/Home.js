import React, { useEffect, useState } from "react";
import HomeDetails from "../HomeDetails/HomeDetails";
import Football from "../../footbal.png";
import "./Home.css";

const Home = () => {
  const [team, SetTeam] = useState([]);
  const newTeam = team.slice(0, 12);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England"
    )
      .then((rse) => rse.json())
      .then((data) => SetTeam(data.countrys));
  }, []);
  const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(" + Football + ")",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <section style={sectionStyle}>
            <div>
              <p className="text-center page">England Best Sports Club</p>
            </div>
          </section>
        </div>
      </div>
      <div className=" bg-warning pt-4">
        <div className="container">
          <div className="row">
            {newTeam.map((data) => (
              <div className="col-md-4">
                <h2 className="text-center">
                  <HomeDetails team={data}></HomeDetails>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
