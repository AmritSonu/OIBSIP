import { ItemsPage } from "./ItemsPage";
import { PizzaSelectorViewBar } from "./PizzaSelectorViewBar";

function MainContainer() {
  // const [data, setData] = useState("");
  // const getDataFromServer = async () => {
  //   try {
  //     // local backend URl = http://localhost:3000/demo
  //     // backend URL = https://pizza-psi-two.vercel.app/demo
  //     const res = await axios.get(`http://localhost:3000/demo`);
  //     setData(res.data);
  //     console.log(res);
  //   } catch (err) {
  //     console.log("Error is:-", err.message);
  //   }
  // };
  // getDataFromServer();

  return (
    <div className="p-5 ">
      {/* <HeroPage/> */}

      <ItemsPage />
      <PizzaSelectorViewBar />
    </div>
  );
}

export { MainContainer };
