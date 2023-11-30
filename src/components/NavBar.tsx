export const NavBar = () => {
  return (
    <nav className="py-3 px-6 md:px-10 flex items-center fixed top-0 w-full justify-between z-40 bg-white shadow-md">
      <div className="flex-shrink-0">
        {/* Logo o ícono de navegación */}
        <svg
          className="h-6 w-28"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="hidden md:flex">
        {/* Menú para tamaños de pantalla medianos y grandes */}
        <ul className="flex space-x-4 text-sm">
          <li><a href="#models">Modelo S</a></li>
          <li><a href="#model3">Modelo 3</a></li>
          <li><a href="#modelx">Modelo X</a></li>
          <li><a href="#powerwall">Powerwall</a></li>
          <li><a href="#accessories">Accessories</a></li>
        </ul>
      </div>
      <div className="flex md:hidden">
        {/* Menú para tamaños de pantalla pequeños (móviles) */}
        {/* Puedes implementar un menú desplegable aquí */}
      </div>
      <div className="hidden md:flex">
        {/* Otro grupo de enlaces para tamaños de pantalla medianos y grandes */}
        <ul className="flex space-x-4 text-sm">
          <li><a href="#">Soporte</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Cuenta</a></li>
          <li><a href="#">Menú</a></li>
        </ul>
      </div>
    </nav>
  );
};
