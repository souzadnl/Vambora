import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Input, RadioGroup, Radio, user } from "@nextui-org/react";
import ScrollToTop from "../components/ScrollTop";
import InputMask from 'react-input-mask';
import Navbar from "../components/Navbar";

export default function Reserva() {
    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [username, setUsername] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [rg, setRg] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [policialmedico, setPolicialMedico] = useState('');

    const [usernameErro, setUsernameErro] = useState(false);
    const [enderecoErro, setEnderecoErro] = useState(false);
    const [data_nascimentoErro, setData_nascimentoErro] = useState(false);
    const [rgErro, setRgErro] = useState(false);
    const [emailErro, setEmailErro] = useState(false);
    const [celularErro, setCelularErro] = useState(false);
    const [policialmedicoErro, setPolicialMedicoErro] = useState(false);

    function verificar() {
        setUsernameErro(false);
        if (username === '') {
            setUsernameErro(true);
        }
        setEnderecoErro(false);
        if (endereco === '') {
            setEnderecoErro(true);
        }
        setData_nascimentoErro(false);
        if (data_nascimento === '') {
            setData_nascimentoErro(true);
        }
        setRgErro(false);
        if (rg === '') {
            setRgErro(true);
        }
        setEmailErro(false);
        if (email === '') {
            setEmailErro(true);
        }
        setCelularErro(false);
        if (celular === '') {
            setCelularErro(true);
        }
        setPolicialMedicoErro(false);
        if (policialmedico === '') {
            setPolicialMedicoErro(true);
        }
    }

    const [state, handleSubmit] = useForm("meqyyvld");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(event);
        onOpen();
    };

    const handleModalClose = () => {
        onClose();
        navigate("/");
    };

    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(close) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Reserva Concluída</ModalHeader>
                            <ModalBody>
                                <p>
                                    Sua pré-reserva foi realizada com sucesso! Em breve entraremos em contato com mais informações.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="bg-green-500 text-white" onPress={handleModalClose}>
                                    OK
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <div className="flex items-center justify-center mt-24">
                <form onSubmit={handleFormSubmit}>
                    <div className="">
                        <h1 className="text-5xl flex justify-center mb-5">Faça sua pré-reserva</h1>
                        <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">Rio de Janeiro</p>
                    </div>

                    <div className="flex justify-center m-auto mt-5 -mb-5">
                        <span className="text-gray-500">Preencha os campos abaixo!</span>
                    </div>

                    <div className="m-auto grid gap-12 py-12">
                        <Input required={true} isInvalid={usernameErro} errorMessage="Preencha seu nome" name="Nome completo" type="text" variant="underlined" label="Nome completo" value={username} onChange={(e) => {setUsername(e.target.value); setUsernameErro(false);}} />
                        <Input required={true} isInvalid={data_nascimentoErro} errorMessage="Preencha sua data de nascimento" name="Data de Nascimento" type="date" variant="underlined" label="Data de nascimento" value={data_nascimento} onChange={(e) => {setData_nascimento(e.target.value); setData_nascimentoErro(false);}} />
                        <Input required={true} isInvalid={enderecoErro} errorMessage="Preencha seu endereço completo" name="Endereço completo" type="text" variant="underlined" label="Endereço completo" value={endereco} onChange={(e) => {setEndereco(e.target.value); setEnderecoErro(false);}} />
                        <InputMask
                            mask="99.999.999-9"
                            value={rg}
                            onChange={(e) => {setRg(e.target.value); setRgErro(false);}}
                            required={true}
                        >
                            {(inputProps) => <Input {...inputProps} isInvalid={rgErro} errorMessage="Preencha seu RG" name="RG" type="text" variant="underlined" label="RG" />}
                        </InputMask>
                        <Input required={true} isInvalid={emailErro} errorMessage="Preencha seu email" name="Email" type="email" variant="underlined" label="Email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailErro(false);}} />
                        <InputMask
                            mask="(99) 99999-9999"
                            value={celular}
                            onChange={(e) => {setCelular(e.target.value); setCelularErro(false);}}
                            required={true}
                        >
                            {(inputProps) => <Input {...inputProps} isInvalid={celularErro} errorMessage="Preencha o número de celular" name="Celular" type="tel" variant="underlined" label="Celular" />}
                        </InputMask>
                        <RadioGroup required={true}
                            label="Policial ou Médico?"
                            orientation="horizontal"
                            className="text-left"
                            name="Policial ou Médico?"
                            isInvalid={policialmedicoErro}
                            errorMessage="Escolha uma das opções"
                            value={policialmedico}
                            onChange={(e) => {setPolicialMedico(e.target.value); setPolicialMedicoErro(false);}}
                        >
                            <Radio value="médico" className="mt-5">Médico</Radio>
                            <Radio value="policial" className="mt-5">Policial</Radio>
                            <Radio value="não" className="mt-5">Não</Radio>
                        </RadioGroup>
                    </div>

                    <div className="m-auto py-5">
                        <Button type="submit" color="primary" className="w-2/4 m-auto flex justify-center mb-10" onClick={() => verificar()}>Reservar</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
