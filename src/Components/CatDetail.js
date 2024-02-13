import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HEADERS, API_URL } from "./Constant";

const CatDetail = () => {
  const apiKey =
    "live_FkGvMg9cLblaIng5CidGhG85dWwp2Kn48LqcRhQ8H3ghAynu3J0b2DzasanMfOpO";

  const { id } = useParams();
  console.log(id);
  const [catDetailById, setCatDetailById] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchById = async (id) => {
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1/${id}`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      console.log(res.data);
      setCatDetailById(res.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("failed to load image plss try again");
    }
  };
  useEffect(() => {
    fetchById();
  }, [id]);
  return (
    <>
      <div className="container text-center mt-5">
        <h1> CAT DETAIL BY ID</h1>
        {loading ? (
          <p>plss wait a while loading....</p>
        ) : (
          <div
            className="card mx-auto mt-5 border-0"
            style={{ width: "18rem" }}
          >
            {catDetailById.length > 0 ? (
              catDetailById.map((catid, index) => {
                return (
                  <img
                    key={index}
                    src={catid.url}
                    alt=""
                    style={{ width: "300px", cursor: "pointer" }}
                    className="card-img-top"
                  />
                );
              })
            ) : (
              <p>No images found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CatDetail;
