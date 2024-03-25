import React from 'react';
import {Row,Col} from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import { Container } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';


export const Schedule = observer(() => {



    return (
        <Container>
          <Row><Col
          md={6}>
          <TypeBar></TypeBar>
          </Col>
          <Col
          md={6}></Col></Row>
        </Container>
    );
});

