import React, { useEffect, useRef } from "react";
import { Container, Form } from "react-bootstrap";

interface Props {
  file: File | undefined;
  setUserChoose: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const ChechBoxes: React.FC<Props> = ({ file, setUserChoose }) => {
  // REFERENCES TO <Form.Check> ELEMENTS
  const RADIO_BOXES = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    // IF THE USER CHOOSES A FORMAT AND CHANGES THE FILE, THE CHECK MARK WILL REMAIN AND THE "userChoose" STATE WILL REMAIN TO THE PREVIOUS CHOOCE. WITH THIS EVERYTHING IS RESET.
    RADIO_BOXES.forEach((ref) => {
      if (ref.current) {
        ref.current.checked = false;
        setUserChoose(undefined);
      }
    });
  }, [file]);

  return (
    <Form.Group className="m-5">
      {file ? (
        <Container>
          <Form.Check
            ref={RADIO_BOXES[0]}
            disabled={file?.name.slice(file?.name.lastIndexOf(".")) === ".aac"}
            inline
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserChoose(e.target.value)
            }
            label="aac"
            value={"aac"}
            name="userChoose"
            type={"radio"}
          />
          <Form.Check
            ref={RADIO_BOXES[1]}
            disabled={file?.name.slice(file?.name.lastIndexOf(".")) === ".mp3"}
            inline
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserChoose(e.target.value)
            }
            label="mp3"
            value={"mp3"}
            name="userChoose"
            type={"radio"}
          />
          <Form.Check
            ref={RADIO_BOXES[2]}
            disabled={file?.name.slice(file?.name.lastIndexOf(".")) === ".ogg"}
            inline
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserChoose(e.target.value)
            }
            label="ogg"
            value={"ogg"}
            name="userChoose"
            type={"radio"}
          />
          <Form.Check
            ref={RADIO_BOXES[3]}
            disabled={file?.name.slice(file?.name.lastIndexOf(".")) === ".wav"}
            inline
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserChoose(e.target.value)
            }
            label="wav"
            value={"wav"}
            name="userChoose"
            type={"radio"}
          />
        </Container>
      ) : (
        <Container>
          <Form.Check disabled inline label="aac" type={"radio"} />
          <Form.Check disabled inline label="mp3" type={"radio"} />
          <Form.Check disabled inline label="ogg" type={"radio"} />
          <Form.Check disabled inline label="wav" type={"radio"} />
        </Container>
      )}
    </Form.Group>
  );
};

export default ChechBoxes;
