
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import {NewTransactionModal} from './components/NewTransactionModal'
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
      <NewTransactionModal isOpen={isNewEmprestimoModalOpen}
        onRequestClose={handleCloseNewEmprestimoModal}
      
      
      />

      
      <Dashboard></Dashboard>

      <GlobalStyle></GlobalStyle>

    </>
  );
}