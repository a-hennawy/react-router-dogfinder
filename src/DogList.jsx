import { Link } from "react-router-dom";
import useApi from "./hooks/useApi";

function DogList() {
  const { response } = useApi();
  console.log(response);
  const dogImages = response ? (
    response.map((dog) => (
      <Link to={`/dogs/${dog.name}`}>
        <img
          src={dog.src}
          alt={dog.name}
          style={{ width: "200px", padding: "10px" }}
        />
      </Link>
    ))
  ) : (
    <p>Loading...</p>
  );

  return (
    <div>
      <h1>this is DogList</h1>
      {dogImages}
    </div>
  );
}
export default DogList;
