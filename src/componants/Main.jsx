import Carousel from "./carousel";
import Cards from "./cards";

import State from "./state";
import Counter from "./counter";

export default function Main() {
  return (
    <>
      <Carousel />
      <Cards />
      <Counter />
      <State test="xyz" name="rameez" married={true} age={23} />
    </>
  );
}
