import React from "react";
import Card from "./components/card/card";
import Form from "./components/form/form";
import { request } from "./config/request";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  const getData = () => {
    request.get("/books").then((res) => {
      setData(res.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Form getData={getData} />

      <ul className="card_list">
        {data?.map((item) => (
          <Card key={item.id} getData={getData} setData={setData} {...item} />
        ))}
      </ul>
    </>
  );
}

export default App;
