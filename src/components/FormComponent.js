import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


class FormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servername: '',
            serverip: '',
            servertype: '',
            currency: 'USD'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if(name === "currency"){
            this.props.ToggleType(value);
        }
        this.forceUpdate()
        console.log("Current State is: " + JSON.stringify(this.state)); 
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Col md={{ size: 2, offset: 10 }}>
                                    <Input type="select" name="currency"
                                        value={this.state.currency}
                                        onChange={this.handleInputChange}>
                                        <option>{"USD"}</option>;
                                        <option>{"EUR"}</option>;
                                        <option>{"ILS"}</option>;
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <div>
                                    .
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="servername" md={2}>Server Name</Label>
                                <Col md={3}>
                                    <Input type="text" id="servername" name="servername"
                                        placeholder="Server Name" value={this.state.servername}
                                        onChange={this.handleInputChange} />
                                </Col>
                                <Label for="serverip" md={2}>Server IP</Label>
                                <Col md={3}>
                                    <Input type="text" id="serverip" name="serverip"
                                        placeholder="Server IP" value={this.state.serverip}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="servertype" md={2}>Server Type</Label>
                                <Col md={{ size: 4 }}>
                                    <Input type="select" name="servertype"
                                        value={this.state.servertype} 
                                        onChange={this.handleInputChange}>
                                        <option>{"t1.nano"}</option>
                                        <option>{"t1.xl"}</option>
                                        <option>{"t2.xxl"}</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 3, offset: 6 }}>
                                    <Button type = {"button"} onClick = {() => this.props.handleAddServer(this.state.servername, this.state.serverip, this.state.servertype)} color="primary">
                                        Add Server
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormComponent;