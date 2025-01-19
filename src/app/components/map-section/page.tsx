const MapSection = () => {
    return (
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 text-center mb-12">
            Encontre-nos no Mapa
          </h2>
  
          {/* Mapa */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.3814957108398!2d-52.16388339999999!3d-32.0589289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119a3b9231453b%3A0x835c017865c1ea0a!2sVargas%20G%C3%A1s%20-%20Liquig%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1737310640627!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
  
          {/* Informações extras */}
          <div className="text-center mt-8">
            <p className="text-gray-700 text-lg">
              Estamos localizados em um ponto estratégico para atender você rapidamente. 
              Use o mapa acima para encontrar nossa base ou planejar sua rota.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MapSection;
  