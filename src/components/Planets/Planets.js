/* eslint-disable react-hooks/exhaustive-deps */
import "./Planets.css";

import Grid from "../Grid";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "./Modal";

function Planets({ propHeader }) {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const data = {
    header: [
      { name: "name", type: "string" },
      { name: "rotation_period", type: "string" },
      { name: "orbital_period", type: "string" },
      { name: "diameter", type: "number" },
      { name: "climate", type: "number" },
      { name: "gravity", type: "number" },
      { name: "terrain", type: "string" },
      { name: "surface_water", type: "string" },
      { name: "population", type: "string" },
    ],
    actions: [
      {
        label: "Go to Films",
        action: (row) => {
          console.log(`redirect to grid with ${row.films.length} Films`);
          history.push({
            pathname: "/films",
            state: row?.films,
          });
        },
      },
      {
        label: "Go to Residents",
        action: (row) => {
          console.log(
            `redirect to grid with ${row.residents.length} Residents`
          );
          history.push({
            pathname: "/residents",
            state: row?.residents,
          });
        },
      },
      {
        label: "Go to Details",
        action: (row) => {
          console.log(`Go to Details Page ${row.url} Residents`);
          history.push({
            pathname: "/details",
            state: row?.url,
          });
        },
      },
      {
        label: "Detail Modal",
        action: () => {
          console.log(`Open Modal`);
          setShowModal(true);
        },
      },
    ],
  };

  const [feedData, setFeedData] = useState({
    header: [...data?.header, ...propHeader],
    actions: data?.actions,
  });

  const fetchDataFromApi = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    return response.json();
  };

  useEffect(() => {
    fetchDataFromApi().then((res) =>
      setFeedData({
        ...data,
        header: [...data?.header, ...propHeader],
        values: res?.results,
      })
    );
  }, []);

  return (
    <div className="App">
      <Grid data={feedData} />
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          callBackFunction={(msg) => alert(msg)}
        />
      ) : null}
      <div id="portal"></div>
    </div>
  );
}

export default Planets;
