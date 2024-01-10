import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModel({showModel, setShowModel, handleConfirmSubmit}) {

    const handleClose = () => setShowModel(false);

    return (
        <>
            <Modal
                show={showModel}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Body>Are you sure you want to submit?</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Cancel</Button>
                    <Button variant='primary' onClick={handleConfirmSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmModel;
