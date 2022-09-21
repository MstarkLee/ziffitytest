import { useEffect, useState } from "react";
import "./Details.css";

const Residents = ({ url }) => {
  const [residentsData, setResidentData] = useState();
  const fetchDataFromApi = async () => {
    const response = await fetch(url);
    return response?.json();
  };

  useEffect(() => {
    fetchDataFromApi().then((res) => {
      setResidentData(res);
    });
  }, [url]);

  if (!residentsData) return null;
  return (
    <>
      {residentsData && (
        <div className="detailsCol">
          <h4>Resident name: {residentsData?.name}</h4>
          <p>Height: {residentsData?.height}</p>
          <p>mass: {residentsData?.mass}</p>
          <p>hair_color: {residentsData?.hair_color}</p>
          <p>skin_color: {residentsData?.skin_color}</p>
          <p>eye_color: {residentsData?.eye_color}</p>
          <p>birth_year: {residentsData?.birth_year}</p>
          <p>gender: {residentsData?.gender}</p>
          <p>homeworld: {residentsData?.homeworld}</p>
        </div>
      )}
    </>
  );
};

export default Residents;
