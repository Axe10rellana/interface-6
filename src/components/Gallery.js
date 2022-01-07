import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <img src={image1} alt="imagen" />
        <img src={image2} alt="imagen" />
        <img src={image3} alt="imagen" />
        <img src={image4} alt="imagen" />
        <img src={image5} alt="imagen" />
        <img src={image6} alt="imagen" />
        <img src={image7} alt="imagen" />
      </div>
      <button className="gallery__button">Cargar Más</button>
    </div>
  );
};

export default Gallery;
