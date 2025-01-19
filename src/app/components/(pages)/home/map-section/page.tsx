import ButtonWhastApp from "../../../button/page";

const MapWithWhatsApp = () => {
  return (
    <div className="py-16 px-8 sm:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 text-center mb-12">
          Encontre-nos no Mapa ou Faça seu Pedido Agora
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

        {/* Botão de WhatsApp */}
        <div className="text-center mt-8">
            <p className="text-gray-700 text-lg mb-4">
                Não quer ir até o local? Sem problemas! Peça agora pelo WhatsApp e receba no conforto da sua casa.
            </p>
            <ButtonWhastApp />
        </div>
      </div>
    </div>
  );
};

export default MapWithWhatsApp;
