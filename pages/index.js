import React from 'react';

import Head from 'next/head';
import Menu from '../componentes/Menu';
import Rodape from '../componentes/Rodape';

import { Jumbotron, Container } from 'reactstrap';

function Home() {
    return (
        <div>
            <Head>
                <title>Home Page</title>
                <meta charset="UTF-8"/>
            </Head>
            <Menu />
            <Jumbotron fluid className="desc-top">
                <style>
                    {`
                        .desc-top{
                            background-color:#050d3d;
                            color: #ffffff;
                        }`
                    }
                </style>
                <Container className="text-center">
                    <h1 >Jumbotron</h1>
                    <p className="lead">
                        <a href="/orcamento" className="btn btn-outline-primary btn-lg mt-4">orcamento</a>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="servicos">
                <style>
                    {`
                        .servicos{
                            background-color: #ffffff;
                            margin-bottom: 0rem !important;
                        }
                        .circulo{
                            width:140px;
                            height: 140px;
                            background-color: #0a197d;
                            color: #ffffff;
                            font-size: 52px;
                            padding-top: 24px;
                        }
                        .centralizar{
                            float: none !important;
                            margin: 0 auto;
                        }`
                    }
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus auctor mi vel aliquet. Sed lacinia nisl non purus elementum auctor. Aliquam egestas placerat luctus. Vivamus consectetur varius accumsan. Praesent lobortis rhoncus neque, at posuere nulla suscipit eget. Quisque non interdum arcu, at venenatis nulla.</p>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                A
                            </div>
                            <h2 className="mb-4 mt-4">Serviço Um</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                B
                            </div>
                            <h2 className="mb-4 mt-4">Serviço Dois</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                C
                            </div>
                            <h2 className="mb-4 mt-4">Serviço Três</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
    );
}

export default Home