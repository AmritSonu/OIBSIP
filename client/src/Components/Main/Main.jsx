import axios from "axios";
import { useState } from "react";
function Main() {
  const [data, setData] = useState("");
  const getDataFromServer = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/demo`);
      setData(res.data);
      console.log(res);
    } catch (err) {
      console.log("Error is:-", err.message);
    }
  };
  getDataFromServer();
  return (
    <div>
      <h1>Main</h1>
      <p>
        <h1>{data}</h1>
      </p>
    </div>
  );
}

export { Main };
