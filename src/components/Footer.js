const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__left">
          <h3>RECIBA ACTUALIZACIONES DE SQUARE MARKETSIGA A SQUARE</h3>
          <p>
            Ingrese su correo electrónico para recibir avisos sobre articulos
            increibles en Square Market.
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
        </div>
        <div className="footer__top__center">
          <a href="#facebook">
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="#twitter">
            <i className="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="#pinterest">
            <i className="fab fa-pinterest-square"></i> Pinterest
          </a>
          <a href="#instagram">
            <i className="fab fa-instagram-square"></i> Instagram
          </a>
        </div>
        <div className="footer__top__right">
          <h3>ACERCA DE SQUARE</h3>
          <a href="#cajasquare">Caja Square</a>
          <a href="#atencionalcliente">Atención al cliente</a>
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <p>
          [CA "<i className="far fa-copyright"></i> 2009-2014 SQUARE, INC", JP "
          <i className="far fa-copyright"></i> 2014 SQUAREUP PTE, LTD", US "
          <i className="far fa-copyright"></i> 2009-2014 SQUARE, INC"]
        </p>
        <a href="#privacidad">PRIVACIDAD</a>|<a href="#legal">LEGAL</a>|
        <a href="idioma">IDIOMA</a>
      </div>
    </div>
  );
};

export default Footer;
