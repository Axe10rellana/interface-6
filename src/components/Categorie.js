const Categorie = ({ text, image }) => {
  return (
    <section>
      <div className="card text-center">
        <div className="overflow">
          <img src={image} alt={text} className="card__img" />
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Categorie;
