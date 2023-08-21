import { useState } from "react";
import * as S from "./style";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Result } from "../../components";
import { createPortal } from "react-dom";

const Main: React.FC = () => {
  const [participant, setParticipant] = useState<number>(0);

  return (
    <>
      <S.Main>
        <h2> 재미있는 활동 랜덤 추천 🎲</h2>
        <S.InputContainer className="d-grid gap-2">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              인원수
            </InputGroup.Text>
            <Form.Control
              type="number"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                const newValue: number = Number(e.target.value);
                if (!isNaN(newValue)) {
                  setParticipant(Number(newValue));
                }
              }}
            />
          </InputGroup>
          <Button variant="primary" size="lg">
            결과보러가기
          </Button>
        </S.InputContainer>
      </S.Main>
      {createPortal(<Result participant={participant} />, document.body)}
    </>
  );
};

export default Main;
