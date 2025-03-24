import Image from "next/image"

export const Footer = () => {
    return(
        <footer className="w-full bg-[#070707] flex justify-center items-center pt-27">
            <div className="max-w-[1500px] w-full flex justify-start items-center">
                <div className="w-full flex flex-col gap-8 justify-between items-center px-6 lg:px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30 w-full md:px-4 lg:px-8">
                        <div className="flex flex-col justify-start items-start">
                            <Image 
                                src={"/letter.png"}
                                alt=""
                                width={150}
                                height={150}
                                className="flex items-start pb-7"
                            />
                            <h1 className="text-white font-medium pb-4">Baixe o app</h1>
                            <div className="flex flex-col items-start gap-5">
                                <div className="w-[9rem] cursor-pointer h-12 flex items-center justify-center gap-2 border-2 border-white rounded-3xl">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png" alt="" width={17} />
                                    <h1 className="text-white font-semibold text-[15px]">App Store</h1>
                                </div>

                                <div className="w-[9rem] cursor-pointer h-12 flex items-center justify-center gap-2 border-2 border-white rounded-3xl">
                                    <img src="https://img.icons8.com/ios7/600/FFFFFF/google-play.png" alt="" width={19} />
                                    <h1 className="text-white font-semibold text-[14px]">Google Play</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Explorar</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Nordis+</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Blog</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Nordis Black</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Recarga</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Salas VIP</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">NordisBank</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Sobre nós</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Nossa história</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Missão e valores</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Sustentabilidade</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Serviços</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Conta digital</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Cartões de crédito</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Empréstimos</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Investimentos</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Legal</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Termos de uso</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Política de privacidade</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Política de segurança</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Informações legais</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Comunidade</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Blog NordisBank</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Fóruns de discussão</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Eventos e webinars</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Depoimentos de clientes</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Carreiras</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Trabalhe conosco</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Vagas disponíveis</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Cultura NordisBank</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Benefícios</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Parcerias</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Seja um parceiro</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Programas de afiliados</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Soluções para empresas</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Fornecedores</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Contato</h1>
                            <ul className="flex text-white text-[16px] flex-col gap-3">
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Atendimento 24/7</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Redes sociais</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Escritórios regionais</li>
                                <li className="text-[#868686] transition-all duration-300 hover:text-white font-medium">Ouvidoria</li>
                            </ul>
                        </div>

                        <div className="flex justify-start flex-col items-start gap-4">
                            <h1 className="text-[#f1f1f1] text-[19px] font-semibold">Redes Sociais</h1>
                            <div className="flex gap-5 items-center flex-wrap">
                                <a href="https://tiktok.com/@bryannfx18" target="_blank"><img src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-white-symbol-glyph-png.png" alt="" width={24}/></a>
                                <a href="https://instagram.com/bryannfxz" target="_blank"><img src="https://img.icons8.com/win10/512/FFFFFF/instagram-new.png" alt="" width={33}/></a>
                                <a href="https://www.linkedin.com/in/bryangomes/" target="_blank">
                                <Image 
                                    src={"/linkedin.png"}
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="rounded-md w-[25px]"
                                />
                                </a>
                                
                                <a href="https://github.com/foxzinnx" target="_blank"><img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" width={30}/></a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-t-[#616161] text-center w-full p-3 flex justify-center items-center ">
                        <p className="text-white text-[14px]">© 2025 NordisBank IP - Instituição de Pagamento | Criado por Bryan Gomes & Alan Dyogo </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}