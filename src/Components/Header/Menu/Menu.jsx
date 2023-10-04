import React, { useState } from "react";
import Expensives from "../../../Data/Expensives.json";
import "./index.css";
import { useEffect } from "react";
import { useForm } from "../../../Hooks/useForm";
import Table from "../../Table/table";

export default function Menu() {
  let dataView = "";
  let daySyngle = "";
  let monthSingle = "";
  let yeaSingle = "";
  let repeat = 0;

  const expensives = Expensives;
  const [installment, setInstallment] = useState(5);
  const [payment, setPayment] = useState(200);
  const [month, setMonth] = useState();
  const [selectFilter, setSelectFilter] = useState();
  const [stringMonthName, setStringMonthName] = useState("");
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
  const { form, onChangeInput, clearInput } = useForm({
    search: "",
  });

  //data em string
  const date = new Date();
  const monthString = (date.getMonth() + 1).toString();
  const dayString = date.getDate().toString();
  const yearString = date.getFullYear().toString();

  //data em number
  const newFormatDay = parseInt(dayString);
  const newFormatMonth = parseInt(monthString);
  const newFormatYear = parseInt(yearString);

  const dateInit = new Date(newFormatYear, newFormatMonth - 1, newFormatDay);

  useEffect(() => {
    handleMonthName();
    checkingPresentMonth();
  }, [selectFilter, form.search]);

  const handleMonthName = () => {
    switch (month) {
      case 1:
        setStringMonthName("Janeiro");
        break;
      case 2:
        setStringMonthName("Fevereiro");
        break;
      case 3:
        setStringMonthName("Março");
        break;
      case 4:
        setStringMonthName("Abril");
        break;
      case 5:
        setStringMonthName("Maio");
        break;
      case 6:
        setStringMonthName("Junho");
        break;
      case 7:
        setStringMonthName("Julho");
        break;
      case 8:
        setStringMonthName("Agosto");
        break;
      case 9:
        setStringMonthName("Setembro");
        break;
      case 10:
        setStringMonthName("Outubro");
        break;
      case 11:
        setStringMonthName("Novembro");
        break;
      case 12:
        setStringMonthName("Dezembro");
        break;
      default:
        break;
    }
  };

  const checkingPresentMonth = () => {
    {
      newFormatDay <= 1
        ? setMonth(newFormatMonth)
        : setMonth(newFormatMonth + 1);
    }
  };

  const getSelectValue = (e) => {
    setSelectFilter(e.target.value);
  };

  for (let i = 0; i < installment; i++) {
    repeat++;
    if (i === 0) {
      dateInit.setMonth(dateInit.getMonth());
    } else {
      dateInit.setMonth(dateInit.getMonth() + 1);
    }

    daySyngle = dateInit.getDate();
    monthSingle = dateInit.getMonth() + 1;
    yeaSingle = dateInit.getFullYear();

    dataView =
      // "Dia " +
      // daySyngle +
      // "/" +
      monthSingle +
      "/" +
      yeaSingle +
      " parcela " +
      repeat +
      "/" +
      installment +
      " valor da parcela R$ " +
      payment;
  }

  return (
    <>
      <div className="findExpensives">
        <form className="form">
          <div className="parent">
            <div className="parent1">
              <input
                className="expensive"
                value={form.search}
                name={"search"}
                placeholder="Busque pela despesa"
                onChange={onChangeInput}
              />
              <button className="clearBtn" onClick={clearInput}>
                X
              </button>
            </div>
            <button className="searchBtn" onClick={onChangeInput}>
              Pesquisar
            </button>
          </div>
        </form>
        <select
          onChange={getSelectValue}
          name={"select"}
          placeholder="Selecione o mês"
        >
          <option value={""}>Filtre pelo mês</option>
          {allMonths.map((month, index) => {
            return (
              <option key={index} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
      <section className="sectionExpansives">
        <Table expensives={Expensives} monthSelected={selectFilter} form={form.search}/>
      </section>
    </>
  );
}
