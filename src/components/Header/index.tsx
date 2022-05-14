import logoIMG from "../../assets/logo.svg"; 
import {Container, Content} from './styles';
import {useState} from 'react';
import Modal from 'react-modal';


export function Header() {
    //criando o modal
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        //sempre que uma função começa com handle é pq o user vai clicar em algo
        setIsNewTransactionModalOpen(false);
    }

    return(
        <Container>
            <Content>
            <img src={logoIMG} alt="dt money" />
            <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova transação
            </button>
            <Modal isOpen={isNewTransactionModalOpen}>
                <h2>
                    Cadastrar Transação
                </h2>
            </Modal> //o modal pode ficar em qualquer lugar do código
            </Content>
        </Container>
    );
}
