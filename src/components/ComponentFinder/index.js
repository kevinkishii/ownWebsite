import PageHero from "../PageHero";
import SquareGrid from "../SquareGrid";
import ToggleIcons from "../ToggleIcons";
import VerticalDrawer from "../VerticalDrawer.js";

const ComponentFinder = (props) => {
  switch (props?.component) {
    case "hero":
      return <PageHero {...props} />;
    case "square-grid":
      return <SquareGrid {...props} />;
    case "vertical-drawer":
      return <VerticalDrawer {...props} />;
    case "toggle-icons":
      return <ToggleIcons {...props} />;
    default:
      return null;
  }
};

export default ComponentFinder;
