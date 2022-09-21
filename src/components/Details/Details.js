import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Residents from "./Residents";
import "./Details.css";

const Details = () => {
  let history = useHistory();
  const url = history.location.state;
  const [detailData, setDetailData] = useState();

  const fetchDataFromApi = async (url) => {
    const response = await fetch(url);
    return response?.json();
  };
  useEffect(() => {
    fetchDataFromApi(url).then((res) => setDetailData(res));
  }, [url]);

  return (
    <div className="App">
      <h2>Details Page</h2>
      {detailData && (
        <div>
          <h3>Planet Name: {detailData?.name}</h3>
          <p>rotation_period: {detailData?.rotation_period}</p>
          <p>orbital_period: {detailData?.orbital_period}</p>
          <p>diameter: {detailData?.diameter}</p>
          <p>climate: {detailData?.climate}</p>
          <p>gravity: {detailData?.gravity}</p>
          <p>terrain: {detailData?.terrain}</p>
          <p>surface_water: {detailData?.surface_water}</p>
          <p>population: {detailData?.population}</p>
          {detailData?.residents.map((item) => (
            <row className="detailsRow">
              <Residents url={item} />
            </row>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
