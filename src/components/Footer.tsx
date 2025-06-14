export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-purple-800 text-gray-300 pt-8 pb-4 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="flex flex-col items-center text-center md:text-start md:items-start">
                    <h2 className="text-xl font-bold text-white">Scoder Store</h2>
                    <p className="mt-2 text-sm text-gray-100/70">
                        Produtos de qualidade com o melhor atendimento. Enviamos para todo o Brasil.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center md:text-start md:items-start">
                    <h3 className="text-sm font-semibold text-white mb-2">Contato</h3>
                    <ul className="space-y-1 text-sm text-gray-100/70">
                        <li>contato@scoderstore.com</li>
                        <li>(35) 99999-9999</li>
                        <li>Santa Rita do Sapucaí - MG</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center text-center md:text-start md:items-start">
                    <h3 className="text-sm font-semibold text-white mb-2">Siga-nos</h3>
                    <div className="flex flex-col space-x-4 text-gray-100/70">
                        <a href="https://www.instagram.com/scoder.tech/" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-100/50">
                &copy; {new Date().getFullYear()} Scoder Store. Todos os direitos reservados.
            </div>
        </footer>
    );
}