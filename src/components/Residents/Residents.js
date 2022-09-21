import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "../Grid/Grid";

const ResidentsPage = () => {
  const [feedData, setFeedData] = useState();
  let history = useHistory();
  const films = history.location.state;

  const fetchDataFromApi = async (films) => {
    const promises = await Promise.all(films.map((link) => fetch(link)));
    const productsArray = await Promise.all(promises.map((p) => p.json()));
    return productsArray;
  };

  useEffect(() => {
    fetchDataFromApi(films).then((res) => {
      console.log(res);
      let header = [];
      for (const [key, value] of Object.entries(res[0])) {
        console.log(typeof value);
        if (typeof value !== "object") header.push(`${key}`);
      }
      setFeedData({ header, values: res });
    });
  }, [films]);

  if (!feedData) return <p>No Residents To Display</p>;
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {feedData && <Grid data={feedData} />}
    </div>
  );
};

export default ResidentsPage;
