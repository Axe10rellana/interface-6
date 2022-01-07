import NewLetters from "./NewLetters";
import Gallery from "./Gallery";
import Categories from "./Categories";

const Main = () => {
  return (
    <div className="main">
      <NewLetters />
      <Gallery />
      <div className="cards">
        <Categories />
      </div>
    </div>
  );
};

export default Main;
