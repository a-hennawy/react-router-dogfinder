import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import Dog from "./Dog";
import NotFound from "./NotFound";
function RouteList() {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList />} />
      <Route path="/dogs/:name" element={<Dog />} />
      <Route path="*" element={<NotFound />} />
      {/* Call a redirect from NotFound component */}
    </Routes>
  );
}

export default RouteList;
