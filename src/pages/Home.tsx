import React, { useState } from "react";
import { Link } from "react-router";

const Home: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: "Vaga 1", company: "Empresa de ejemplo" },
    { id: 2, title: "Vaga 2", company: "Empresa de ejemplo" },
    { id: 3, title: "Vaga 3", company: "Empresa de ejemplo" },
    { id: 4, title: "Vaga 4", company: "Empresa de ejemplo" },
    { id: 5, title: "Vaga 5", company: "Empresa de ejemplo" },
    { id: 6, title: "Vaga 6", company: "Empresa de ejemplo" },
  ]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const removeCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 relative">
      <div className="absolute top-3 right-3">
        <img
          src="https://i.pinimg.com/736x/fa/11/f3/fa11f317e769294696f043b1e5792243.jpg"
          alt="avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-lg shadow-lg py-2 z-10">
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-center space-x-6">
        <div className="relative w-2/4 max-w-md mt-16">
          <input
            type="text"
            placeholder="Buscar el nombre de la empresa"
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Link
          to="/registro"
          className="bg-blue-600 text-white px-6 py-2 mt-16 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Registro
        </Link>
      </div>

      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-sm">{card.company}</p>
                </div>
                <button
                  onClick={() => removeCard(card.id)}
                  className="text-white hover:text-gray-200 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-4">
                  Descripción del puesto vacante. Una oportunidad increíble para
                  profesionales cualificados.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Local: Madrid, ES</p>
                  <p>Sueldo: € 5.000,00</p>
                  <p>Jornada: Tiempo Integral</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
