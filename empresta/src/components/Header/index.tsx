import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  
    
    return (
        <Container>
              
            <Content>
              {/* .<img src={logoImg} alt="" />*/}
          
              <button type="button" onClick={onOpenNewTransactionModal}>
                    Novo
                </button>

            </Content>
        </Container>
    )
}