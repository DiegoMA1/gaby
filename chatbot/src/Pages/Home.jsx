import React , {Fragment} from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { ImStatsDots } from 'react-icons/im';
import {BsPersonSquare} from 'react-icons/bs';
import SideBar from '../Components/SideBar';
import LineChart from '../Components/LineChart';

class Home extends React.Component{
    
    render(){
        const followers = {
            textAlign: "center",
            backgroundColor: "DodgerBlue",
            color: "white"
        }
        const following = {
            textAlign: "center",
            backgroundColor: "#dc143c",
            color: "white"
        }
        const publications = {
            textAlign: "center",
            backgroundColor: "#ff8c00",
            color: "white"
        }
        return (
            <Fragment>
                <Container fluid>
                <SideBar/>
                <Row>
                    <Col md={12} lg={12} style={{marginTop: 32}}>
                    <Row>
                    <Col md={3} lg={3}></Col>
                    <Col md={9} lg={9}>
                        <Card style={{ width: '50rem', heigth: '40rem' }}>
                            <Card.Body>
                                <Card.Title><h3 align="center">Crecimiento</h3></Card.Title>
                                <LineChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    </Col>
                    <Col md={12} lg={12} style={{marginTop: 32,}}>
                        <Row>
                        <Col md={3} lg={3}></Col>
                        <Col md={2} lg={2}>
                            <Card style={followers}>
                                <Card.Body>705<br></br>Seguidores</Card.Body>
                            </Card>
                        </Col>
                        <Col md={1} lg={1}></Col>
                        <Col md={2} lg={2}>
                            <Card style={following}>
                                <Card.Body>356<br></br>Siguiendo</Card.Body>
                            </Card>
                        </Col>
                        <Col md={1} lg={1}></Col>
                        <Col md={2} lg={2}>
                            <Card style={publications}>
                                <Card.Body>5<br></br>Publicaciones</Card.Body>
                            </Card>
                        </Col>
                        </Row> 
                    </Col>
                    <Col md={12} lg={12} style={{marginTop: 32}}>
                        <Row>
                            <Col md={3} lg={3}></Col>
                            <Col md={4} lg={4}>
                                <Card style={{ width: '20rem', heigth: '20rem' }}>
                                <Card.Header as="h5" align="center">Statistics</Card.Header>
                                <Card.Body>
                                    <Card.Title><h3 align="center"><ImStatsDots size={64} /></h3></Card.Title>
                                    <Card.Text>
                                        Here you can check out all the statistics of your profile.
                                    </Card.Text>
                                    <Button block size="lg" variant="secondary">Statistics</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={1} lg={1}></Col>
                            <Col md={4} lg={4}>
                                <Card style={{ width: '20rem', heigth: '20rem' }}>
                                    <Card.Header as="h5" align="center">Popular Images</Card.Header>
                                    <Card.Body>
                                        <Card.Title><h3 align="center"><BsPersonSquare size={64} /></h3></Card.Title>
                                        <Card.Text>
                                            Check which of your publications are the most popular and the metrics of each one
                                        </Card.Text>
                                        <Button block size="lg" variant="secondary">Popular Images</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} lg={12} style={{marginTop: 32}}>
                        <Row>
                            <Col md={3} lg={3}></Col>
                            <Col md={4} lg={4}>
                                <Card style={{ width: '20rem', heigth: '20rem' }}>
                                <Card.Header as="h5" align="center">Statistics</Card.Header>
                                <Card.Body>
                                    <Card.Title><h3 align="center"><ImStatsDots size={64} /></h3></Card.Title>
                                    <Card.Text>
                                        Here you can check out all the statistics of your profile.
                                    </Card.Text>
                                    <Button block size="lg" variant="secondary">Statistics</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={1} lg={1}></Col>
                            <Col md={4} lg={4}>
                                <Card style={{ width: '20rem', heigth: '20rem' }}>
                                    <Card.Header as="h5" align="center">Popular Images</Card.Header>
                                    <Card.Body>
                                        <Card.Title><h3 align="center"><BsPersonSquare size={64} /></h3></Card.Title>
                                        <Card.Text>
                                            Check which of your publications are the most popular and the metrics of each one
                                        </Card.Text>
                                        <Button block size="lg" variant="secondary">Popular Images</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;