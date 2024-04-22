import { Routes, Route } from "react-router-dom";
import Overview from "./overview/overview";
import Contactus from "./contactus/contactus";
import Myproject from "./myproject/Myproject";
import {Layout} from "../src/layout/layout";
import Table from "../src/table/showtable"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Overview />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/myproject" element={<Myproject />} />
        <Route path="/table" element={<Table />} />
      </Route>
    </Routes>
  );
}

export default App;
