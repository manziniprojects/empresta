
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";

Modal.setAppElement("#root")

export function App() {
  const [isNewEmprestimoModalOpen, setIsNewEmprestimoModalOpen] = useState(false)

  function handleOpenNewEmprestimoModal() {
    setIsNewEmprestimoModalOpen(true)
  }

  function handleCloseNewEmprestimoModal() {
    setIsNewEmprestimoModalOpen(false)
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewEmprestimoModal}></Header>
      <Modal isOpen={isNewEmprestimoModalOpen}
        onRequestClose={handleCloseNewEmprestimoModal}>
        <h2>Cadastrar empréstimo</h2>
      </Modal>
      <Dashboard></Dashboard>

      <GlobalStyle></GlobalStyle>

    </>
  );
}