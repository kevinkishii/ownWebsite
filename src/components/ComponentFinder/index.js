import PageHero from "../PageHero";
import ProjectsDisplay from "../ProjectsDisplay";
import SquareGrid from "../SquareGrid";
import ToggleIcons from "../ToggleIcons";
import VerticalDrawer from "../VerticalDrawer.js";
import WeddingGrid from "../WeddingGrid";

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
    case "projects-display":
      return <ProjectsDisplay {...props} />;
    case "wedding-grid":
      return <WeddingGrid {...props} />;
    default:
      return null;
  }
};

export default ComponentFinder;
