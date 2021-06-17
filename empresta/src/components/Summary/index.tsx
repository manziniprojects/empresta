
import { Container } from './styles'


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Disponíveis</p>
                   
                </header>
                <strong>
                    R$1.000,00
               </strong>
            </div>

            <div >
                <header>
                    <p>Emprestados</p>
                 
                </header>
                <strong>
                     - R$500,00
               </strong>
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                  
                </header>
                <strong>
                    R$500,00
               </strong>
            </div>
        </Container>
    )
}
