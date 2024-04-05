import PageHero from "../PageHero";
import SquareGrid from "../SquareGrid";

const ComponentFinder = (props) => {
  switch (props?.component) {
    case "hero":
      return <PageHero {...props} />;
    case "square-grid":
      return <SquareGrid {...props} />;
    default:
      return null;
  }
};

export default ComponentFinder;
