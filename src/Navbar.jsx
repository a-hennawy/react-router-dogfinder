import { NavLink } from "react-router-dom";
import useApi from "./hooks/useApi";

//destructure the names from the db.json, make an array of names and pass it as a default value
function Navbar() {
  const { response } = useApi();

  return response ? (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <li key={"home"}>
        <NavLink to={`/dogs`}>Home</NavLink>
      </li>
      {response.map((res) => (
        <li key={res.name}>
          <NavLink to={`/dogs/${res.name}`}>{res.name}</NavLink>
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading..</p>
  );
}
export default Navbar;
