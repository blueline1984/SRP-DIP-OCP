import Auth from "./components/Auth";
import Todos from "./components/Todos";
import { httpClient } from "./httpClient/httpClient";

function App() {
  const request = () => {
    httpClient.fetch("todos", {
      method: "GET",
    });
  };
  return (
    <>
      <Auth />
      <br />
      <Todos />
    </>
  );
}

export default App;
