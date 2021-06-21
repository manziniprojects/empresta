import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    //ao armazenar informacao através do input do usuario, usar um estado
    const [type, setType] = useState('entrada')

    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-conteudo'
        >

            <button
                type="button"
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar" />
            </button>

            <Container>
                <h2>Cadastrar empréstimo/devolução</h2>
                <input
                    placeholder='Nome'
                />

                <TransactionTypeContainer>

                    <RadioBox type="button"
                        onClick={() => { setType('entrada') }}
                        isActive={type === 'entrada'}

                    >
                        <span>Empréstimo</span>
                    </RadioBox>

                    <RadioBox type="button"
                        onClick={() => { setType('emprestimo') }}
                        isActive={type === 'emprestimo'}
                    >

                        <span>Devolução</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    type='text'
                    placeholder='Item'
                />

                <input
                    placeholder='Categoria'
                />

                <button type="submit">Cadastrar</button>


            </Container>
        </Modal>
    )
}