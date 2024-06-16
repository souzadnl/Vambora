import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollTop";
import Navbar from "../components/Navbar";
import { Snippet } from "@nextui-org/react";
import qrCode from "../assets/qrcode.png"

import { Card, CardHeader, CardFooter, Image, Button, Tabs, Tab, CardBody, Divider } from "@nextui-org/react";

export default function Detalhes() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className="justify-center mt-20">
                <div className="">
                    <h1 className="text-3xl flex justify-center mb-5">Viva esta experiência por apenas</h1>
                    <h1 className="text-4xl flex justify-center mb-5 text-green-500"><span className="text-xl">4x</span>199,98</h1>
                    <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">ou R$ 799, 90</p>
                </div>

                <div className="sm:w-2/4 sm:m-auto">
                    <div className=" m-auto mt-5">
                        <span className="text-gray-500">Formas de Pagamento</span>
                    </div>

                    <Tabs aria-label="Options" className="mt-5" color={"primary"}>
                        <Tab key="pix" title="PIX">
                            <Card>
                                <CardBody>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Pague com PIX</h3>

                                        <p className="text-gray-700 py-5">
                                            Por gentileza, envie o comprovante no whatsapp deste link
                                            <Link to="https://wa.me/5511964387892?text=Ol%C3%A1%2C%20estou%20enviando%20o%20comprovante%20do%20pagamento!" className="text-blue-500 mx-2 text-xl">aqui</Link>
                                            ou envie para este número (11) 96438-7892
                                        </p>

                                        <p className="mb-2">Chave PIX:</p>
                                        <Snippet symbol="" variant="bordered" className="w-full">lucas_souza7219@outlook.com</Snippet>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="cartao" title="Cartão">
                            <Card>
                                <CardBody>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Pague no Crédito ou Débito</h3>

                                        <p className="text-gray-700 py-5">
                                            É possível pagar à vista ou <span className="font-semibold">parcelado</span> em até 12x (consulte as condições)
                                        </p>

                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="outros" title="Outros">
                            <Card>
                                <CardBody>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Demais formas de pagamento</h3>

                                        <p className="text-gray-700 py-5">
                                            As demais formas de pagamento (Pix, TED, Depósito bancário) terão um prazo de no máximo
                                            4 parcelas para quitação do valor.
                                        </p>

                                        <span>
                                            20/06 + 10/07 + 10/08 + 10+09 = 4x de R$ 199,98
                                        </span>

                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>

                <div className="sm:flex items-center justify-center mt-14">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <h2 className="text-3xl text-gray-900">Detalhes do Pacote</h2>
                            <p className="text-gray-600">Descubra o que está incluído no seu pacote de viagem dos sonhos.</p>
                        </div>
                        <Tabs aria-label="Opções de Detalhes" color="primary">
                            <Tab key="inclusoes" title="O pacote inclui">
                                <Card className="mt-6">
                                    <CardBody>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Parte esquerda: texto */}
                                            <div className="text-gray-700">
                                                <h3 className="text-lg font-semibold mb-4">O PACOTE INCLUI</h3>
                                                <ul className="list-disc pl-4">
                                                    <li className="mb-2">Transporte de alto padrão meio leito, translado (SP&gt;RJ – RJ&gt;SP).</li>
                                                    <li className="mb-2">Hotel NACIONAL INN localizado na Praia de Copacabana (com piscina e café da manhã incluso), sendo 01 quarto com 02 camas de solteiro ou 01 quarto com 03 camas de solteiro (dormitório conforme disponibilidade).</li>
                                                    <li className="mb-2">Almoço no restaurante FORNOLLETO.</li>
                                                    <li className="mb-2">Entrada para o Mirante do Arvrão + Entrada para o Bar Cacique de Ramos + Translado para os dois bares.</li>
                                                    <li className="mb-2">Brinde exclusivo + Cobertura completa com equipe de áudio visual (fotos e videos).</li>
                                                </ul>

                                                <img className="mt-5" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/503706763.jpg?k=53df1bc42e8e12ffbb491b1e17a44c19504c893aa05008b89abe6d0a5f20ecc2&o=&hp=1" alt="" srcset="" />

                                                <p className="mt-4 text-green-600 flex justify-center">
                                                    Não é só uma excursão, é experiência!
                                                </p>
                                            </div>

                                            {/* Parte direita: imagem */}
                                            <div className="hidden md:block">
                                                <img className="object-cover object-center rounded-lg shadow-md" src="/hotel.jpg" alt="Hotel Nacional Inn" />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="transporte" title="Transporte">
                                <Card className="mt-6">
                                    <CardBody>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Parte esquerda: texto */}
                                            <div className="text-gray-700">
                                                <h3 className="text-lg font-semibold mb-4">TRANSPORTE</h3>
                                                <p className="mb-3">
                                                    Van Mercedes-Benz <span className=" text-green-600">executiva</span> de luxo, bancos reclináveis, TV, Ar condicionado, frigobar, porta malas e wi-fi.
                                                </p>
                                                <p>
                                                    Regulamentada para realizar transporte interestadual.
                                                </p>
                                                <p>
                                                    <span className="font-semibold">Motorista profissional</span> com experiência em excursões.
                                                </p>

                                                <img className="mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUr8ZXFWMU3IJeJRbxURb9TKQ4Xb0UuyzL5OQxR0OerW1hWTH" alt="" srcset="" />
                                            </div>

                                            {/* Parte direita: imagem */}
                                            <div className="hidden md:block">
                                                <img className="object-cover object-center rounded-lg shadow-md" src="/van.jpg" alt="Van Mercedes-Benz" />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>

            <Divider className="my-4" />

            <Footer />
        </>

    )
}
