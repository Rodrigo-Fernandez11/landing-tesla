import { ReactNode } from "react";

interface SectionProps {
  color: string;
  textColor: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const LandingSection: React.FC<SectionProps> = ({
  color,
  textColor,
  title,
  subtitle,
  children
}) => {
  return (
    <section className={`bg-${color} h-screen w-screen text-center relative overflow-hidden`}>
      <div className="z-30 relative h-full flex flex-col">
        <header className="pt-20">
          {/* Cambiamos pt-40 a pt-30 para reducir el espacio superior */}
          <h2 className={`text-${textColor} text-3xl font-bold`}>
            {title}
          </h2>
          <p className={`${textColor} text-sm`}>
            {subtitle}
          </p>
        </header>
        <footer className="flex flex-col flex-grow justify-end pb-20">
          {/* Utilizamos la clase "space-y-4" en el contenedor para separar los botones */}
          <div>
            {/* Estilizamos los botones */}
            <a
              className={`text-${textColor} border-${color} border-2  backdrop-blur-sm text-sm rounded font-medium px-12 py-2 mx-2 inline-block transition-colors hover:bg-opacity-20 hover:bg-gray-800 `}
              href="#"
            >
              Explorar inventario
            </a>
            <a
              className={`text-${textColor} border-${color} border-2  backdrop-blur-sm text-sm rounded font-medium px-12 py-2 mx-2 inline-block transition-colors hover:bg-opacity-20 hover:bg-gray-800`}
              href="#"
            >
              Pedir personalizado
            </a>
          </div>
        </footer>
      </div>
      {children}
    </section>
  );
};
