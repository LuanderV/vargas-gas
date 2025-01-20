"use client";

const ContactSection = () => {
  return (
    <footer className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-500 mb-6">
          Entre em Contato
        </h2>
        <p className="text-gray-700 text-lg">
          Para dúvidas, pedidos ou informações, entre em contato conosco pelos números abaixo:
        </p>
        <div className="mt-8 space-y-4">
          <div>
            <span className="font-medium text-gray-800">Residencial:</span>{" "}
            <a
              href="tel:32317088"
              className="text-emerald-500 font-semibold hover:underline"
            >
              3231-7088
            </a>
          </div>
          <div>
            <span className="font-medium text-gray-800">Celular:</span>{" "}
            <a
              href="tel:+535981284497"
              className="text-emerald-500 font-semibold hover:underline"
            >
              (53) 98128-4497
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
