"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const FormSignUp = () => {
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cpf: "",
        senha: ""
    });
    
    const [erros, setErros] = useState({
        nome: "",
        email: "",
        cpf: "",
        senha: ""
    });
    
    const [touched, setTouched] = useState({
        nome: false,
        email: false,
        cpf: false,
        senha: false
    });

    const [lembrar, setLembrar] = useState(false);

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

    const validacoes = {
        nome: (valor: string) => {
            if (!valor.trim()) return "Insira seu nome completo";
            if (valor.trim().split(" ").length < 2) return "Insira nome e sobrenome";
            return "";
        },
        
        email: (valor: string) => {
            if (!valor.trim()) return "Insira seu email";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) return "Insira um email válido";
            return "";
        },
        
        cpf: (valor: string) => {
            const cpfNumerico = valor.replace(/\D/g, "");
            if (!cpfNumerico) return "Insira um CPF";
            if (cpfNumerico.length !== 11) return "Insira um CPF válido";
            return "";
        },
        
        senha: (valor: string) => {
            if (!valor) return "Insira sua senha";
            if (valor.length < 6) return "A senha deve ter pelo menos 6 caracteres";
            return "";
        }
    };

    const handleChange = (campo: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let valor = e.target.value;
        
        if (campo === "cpf") {
            valor = formatarCPF(valor);
        }
        
        setFormData({ ...formData, [campo]: valor });
        
        if (touched[campo]) {
            setErros({ 
                ...erros, 
                [campo]: validacoes[campo](valor) 
            });
        }
    };

    const handleBlur = (campo: keyof typeof formData) => () => {
        setTouched({ ...touched, [campo]: true });
        setErros({ 
            ...erros, 
            [campo]: validacoes[campo](formData[campo]) 
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const novosErros = {
            nome: validacoes.nome(formData.nome),
            email: validacoes.email(formData.email),
            cpf: validacoes.cpf(formData.cpf),
            senha: validacoes.senha(formData.senha)
        };
        
        setErros(novosErros);
        setTouched({
            nome: true,
            email: true,
            cpf: true,
            senha: true
        });
        
        const temErro = Object.values(novosErros).some(erro => erro !== "");
        
        if (!temErro) {
            router.push("/");
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="bg-[#EFF1F3] hidden lg:block w-full lg:w-1/2 max-h-screen overflow-hidden">
                <Image 
                    src="/fundo-signup.jpg"
                    alt="Descrição da imagem"
                    width={1900}
                    height={1500}
                    className="h-screen object-cover"
                />
            </div>

            <div className="w-full lg:w-1/2 min-h-screen bg-[#FFFFFF] flex justify-center items-center px-6 sm:px-6 py-8">
                <div className="flex flex-col gap-4 justify-center items-center w-full max-w-md">
                    <Image 
                        src={"/black.png"}
                        alt=""
                        height={100}
                        width={140}
                        className="w-32 h-auto"
                    />
                    <div className="flex flex-col items-center justify-center gap-1 mb-2">
                        <h1 className="font-semibold text-[23px] md:text-2xl lg:text-2xl">Cadastre-se</h1>
                        <p className="font-medium text-[#4d4d4d] text-[15px] lg:text-base">Faça seu cadastro para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-3">
                            <h1 className="font-medium pb-2">Nome</h1>
                            <div className={`w-full bg-[#F9F9F9] h-11 lg:h-12 ${erros.nome && touched.nome ? 'border border-red-500 rounded-md' : ''}`}>
                                <input 
                                    type="text" 
                                    placeholder="Insira seu nome completo" 
                                    maxLength={50} 
                                    value={formData.nome}
                                    onChange={handleChange("nome")}
                                    onBlur={handleBlur("nome")}
                                    className="w-full h-full font-medium outline-none rounded-md focus:bg-neutral-100 px-3 transition-all duration-300"
                                />
                            </div>
                            {erros.nome && touched.nome && (
                                <p className="text-red-500 text-sm mt-1">{erros.nome}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <h1 className="font-medium pb-2">Email</h1>
                            <div className={`w-full bg-[#F9F9F9] h-11 lg:h-12 ${erros.email && touched.email ? 'border border-red-500 rounded-md' : ''}`}>
                                <input 
                                    type="email" 
                                    placeholder="Insira seu email" 
                                    maxLength={50} 
                                    value={formData.email}
                                    onChange={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    className="w-full h-full font-medium outline-none rounded-md focus:bg-neutral-100 px-3 transition-all duration-300"
                                />
                            </div>
                            {erros.email && touched.email && (
                                <p className="text-red-500 text-sm mt-1">{erros.email}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <h1 className="font-medium pb-2">CPF</h1>
                            <div className={`w-full bg-[#F9F9F9] h-11 lg:h-12 ${erros.cpf && touched.cpf ? 'border border-red-500 rounded-md' : ''}`}>
                                <input 
                                    type="text" 
                                    placeholder="000.000.000-00" 
                                    maxLength={14} 
                                    value={formData.cpf}
                                    onChange={handleChange("cpf")}
                                    onBlur={handleBlur("cpf")}
                                    className="w-full h-full font-medium outline-none rounded-md focus:bg-neutral-100 px-3 transition-all duration-300"
                                />
                            </div>
                            {erros.cpf && touched.cpf && (
                                <p className="text-red-500 text-sm mt-1">{erros.cpf}</p>
                            )}
                        </div>

                        <div>
                            <h1 className="font-medium pb-2">Senha</h1>
                            <div className={`w-full bg-[#F9F9F9] h-11 lg:h-12 ${erros.senha && touched.senha ? 'border border-red-500 rounded-md' : ''}`}>
                                <input 
                                    type="password" 
                                    placeholder="Insira sua senha" 
                                    maxLength={30} 
                                    value={formData.senha}
                                    onChange={handleChange("senha")}
                                    onBlur={handleBlur("senha")}
                                    className="w-full h-full font-medium outline-none rounded-md focus:bg-neutral-100 px-3 transition-all duration-300"
                                />
                            </div>
                            {erros.senha && touched.senha && (
                                <p className="text-red-500 text-sm mt-1">{erros.senha}</p>
                            )}
                        </div>

                        <div className="mt-5 mb-5 flex justify-between gap-2 px-1">
                            <div className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    checked={lembrar}
                                    onChange={(e) => setLembrar(e.target.checked)}
                                    className="size-4"
                                />
                                <label className="text-xs lg:text-sm font-medium">Lembre-se de mim</label>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="flex justify-center bg-black transition-all duration-300 hover:bg-[#141414] p-3 cursor-pointer gap-2 rounded-3xl items-center w-full mt-4 lg:mt-5"
                        >
                            <span className="text-sm lg:text-base text-white font-semibold cursor-pointer">Cadastrar</span>
                            <FontAwesomeIcon icon={faArrowRight} className="size-4 text-white" />
                        </button>
                        
                        <div className="flex justify-center items-center mt-5 lg:mt-6">
                            <p className="font-medium text-[14px] lg:text-sm">Já possui uma conta? <Link href={"/signin"} className="hover:border-b font-bold">Entrar</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}