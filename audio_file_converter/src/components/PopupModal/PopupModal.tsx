import React from "react";
import Modal from "react-bootstrap/Modal";

import "./PopupModal.css";
import { Button } from "react-bootstrap";
import resetStatesHandler from "../../handlers/resetStatesHandler";

interface Props {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  errorCode: number;
  setUserChoose: React.Dispatch<React.SetStateAction<string | undefined>>;
  setErrorCode: React.Dispatch<React.SetStateAction<number>>;
}

const PopupModal: React.FC<Props> = ({
  setFile,
  setUserChoose,
  setErrorCode,
  errorCode,
}) => {
  const errorMessages: string[] = [
    "The file you chose is not supported.",
    "It seemed the file is not real audio file",
    "The file size is larger than the allowed size.",
  ];
  return (
    <Modal show={errorCode > 0} centered>
      <Modal.Header className="text-danger">
        <Modal.Title>ERROR</Modal.Title>
      </Modal.Header>
      <Modal.Body className="lead">
        {errorMessages[errorCode - 1]}
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() =>
              resetStatesHandler(setFile, setUserChoose, setErrorCode)
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;
