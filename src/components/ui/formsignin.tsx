"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const FormSignIn = () => {
    const router = useRouter();
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);
    const [erros, setErros] = useState({ cpf: "", senha: "" });
    const [touched, setTouched] = useState({ cpf: false, senha: false });

    const formatarCPF = (valor: string) => {
        valor = valor.replace(/\D/g, "");
        
        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }
        
        if (valor.length > 0) {
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        }
        if (valor.length > 3) {
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        }
        if (valor.length > 7) {
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        
        return valor;
    };

    const validarCPF = (cpf: string) => {
        const cpfNumerico = cpf.replace(/\D/g, "");
        
        if (cpfNumerico.length === 0) {
            return "Insira um CPF";
        } else if (cpfNumerico.length !== 11) {
            return "Insira um CPF válido";
        }
        
        return "";
    };

    const validarSenha = (senha: string) => {
        if (senha.length === 0) {
            return "Insira sua senha";
        }
        return "";
    };

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorFormatado = formatarCPF(e.target.value);
        setCpf(valorFormatado);
        
        if (touched.cpf) {
            setErros({ ...erros, cpf: validarCPF(valorFormatado) });
        }
    };

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
        
        if (touched.senha) {
            setErros({ ...erros, senha: validarSenha(e.target.value) });
        }
    };

    const handleCPFBlur = () => {
        setTouched({ ...touched, cpf: true });
        setErros({ ...erros, cpf: validarCPF(cpf) });
    };

    const handleSenhaBlur = () => {
        setTouched({ ...touched, senha: true });
        setErros({ ...erros, senha: validarSenha(senha) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const cpfError = validarCPF(cpf);
        const senhaError = validarSenha(senha);
        
        setErros({ cpf: cpfError, senha: senhaError });
        setTouched({ cpf: true, senha: true });
        
        if (!cpfError && !senhaError) {
            router.push("/");
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="bg-[#EFF1F3] hidden lg:block w-full lg:w-1/2 max-h-screen overflow-hidden">
                <Image 
                    src="/homem.jpg"
                    alt="Descrição da imagem"
                    width={1900}
                    height={1500}
                    className="h-screen object-cover"
                />
            </div>

            <div className="w-full lg:w-1/2 h-screen bg-[#FFFFFF] flex justify-center items-center px-4 sm:px-6">
                <div className="flex flex-col gap-6 lg:gap-10 justify-center items-center w-full max-w-md">
                    <Image 
                        src={"/black.png"}
                        alt=""
                        height={120}
                        width={160}
                        className=""
                    />
                    <h1 className="font-semibold text-[21px] md:text-2xl lg:text-2xl">Acesse sua conta</h1>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div>
                            <h1 className="font-medium pb-1">CPF</h1>
                            <div className={`w-full bg-[#F9F9F9] h-12 ${erros.cpf ? 'border border-red-500 rounded-md' : ''}`}>
                                <input 
                                    type="text" 
                                    placeholder="000.000.000-00" 
                                    value={cpf}
                                    onChange={handleCPFChange}
                                    onBlur={handleCPFBlur}
                                    className="w-full h-full font-medium outline-none rounded-md focus:bg-neutral-100 px-3 transition-all duration-300"
                                />
                            </div>
                            {erros.cpf && touched.cpf && (
                                <p className="text-red-500 text-sm mt-1">{erros.cpf}</p>
                            )}
                        </div>

                        <div>
                            <h1 className="font-medium mt-6 lg:mt-8 pb-[5px]">Senha</h1>
                            <div className={`w-full bg-[#F9F9F9] h-12 ${erros.senha ? 'border border-red-500 rounded-md' : ''}`}>
                                <input 
                                    type="password" 
                                    placeholder="Insira sua senha" 
                                    maxLength={22} 
                                    value={senha}
                                    onChange={handleSenhaChange}
                                    onBlur={handleSenhaBlur}
                                    className="w-full h-full font-medium outline-none rounded-md focus:bg-neutral-100 px-3 transition-all duration-300"
                                />
                            </div>
                            {erros.senha && touched.senha && (
                                <p className="text-red-500 text-sm mt-1">{erros.senha}</p>
                            )}
                        </div>

                        <div className="mt-5 lg:mt-6 flex justify-between gap-3 px-1">
                            <div className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    checked={lembrar}
                                    onChange={(e) => setLembrar(e.target.checked)}
                                    className="size-4"
                                />
                                <label className="text-sm lg:text-[14.5px] font-medium">Lembre-se de mim</label>
                            </div>
                            <p className="font-medium text-sm lg:text-[15px] cursor-pointer">Esqueci a senha</p>
                        </div>

                        <button 
                            type="submit" 
                            className="flex justify-center bg-black transition-all duration-300 hover:bg-[#141414] p-[13px] cursor-pointer gap-2 rounded-3xl items-center w-full mt-8 lg:mt-5"
                        >
                            <span className="text-base lg:text-[17px] text-white font-semibold cursor-pointer">Acessar</span>
                            <FontAwesomeIcon icon={faArrowRight} className="size-4 lg:size-5 text-white" />
                        </button>

                        <div className="flex justify-center items-center mt-6">
                            <p className="font-medium text-[14.5px]">Não tem uma conta? <Link href={"/signup"} className="hover:border-b font-bold">Cadastre-se</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}