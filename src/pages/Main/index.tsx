import { useState } from "react";
import * as S from "./style";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Result } from "../../components";
import { createPortal } from "react-dom";
import axios from "axios";
import { BoredActivity } from "../../types/apiData/Bored";

export interface BoredAcitivity extends BoredActivity {}

const Main: React.FC = () => {
  const [participant, setParticipant] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [boredActivityData, setBoredActivityData] = useState<BoredAcitivity>({
    activity: "",
  });

  const handleButtonClick = async () => {
    if (participant <= 0 || participant >= 9) {
      window.alert("참가인원은 1명에서 5명사이로 적어주십시오.");
    }
    try {
      setModal(true);
      const response = await axios.get(
        `https://www.boredapi.com/api/activity?participants=${participant}`
      );
      setBoredActivityData(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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
              max={5}
              min={1}
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
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              handleButtonClick();
            }}
          >
            결과보러가기
          </Button>
        </S.InputContainer>
      </S.Main>
      {modal && createPortal(
        <Result
          participant={participant}
          activity={boredActivityData.activity}
        />,
        document.body
      )}
    </>
  );
};

export default Main;
