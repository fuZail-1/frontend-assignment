import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { HEADERS, API_URL } from "./Constant";

const styles = {
  fontFamily: "Roboto, sans-serif",
};

const Home = () => {
  var requestOptions = {
    headers: HEADERS,
    redirect: "follow",
  };

  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCatData = async () => {
    try {
      const res = await axios.get(API_URL, requestOptions);
      console.log(res.data);
      setCatData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <>
      <div className="text-center mt-5" style={styles}>
        <h1>CAT DETAILS</h1>
        {loading ? (
          <p className="text-center">Please wait while loading...</p>
        ) : (
          <div
            className="card mx-auto mt-5 border-0"
            style={{ width: "18rem" }}
          >
            {catData.length > 0 ? (
              catData.map((cat, id) => (
                <div key={id}>
                  <NavLink to={`catdetail/${cat.id}`}>
                    <img
                      src={cat.url}
                      alt=""
                      style={{ width: "300px", cursor: "pointer" }}
                      className="card-img-top"
                    />
                  </NavLink>
                </div>
              ))
            ) : (
              <p>No cat data available</p>
            )}
            <button
              className="btn btn-outline-primary mt-4 mx-auto"
              onClick={(e) => {
                e.preventDefault();
                setLoading(true);
                fetchCatData();
              }}
            >
              Get new Cat
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
