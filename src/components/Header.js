const Header = () => {
  return (
    <div className="header">
      <div>
        <h3>
          EXPLORAR <i className="fas fa-chevron-down"></i>
        </h3>
      </div>
      <div className="header__right">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
        <a href="#iniciarsesion">INICIAR SESIÓN</a>
      </div>
    </div>
  );
};

export default Header;
