import React, { useState } from "react";
import Add from "../../../images/pre-pago.png";
import "./index.css";

export default function Menu() {
  const [month, setMonth] = useState("");
  const localMonths = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Septembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const date = new Date();
  console.log(date);

  // console.log(localMonth);
  // for (let i = 0; i < localMonths.length; i++) {
  //   // if ((date.getUTCMonth + 1) == i) {
  //   //   console.log(localMonths[i]);
  //   // }
  //   console.log(localMonths[i]);
  // }

  return (
    <span className="addButton">
      <button>
        Lançar Despesa <img src={Add} />
      </button>
      <select name="select">
        {date.getDate() > 5 ? (
          <option value={date.getMonth() + 2}>{date.getMonth() + 2}</option>
        ) : (
          <option value={date.getMonth() + 1}>{date.getMonth() + 1}</option>
        )}

        {/* 1 - Usar o metodo date para pegar o mes atual do sistema e jogar o valor na 1ª opçao 
            2 - Fazer map do objeto Date ate a última despesa lançada*/}
      </select>
    </span>
  );
}
