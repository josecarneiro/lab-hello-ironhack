import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logoIron from './../public/images/ironhack-logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav className="sticky-nav">
            <NavItem>
              <img src={window.location.origin + '/images/ironhack-logo.svg'} className="logo" />
            </NavItem>
            <NavItem>
              <img src={window.location.origin + '/images/menu-top.svg'} />
            </NavItem>
          </Nav>

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <section className="first-section">
            <Container style={{ textAlign: 'left' }}>
              <Row>
                <Col>
                  <h1>
                    Say hello to <br></br>ReactJS
                  </h1>
                  <p>
                    You will learn a Frontend framework from scratch, to becaome an Ninka Developer
                  </p>
                  <Button variant="light">Asawome</Button>{' '}
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </section>

          <section className="white-background">
            <Container>
              <Row>
                <Col>
                  <img src={window.location.origin + '/images/icon1.png'} />
                  <h3>Declarative</h3>
                  <p>React makes it painless to creat interactive UIs.</p>
                </Col>
                <Col>
                  <img src={window.location.origin + '/images/icon2.png'} />
                  <h3>Components</h3>
                  <p>React makes it painless to creat interactive UIs.</p>
                </Col>
                <Col>
                  <img src={window.location.origin + '/images/icon3.png'} />
                  <h3>Single-Way</h3>
                  <p>React makes it painless to creat interactive UIs.</p>
                </Col>
                <Col>
                  <img src={window.location.origin + '/images/icon4.png'} />
                  <h3>JSX</h3>
                  <p>React makes it painless to creat interactive UIs.</p>
                </Col>
              </Row>
            </Container>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
