import Carousel from "./carousel";

import Cards from "./cards";
import State from "./state";

export default function Main() {
  return (
    <>
      <Carousel />
      <Cards />



      <State test="xyz" name="rameez" married={true} age={23}/>
    </>
  );
}
