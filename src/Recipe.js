import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Col, Row, Alert } from "react-bootstrap";

export class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
        }
    }
    onNewRecipeSubmit(){
        this.setState({success: true})
    }
    render(){ 
        return(
            <Container>
                <h1>New Recipe</h1>
                <Row>
                    <Col sm={4}>
                        <Form.Label>Name</Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Control/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                        <Form.Label>Description</Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Control/>
                    </Col>
                </Row>
                <Button onClick={()=>this.onNewRecipeSubmit()}>Submit</Button>
                <br/>
                <br/>
                {this.state.success ?
                    <Alert variant='success'>done!!</Alert>
                    :
                    <br/>
                }
            </Container>
        )
    }
}
