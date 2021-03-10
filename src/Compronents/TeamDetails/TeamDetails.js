import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import male from "../../male.png";
import female from "../../female.png";
import club from "../../club.png";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutubeSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faFlag,
  faFutbol,
  faMarsStroke,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState({});
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setData(data.leagues[0]));
  }, [id]);
  const {
    strLeague,
    dateFirstEvent,
    strCountry,
    strGender,
    strDescriptionEN,
    strBadge,
    strSport,
  } = Data;
  const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(" + club + ")",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <section style={sectionStyle}>
            <div className="text-center">
              <img className="logo-img" src={strBadge} alt="" />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-dark pt-2">
        <div className="container bg-warning text-light rounded">
          <div className="row">
            <div className="col-md-6 pt-3">
              <h3>{strLeague}</h3>
              <h5>
                <span className="p-2">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                Founded:{dateFirstEvent}
              </h5>
              <h5>
                <span className="p-2">
                  <FontAwesomeIcon icon={faFlag} />
                </span>
                Country:{strCountry}
              </h5>
              <h5>
                <span className="p-2">
                  <FontAwesomeIcon icon={faFutbol} />
                </span>
                Sport Type: {strSport}
              </h5>
              <h5>
                <span className="p-2">
                  <FontAwesomeIcon icon={faMarsStroke} />
                </span>
                Gender : {strGender}
              </h5>
            </div>
            <div className="col-md-6">
              {strGender === "Male" ? (
                <div>
                  <img className="rounded-pill" src={male} alt="" />
                </div>
              ) : (
                <div>
                  <img className="rounded-pill p-3" src={female} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-light pt-5">
              <p className="lead">{strDescriptionEN}</p>
              <div className="text-center Icon">
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.youtube.com/">
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </a>
                <a href="https://twitter.com/home?lang=en">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
