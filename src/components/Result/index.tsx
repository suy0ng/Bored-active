import React from "react";
import { Participant } from "../../types/Participant";
import { BoredActivity } from "../../types/apiData/Bored";
import * as S from "./style";

interface props extends Participant , BoredActivity {}

const Result: React.FC<props> = ({ participant , activity  }) => {


  return (
    <>
      <S.Main>
        <S.ResultTitle>{participant}명의 인원이 할만한 활동은 ?</S.ResultTitle>
        <S.Result>{activity}</S.Result>
        <S.SmallWarningText>* 해석은 알아서 하셔야합니다.</S.SmallWarningText>
      </S.Main>
    </>
  );
};

export default Result;
