import React, { useState } from "react";
import Add from "../../../images/pre-pago.png";
import "./index.css";
import { useEffect } from "react";

export default function Menu() {
  const [installment, setInstallment] = useState(5);
  const [payment, setPayment] = useState(200);
  const [month, setMonth] = useState();
  const [months, setMonths] = useState([]);
  const allMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const date = new Date();
  const monthString = (date.getMonth() + 1).toString();
  const dayString = date.getDate().toString();
  const yearString = date.getFullYear().toString();

  const newFormatDay = parseInt(dayString);
  const newFormatMonth = parseInt(monthString);
  const newFormatYear = parseInt(yearString);

  useEffect(() => {
    checkingPresentMonth()
    chechMonth();
  }, []);

  const checkingPresentMonth = () => {
    {
      newFormatDay <= 5
        ? setMonth(newFormatMonth)
        : setMonth(newFormatMonth + 1);
    }
  };

  console.log(month);

  const chechMonth = () => {
    const listMonths = allMonths.filter((month) => {
     return month > newFormatMonth
    });
    console.log(listMonths);
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
          <option value={newFormatMonth + 1}>{month}</option>
        )}
      </select>
    </span>
  );
}
