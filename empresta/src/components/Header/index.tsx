import { Container, Content } from './styles'
import logoImg from '../../assets/logo.png'
interface HeaderProps {
    onOpenNewTransactionModal: () => void
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  
    
    return (
        <Container>
              
            <Content>
           <img src={logoImg} alt="" />
          
              <button type="button" onClick={onOpenNewTransactionModal}>
                    Novo empréstimo
                </button>

            </Content>
        </Container>
    )
}