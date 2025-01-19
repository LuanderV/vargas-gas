const StatsSection = () => {
    return (
      <div>
        <div className="text-center py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8">
            Nossos Números Falam Por Nós
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Estatística 1 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-green-500">+50.000</span>
              <p className="mt-2 text-lg text-gray-600">Botijões de Gás Vendidos</p>
            </div>
  
            {/* Estatística 2 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-green-500">+10.000</span>
              <p className="mt-2 text-lg text-gray-600">Clientes Satisfeitos</p>
            </div>
  
            {/* Estatística 3 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-green-500">4.9/5.0</span>
              <p className="mt-2 text-lg text-gray-600">Avaliação dos Clientes</p>
            </div>
  
            {/* Estatística 4 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-green-500">24/7</span>
              <p className="mt-2 text-lg text-gray-600">Suporte e Entrega</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsSection;
  