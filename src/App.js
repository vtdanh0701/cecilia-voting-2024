import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DescriptionTooltip from "./components/DescriptionTooltip.js";
import descriptions from "./data/descriptions.js";
import formElementArr from "./data/formElementArr.js";
import "../src/App.css"
import { Amplify } from "aws-amplify";
import config from './aws-exports.js'
import { generateClient } from 'aws-amplify/api';
import { createVoting } from "./graphql/mutations.js";
import {useNavigate} from 'react-router-dom';
import ConfirmModel from "./components/ConfirmModel.js";

Amplify.configure(config)
const client = generateClient();


const App = () => {
    const [validated, setValidated] = useState(false);
    const [showModel, setShowModel] = useState(false)
    const [data, setData] = useState();
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === true) {
            const formData = new FormData(form);
            const dataObj = Object.fromEntries(formData.entries());
            setData(dataObj); 
            setShowModel(true); 
        }
        else{
            event.stopPropagation();
        }
    }

    const handleConfirmSubmit = async ()  => {
        try{
            let result = await client.graphql({
                query: createVoting,
                variables: {input: data}
            })
            console.log('result from graphQL', result)
        } catch (e){
            console.error('Error submitting', e.message);
            throw Error(e);
        } finally{
            setShowModel(false)
            navigate('/thank-you')
        }
    };
    return (
        <div className="page-background">
            <ConfirmModel 
                showModel={showModel} 
                setShowModel={setShowModel} 
                handleConfirmSubmit={handleConfirmSubmit}/>
            <Container
                className='d-flex flex-column justify-content-center align-items-center form-text mobile-padding form-container'
            >
                <h3
                    className='text-center mt-4 mb-4'
                    style={{ color: "#ff61a2" }}
                >
                    Cecilia Choir Nomination Form 2024
                </h3>
                <Row className='w-100'>
                    <Col xs={12} lg={12} className='mx-auto'>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            {formElementArr.map((e) => {
                                let [descriptionEle] = descriptions.filter(
                                    (item) => item.name === e.name
                                );
                                return (
                                    <Form.Group
                                        key={e.name}
                                        className='mb-3 align-items-center'
                                    >
                                        <Row className='mb-1'>
                                            <Form.Label
                                                column
                                                xs={12}
                                                lg={12}
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {e.displayText}
                                                <DescriptionTooltip
                                                    description={descriptionEle}
                                                />
                                            </Form.Label>
                                        </Row>
                                        <Col xs={12} lg={8}>
                                            <Form.Control
                                                required
                                                size='md'
                                                type={e.type}
                                                placeholder={e.placeholder}
                                                pattern='^[A-Za-zÀ-ỹ ]+$'
                                                name={e.name}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                Please enter a valid username
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                );
                            })}
                            <Row>
                                <Col className='text-center mt-2 mb-4'>
                                    <Button
                                        variant='primary'
                                        type='submit'
                                        className='mt-2 mb-2 gradient-button p-1'
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
