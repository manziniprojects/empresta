
import { Container } from './styles'


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Disponíveis</p>
                   
                </header>
                <strong>
                    5
               </strong>
            </div>

            <div >
                <header>
                    <p>Emprestados</p>
                 
                </header>
                <strong>
                     - 2
               </strong>
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                  
                </header>
                <strong>
                    3
               </strong>
            </div>
        </Container>
    )
}
