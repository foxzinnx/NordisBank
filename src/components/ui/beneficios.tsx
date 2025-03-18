import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../app/font.css";
import { faCreditCard, faMobile, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

export const Beneficios = () => {
    const benefits = [
        {
            icon: faCreditCard,
            text: "Pontuação ilimitada no cartão de crédito (mediante análise)."
        },
        {
            icon: faMobile,
            text: "Conta multifuncional: pagamentos, empréstimos, seguros e muito mais."
        },
        {
            icon: faMoneyBillTrendUp,
            text: "Invista no Brasil e internacionalmente com nossa plataforma."
        }
    ];

    return (
        <section className="w-full bg-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-start pr-0 lg:pr-24 gap-10 lg:gap-0 md:gap-0" data-aos="fade-right">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className={`
                                flex flex-col items-center text-center p-4
                                w-full sm:w-1/2 lg:w-1/3
                                ${benefits.length % 2 !== 0 && index === benefits.length - 1 ? 'md:mx-auto' : ''}
                            `}
                            style={{
                                ...(benefits.length % 2 !== 0 && index === benefits.length - 1 && {
                                    maxWidth: '100%' 
                                })
                            }}
                        >
                            <div className="bg-[#0081FF] p-6 md:p-6 rounded-full mb-5">
                                <FontAwesomeIcon 
                                    icon={benefit.icon} 
                                    className="text-white text-2xl md:text-3xl" 
                                />
                            </div>
                            <h3 className="text-[#191C1F] font-bold text-[17px] md:text-lg">
                                {benefit.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};