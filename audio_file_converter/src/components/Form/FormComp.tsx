import React, { useState } from "react";
import "./Form.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import formHandler from "../../handlers/formHandler";
import ChechBoxes from "./ChechBoxes";
import handleFileChange from "../../handlers/handleFileChange";
import PopupModal from "../PopupModal/PopupModal";

const FormCom: React.FC = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [userChoose, setUserChoose] = useState<string | undefined>(undefined);

  return (
    <Container
      className=" d-flex align-items-center justify-content-center"
      style={{
        height: "100%",
      }}
    >
      <PopupModal
        setFile={setFile}
        setUserChoose={setUserChoose}
        setErrorCode={setErrorCode}
        errorCode={errorCode}
      />
      <Row className="ROW">
        <Col className=" d-flex justify-content-center">
          <Card bg={"dark"}>
            <Card.Header
              className={
                file ? "text-center text-success " : "text-center text-danger"
              }
            >
              {file ? "NOW CHOOSE THE DESIRED FORMAT" : "CHOOSE A FILE"}
            </Card.Header>
            <Card.Body>
              <Form
                onSubmit={(event) => {
                  formHandler(event, file!, userChoose!);
                }}
                className="text-center text-info h4"
                style={{
                  height: "100%",
                }}
              >
                <Container>
                  <Row className="m-5">
                    <Form.Group>
                      <Form.Control
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleFileChange(event, setFile, setErrorCode)}
                        type="file"
                        name="THE_FILE"
                        id="THE_FILE"
                        accept="audio/ogg, audio/aac ,.aac , audio/mpeg ,  audio/wav , audio/x-wav  "
                        style={{
                          display: "none",
                        }}
                      />
                      <Form.Label className="LABEL h5 p-2" htmlFor="THE_FILE">
                        {file ? file?.name.slice(0, 60) : "Click here"}
                      </Form.Label>
                    </Form.Group>
                  </Row>
                  <Row className="m-5">
                    <Form.Group>
                      <ChechBoxes file={file} setUserChoose={setUserChoose} />
                      <Button
                        size="lg"
                        type={"submit"}
                        disabled={userChoose ? false : true}
                      >
                        Convert
                      </Button>
                    </Form.Group>
                  </Row>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormCom;
