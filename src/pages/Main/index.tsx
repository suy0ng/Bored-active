import React, { useState } from "react";
import { Participation } from "../../types/Participation";
import * as S from "./style";

function Main() {
  const [participation, setParticipation] = useState<Participation[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newParticipation = Number(e.target.value);
    if (!isNaN(newParticipation)) {
      setParticipation([{ participation: newParticipation }]);
    }
  };

  return (
    <S.Main>
      <h2>인원을 알려주세요!</h2>
      <S.InputContainer>
        <S.ParticipationNumberInput
          type="number"
          name="participation"
          max="10"
          min="0"
          onChange={handleInputChange}
        />
      </S.InputContainer>
    </S.Main>
  );
}

export default Main;
