import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasLogin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Login
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Login</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form.Group controlId="formUsername">
                        <Form.Label htmlFor="inputUsername">Username</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputUsername"
                            placeholder="Enter your username"
                            aria-describedby="usernameHelpBlock"
                        />
                        <Form.Text id="usernameHelpBlock" muted>
                            Your username should be unique and easy to remember.
                        </Form.Text>

                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            placeholder="Enter your password"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="warning">
                        Login
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasLogin;