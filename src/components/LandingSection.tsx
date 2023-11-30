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
        <header>
          <h2 className={`text-${textColor} pt-40 text-3xl font-bold`}>
            {title}
          </h2>
          <p className={`${textColor} text-sm`}>
            {subtitle}
          </p>
        </header>
        <footer className="flex flex-col flex-grow justify-end pb-20 space-y-4">
          {/* Añadimos la clase "space-y-4" al contenedor para separar los botones */}
          <div>
            {/* Estilizamos los botones */}
            <a
              className={`text-${textColor} border-${textColor} border-2 bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block transition-colors hover:bg-opacity-50 hover:text-white`}
              href="#"
            >
              Explorar inventario
            </a>
            <a
              className={`text-${textColor} border-${textColor} border-2 bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block transition-colors hover:bg-opacity-50 hover:text-white`}
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
