import PageHero from "../PageHero";

const ComponentFinder = (props) => {
  switch (props?.component) {
    case "hero":
      return <PageHero {...props} />;
    default:
      return null;
  }
};

export default ComponentFinder;
