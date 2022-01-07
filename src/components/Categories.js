import Categorie from "./Categorie";

//imagenes
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.jpg";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";

const categories = [
  {
    id: 1,
    text: "HOGAR",
    image: icon1,
  },
  {
    id: 2,
    text: "ARTE Y DISEÑO",
    image: icon2,
  },
  {
    id: 3,
    text: "TECNOLOGÍA",
    image: icon3,
  },
  {
    id: 4,
    text: "MODA",
    image: icon4,
  },
  {
    id: 5,
    text: "ACCESORIOS",
    image: icon5,
  },
  {
    id: 6,
    text: "JOYERÍA",
    image: icon6,
  },
  {
    id: 7,
    text: "BEBÉ Y NIÑOS",
    image: icon7,
  },
  {
    id: 8,
    text: "ALIMENTOS",
    image: icon8,
  },
  {
    id: 9,
    text: "SALUD Y BELLEZA",
    image: icon9,
  },
  {
    id: 10,
    text: "MÁS",
    image: icon10,
  },
];

const Categories = () => {
  return (
    <div className="container">
      <div className="row">
        {categories.map((categorie, index) => (
          <div key={index} className="col-lg-2 col-sm-6 col-md-4">
            <Categorie image={categorie.image} text={categorie.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
