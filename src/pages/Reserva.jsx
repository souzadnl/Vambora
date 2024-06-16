import { useState } from "react";
import { useForm } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Input, RadioGroup, Radio } from "@nextui-org/react";
import ScrollToTop from "../components/ScrollTop";
import InputMask from 'react-input-mask';

export default function Reserva() {
    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [username, setUsername] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [rg, setRg] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

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
                                <Button color="primary" onPress={handleModalClose}>
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
                        <Input name="Nome completo" type="text" variant="underlined" label="Nome completo" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input name="Data de Nascimento" type="date" variant="underlined" label="Data de nascimento" value={data_nascimento} onChange={(e) => setData_nascimento(e.target.value)} />
                        <Input name="Endereço completo" type="text" variant="underlined" label="Endereço completo" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        <InputMask
                            mask="99.999.999-9"
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                        >
                            {(inputProps) => <Input {...inputProps} name="RG" type="text" variant="underlined" label="RG" />}
                        </InputMask>
                        <Input name="Email" type="email" variant="underlined" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputMask
                            mask="(99) 99999-9999"
                            value={celular}
                            onChange={(e) => setCelular(e.target.value)}
                        >
                            {(inputProps) => <Input {...inputProps} name="Celular" type="tel" variant="underlined" label="Celular" />}
                        </InputMask>
                        <RadioGroup
                            label="Policial ou Médico?"
                            orientation="horizontal"
                            className="text-left"
                            name="Policial ou Médico?"
                        >
                            <Radio value="sim" className="mt-5">Sim</Radio>
                            <Radio value="não" className="mt-5">Não</Radio>
                        </RadioGroup>
                    </div>

                    <div className="m-auto py-5">
                        <Button type="submit" color="primary" className="w-2/4 m-auto flex justify-center mb-10">Reservar</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
