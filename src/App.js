import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DescriptionTooltip from "./components/DescriptionTooltip.js";
import descriptions from "./data/descriptions.js";
import formElementArr from "./data/formElementArr.js";

const App = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const data = Object.fromEntries(formData.entries());
    };
    return (
        <Container
            className='d-flex flex-column justify-content-center align-items-center form-text mobile-padding'
            style={{ minHeight: "100vh" }}
        >
            <h1 className='text-center mt-4 mb-4'>Cecilia Choir Nomination Form 2024</h1>
            <Row className='w-100'>
                <Col xs={12} lg={8} className='mx-auto'>
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
                                    as={Row}
                                    className='mb-3 align-items-center'
                                >
                                    <Form.Label column xs={4} lg={3}>
                                        {e.displayText}
                                    </Form.Label>
                                    <Col xs={6} lg={7}>
                                        <Form.Control
                                            required
                                            size="sm"
                                            type={e.type}
                                            placeholder={e.placeholder}
                                            pattern="^[A-Za-zÀ-ỹ ]+$"
                                        />
                                        <Form.Control.Feedback type="invalid">Please enter a valid username</Form.Control.Feedback>

                                    </Col>
                                    <Col
                                        xs={2}
                                        lg={2}
                                        className='d-flex justify-content-center'
                                    >
                                        <DescriptionTooltip
                                            description={descriptionEle}
                                        />
                                    </Col>
                                </Form.Group>
                            );
                        })}
                        <Row>
                            <Col className='text-center mt-2 mb-4'>
                                <Button
                                    variant='primary'
                                    type='submit'
                                    className='mt-2 mb-2'
                                    style={{
                                        width: "auto",
                                        padding: "0.5rem 1.5rem",
                                    }}
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
