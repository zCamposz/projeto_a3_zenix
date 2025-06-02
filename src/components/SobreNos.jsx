import React from 'react'

const SobreNos = () => {
  return (
    <div className="w-full py-10 px-6 flex flex-col items-center bg-[#0f172a] min-h-screen">
      <div className="max-w-3xl w-full text-white">
        <h1 className="text-4xl font-bold text-indigo-400 mb-6 text-center">Sobre Nós</h1>
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md">
          <p className="mb-4 text-lg text-gray-200 text-justify">
            Fundado com o compromisso de transformar o relacionamento bancário, o <strong>Zenix</strong> se destaca como uma instituição financeira moderna, eficiente e centrada no cliente. Com presença em diversas regiões da cidade de São Paulo, oferecemos serviços personalizados e tecnologia de ponta para atender às necessidades de cada cliente.
          </p>
          <p className="mb-4 text-lg text-gray-200 text-justify">
            Nossas agências são integradas a um sistema inteligente que fornece informações atualizadas sobre funcionamento, tempo de espera e disponibilidade. Com o suporte de uma assistente virtual baseada em IA, garantimos orientação clara e rápida, todos os dias.
          </p>
          <p className="mb-4 text-lg text-gray-200 text-justify">
            No Zenix, acreditamos em uma experiência bancária ágil, segura e acessível. Mais do que um banco, somos um parceiro para o seu dia a dia financeiro.
          </p>
          <p className="text-base text-gray-400 mt-8 text-center">
            Zenix Banco Digital | Inovação que aproxima você do que importa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SobreNos
