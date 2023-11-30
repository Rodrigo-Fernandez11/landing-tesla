export const FooterMenu = () => {
  return (
    <footer className="py-3 px-6 md:px-10 flex justify-center items-center absolute bottom-0 w-full z-40 text-gray-600 text-xs font-medium">
      <nav>
        <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
          <li><a href="#">Tesla © 2023</a></li>
          <li><a href="#">Privacidad y legal</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Seguir informado</a></li>
          <li><a href="#">Localización de tiendas</a></li>
        </ul>
      </nav>
    </footer>
  );
};
