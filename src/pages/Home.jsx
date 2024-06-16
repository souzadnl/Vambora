import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollTop";
import Navbar from "../components/Navbar";
import imagem from "../assets/imagemVamboraCard.png"

import { Card, CardHeader, CardFooter, Image, Button, Tabs, Tab, CardBody, Divider } from "@nextui-org/react";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className="justify-center mt-20">
                <div className="">
                    <h1 className="text-4xl flex justify-center mb-5">RIO DE JANEIRO</h1>
                    <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">Vambora Excursões</p>
                </div>

                <div className="sm:w-2/4 sm:m-auto">
                    <div className=" m-auto mt-5">
                        <span className="text-gray-500">Roteiro de viagem</span>
                    </div>

                    <Tabs aria-label="Options" className="mt-5" color={"primary"}>
                        <Tab key="sexta" title="Sexta">
                            <Card>
                                <CardBody>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Dia: 11/10/2024 – SEXTA-FEIRA</h3>
                                        <p className="text-gray-700">
                                            <span className="font-bold">23:30</span> – Embarque
                                            <span className="text-red-600 font-semibold"> (SEM ATRASO, CHEGAR COM 30min DE ANTECEDÊNCIA)</span>
                                            <br />
                                            <span className="font-semibold">Local:</span> Terminal Metropolitano de Diadema
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="sábado" title="Sábado">
                            <Card>
                                <CardBody>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Dia: 12/10/2024 – SÁBADO</h3>
                                        <p className="text-gray-700">
                                            <span className="font-bold">04:00 – 05:30</span> Parada técnica (caso haja necessidade)
                                            <br />
                                            <span className="font-bold">07:30</span> Chegada no RJ – QUIOSQUE DO SAMBA SOCIAL CLUB (praia de Copacabana)
                                            <br />
                                            <span className="font-bold">12:00</span> Almoço no restaurante FORNOLLETO
                                            <span className="font-semibold"> (Voucher de R$ 50,00)</span>
                                            <br />
                                            <span className="font-bold">14:00</span> Check-in no Hotel NACIONAL INN COPACABANA
                                            <br />
                                            <span className="font-bold">15:00</span> Saída para o Bar Mirante do Arvrão
                                            <span className="font-semibold"> (Incluso: Entrada + Translado)</span>
                                            <br />
                                            <span className="font-bold">01:00</span> Retorno para o Hotel
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="domingo" title="Domingo">
                            <Card>
                                <CardBody>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Dia: 13/10/2024 – DOMINGO</h3>
                                        <p className="text-gray-700">
                                            <span className="font-bold">07:00 – 10:00</span> Café da manhã no Hotel
                                            <br />
                                            <span className="font-bold">12:00</span> Check-out do Hotel
                                            <br />
                                            <span className="font-bold">16:30</span> Saída para o Bar Cacique de Ramos
                                            <span className="font-semibold"> (Incluso: Entrada + Translado)</span>
                                            <br />
                                            <span className="font-bold">21:30</span> Retorno para São Paulo
                                        </p>
                                    </div>

                                    <div className="text-gray-600">
                                        <p>*Intervalos livres para conhecer a região, piscina do hotel, praia, etc*</p>
                                        <p className="font-semibold text-red-600">*SEM ATRASOS NOS HORÁRIOS MARCADOS*</p>
                                        <p className="font-semibold">*CASO HAJA ALTERAÇÕES NO ROTEIRO, SERÁ COMUNICADO PREVIAMENTE*</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key="Geral" title="Geral">
                            <Card>
                                <CardBody>
                                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
                                        <h2 className="text-xl font-bold mb-4">Roteiro de Viagem</h2>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold">Dia: 11/10/2024 – SEXTA-FEIRA</h3>
                                            <p className="text-gray-700">
                                                <span className="font-bold">23:30</span> – Embarque
                                                <span className="text-red-600 font-semibold"> (SEM ATRASO, CHEGAR COM 30min DE ANTECEDÊNCIA)</span>
                                                <br />
                                                <span className="font-semibold">Local:</span> Terminal Metropolitano de Diadema
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold">Dia: 12/10/2024 – SÁBADO</h3>
                                            <p className="text-gray-700">
                                                <span className="font-bold">04:00 – 05:30</span> Parada técnica (caso haja necessidade)
                                                <br />
                                                <span className="font-bold">07:30</span> Chegada no RJ – QUIOSQUE DO SAMBA SOCIAL CLUB (praia de Copacabana)
                                                <br />
                                                <span className="font-bold">12:00</span> Almoço no restaurante FORNOLLETO
                                                <span className="font-semibold"> (Voucher de R$ 50,00)</span>
                                                <br />
                                                <span className="font-bold">14:00</span> Check-in no Hotel NACIONAL INN COPACABANA
                                                <br />
                                                <span className="font-bold">15:00</span> Saída para o Bar Mirante do Arvrão
                                                <span className="font-semibold"> (Incluso: Entrada + Translado)</span>
                                                <br />
                                                <span className="font-bold">01:00</span> Retorno para o Hotel
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold">Dia: 13/10/2024 – DOMINGO</h3>
                                            <p className="text-gray-700">
                                                <span className="font-bold">07:00 – 10:00</span> Café da manhã no Hotel
                                                <br />
                                                <span className="font-bold">12:00</span> Check-out do Hotel
                                                <br />
                                                <span className="font-bold">16:30</span> Saída para o Bar Cacique de Ramos
                                                <span className="font-semibold"> (Incluso: Entrada + Translado)</span>
                                                <br />
                                                <span className="font-bold">21:30</span> Retorno para São Paulo
                                            </p>
                                        </div>

                                        <div className="text-gray-600">
                                            <p>*Intervalos livres para conhecer a região, piscina do hotel, praia, etc*</p>
                                            <p className="font-semibold text-red-600">*SEM ATRASOS NOS HORÁRIOS MARCADOS*</p>
                                            <p className="font-semibold">*CASO HAJA ALTERAÇÕES NO ROTEIRO, SERÁ COMUNICADO PREVIAMENTE*</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>

                    <div className=" m-auto mt-5">
                        <span className="text-gray-500">Clique para reservar!</span>
                    </div>

                    <div className="m-auto pt-5">
                        <Button type="submit" color="primary" className="w-2/4 m-auto flex justify-center mb-10" onClick={() => navigate("/reserva")}>Reservar</Button>
                    </div>
                </div>

                <div className="sm:flex items-center justify-center mt-24">
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 mb-10 sm:mx-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/70 uppercase font-bold">Conheça a</p>
                            <h4 className="text-white font-medium text-2xl">VAMBORA EXCURSÕES!</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover brightness-[0.75]"
                            src={imagem}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-10 bg-black"
                                    src="https://img.freepik.com/vetores-gratis/icone-de-midia-social-do-vetor-instagram-7-de-junho-de-2021-banguecoque-tailandia_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=ais_user"
                                />
                                <div className="flex flex-col">
                                    <p className="text-regular text-left text-white">Instagram</p>
                                    <p className="text-tiny text-left text-white">Conheça mais sobre a Vambora!</p>
                                </div>
                            </div>

                            <a href="https://www.instagram.com/vambora_excursoes/">
                                <Button radius="full" className="bg-white" size="sm">Conhecer</Button>
                            </a>
                        </CardFooter>
                    </Card>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 mb-10 sm:mx-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/70 uppercase font-bold">Conheça o</p>
                            <h4 className="text-white font-medium text-2xl">MIRANTE DO ARVRÃO</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover brightness-[0.5]"
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/252924471.jpg?k=54846340c10c5aa645ff249181cd91f7ac848e791748ec53717c4c6060969c0c&o=&hp=1"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-10 bg-black"
                                    src="https://img.freepik.com/vetores-gratis/icone-de-midia-social-do-vetor-instagram-7-de-junho-de-2021-banguecoque-tailandia_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=ais_user"
                                />
                                <div className="flex flex-col">
                                    <p className="text-regular text-left text-white">Instagram</p>
                                    <p className="text-tiny text-left text-white">Conheça mais sobre o Mirante do Arvrão</p>
                                </div>
                            </div>

                            <a href="https://www.instagram.com/mirantedoarvrao/">
                                <Button radius="full" className="bg-white" size="sm">Conhecer</Button>
                            </a>
                        </CardFooter>
                    </Card>

                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 mb-10 sm:mx-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/70 uppercase font-bold">Conheça o</p>
                            <h4 className="text-white font-medium text-2xl">CACIQUE DE RAMOS</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover brightness-[0.5]"
                            src="https://caciquederamos.com.br/wp-content/uploads/2019/10/IMG_9204.jpg"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-10 bg-black"
                                    src="https://img.freepik.com/vetores-gratis/icone-de-midia-social-do-vetor-instagram-7-de-junho-de-2021-banguecoque-tailandia_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=ais_user"
                                />
                                <div className="flex flex-col">
                                    <p className="text-regular text-left text-white">Instagram</p>
                                    <p className="text-tiny text-left text-white">Conheça mais sobre o Cacique de Ramos</p>
                                </div>
                            </div>

                            <a href="https://www.instagram.com/cacique_de_ramos/">
                                <Button radius="full" className="bg-white" size="sm">Conhecer</Button>
                            </a>
                        </CardFooter>
                    </Card>

                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 mb-10 sm:mx-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/70 uppercase font-bold">Conheça </p>
                            <h4 className="text-white font-medium text-2xl">COPACABANA</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover brightness-[0.5]"
                            src="https://images.adsttc.com/media/images/6449/8011/2f92/3201/7c9e/4beb/newsletter/a-historia-do-calcadao-de-copacabana-da-origem-portuguesa-ao-burle-marx_6.jpg?1682538521"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-10 bg-black"
                                    src="https://img.freepik.com/vetores-gratis/icone-de-midia-social-do-vetor-instagram-7-de-junho-de-2021-banguecoque-tailandia_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=ais_user"
                                />
                                <div className="flex flex-col">
                                    <p className="text-regular text-left text-white">Instagram</p>
                                    <p className="text-tiny text-left text-white">Conheça mais sobre Copacabana</p>
                                </div>
                            </div>
                            <a href="https://www.instagram.com/explore/locations/436783651/copacabana-rio-de-janeiro/">
                                <Button radius="full" className="bg-white" size="sm">Conhecer</Button>
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Divider className="my-4" />

            <Footer />
        </>

    )
}
