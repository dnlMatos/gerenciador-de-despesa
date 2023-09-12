import React, { useState } from "react";
import Add from "../../../images/pre-pago.png";
import "./index.css";
import { useEffect } from "react";

export default function Menu() {
  const [installment, setInstallment] = useState(5);
  const [payment, setPayment] = useState(200);
  const [month, setMonth] = useState();
  
  const date = new Date();
  const monthString = (date.getMonth() + 1).toString();
  const dayString = date.getDate().toString();
  const yearString = date.getFullYear().toString();
  
  const newFormatDay = parseInt(dayString);
  const newFormatMonth = parseInt(monthString);
  const newFormatYear = parseInt(yearString);
  
  useEffect(()=>{
    checkMonth(newFormatMonth)
  },[])

  const checkMonth = (month) => {
    switch (month) {
      case 1:
        setMonth("Janeiro");
        break;
      case 2:
        setMonth("Fevereiro");
        break;
      case 3:
        setMonth("Março");
        break;
      case 4:
        setMonth("Abril");
        break;
      case 5:
        setMonth("Maio");
        break;
      case 6:
        setMonth("Junho");
        break;
      case 7:
        setMonth("Julho");
        break;
      case 8:
        setMonth("Agosto");
        break;
      case 9:
        setMonth("Setembro");
        break;
      case 10:
        setMonth("Outubro");
        break;
      case 11:
        setMonth("Novembro");
        break;
      case 12:
        setMonth("Dezembro");
        break;
      default:
    }
  };

  return (
    <span className="addButton">
      <button>
        Lançar Despesa <img src={Add} />
      </button>
      <select value="">
        {newFormatDay <= 5 ? (
          <option value={month}>{month}</option>
        ) : (
          <option value={newFormatMonth + 1}>{newFormatMonth + 1}</option>
        )}
      </select>
    </span>
  );
}
