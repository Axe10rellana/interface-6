const NewLetters = () => {
  return (
    <div className="new__letters">
      <h2>Vaya de compras en Square Market</h2>
      <p>
        Compre en comercios locales increibles, Square Market le ofrece
        articulos unicos de todos lugares en un solo lugar.
      </p>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Dirección de correo electrónico"
          required
        />
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </form>
      <small>
        Imgresa tu dirección de correo electrónico para recibir actualizaciones
        sobre articulos increibles.
      </small>
    </div>
  );
};

export default NewLetters;
