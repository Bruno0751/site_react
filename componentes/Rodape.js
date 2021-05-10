import { Container, Jumbotron } from 'reactstrap';

const Rodape = () => {
    return (
        <div>
            <style>
                {`
                    .rodape{
                        background-color: #050d3d;
                        color: #ffffff;
                        padding-top: 10px;
                        padding-bottom: 10px;                        
                        margin-bottom: 0rem !important;
                        
                    }
                    .tamanho{
                        font-size: 20pt;
                    }
                `}
            </style>
            <Jumbotron fluid className="rodape fixed-bottom">

                <Container className="text-center">
                    <h2 className="lead tamanho">Rodapé</h2>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Rodape;