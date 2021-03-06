import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'




export function TransactionTable() {
    
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    }, [])

    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th> Nome</th>
                        <th> Item </th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> Manzini</td>
                        <td className="devolucao">Chromebook2</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td> Rafaela</td>
                        <td className="retirada"> Chromebook2</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>


                </tbody>
            </table>
        </Container>


    )


}
