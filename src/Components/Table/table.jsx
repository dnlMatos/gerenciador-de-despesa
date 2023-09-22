import React from "react";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

function Table({ expensives, monthSelected }) {
  const [payments, setPayments] = useState([]);
  const [statusMonth, setStatusMonth] = useState(true);

  const monthsFilter = () => {
    const expensive = expensives.filter((exp) => {
      return exp.installment.includes(monthSelected);
    });
    setPayments(expensive);
  };

  const sumValuePayments = payments.reduce((accumulator, object) => {
    return accumulator + object.payment;
  }, 0);

  const sumValueExpensives = expensives.reduce((accumulator, object) => {
    return accumulator + object.payment * object.installment.length;
  }, 0);

  const checkStatusMonth = () => {
    monthSelected === "" || undefined
      ? setStatusMonth(false)
      : setStatusMonth(true);
  };

  console.log(statusMonth);

  useEffect(() => {
    monthsFilter();
    checkStatusMonth();
  }, [monthSelected]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>DESPESA</th>
            <th>QTDE DE PARCELAS</th>
            <th>VALOR R$</th>
          </tr>
        </thead>
        <tbody>
          {statusMonth
            ? payments.map((exp, index) => {
                return (
                  <tr key={index}>
                    <td>{exp.name}</td>
                    <td>{exp.installment.length}</td>
                    <td>{exp.payment},00</td>
                  </tr>
                );
              })
            : expensives.map((exp, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{exp.name}</td>
                      <td>{exp.installment.length}</td>
                      <td>{exp.payment},00</td>
                    </tr>
                  </>
                );
              })}
        </tbody>
      </table>
      <h3 className="totalValue">
        TOTAL R$: {statusMonth ? sumValuePayments : sumValueExpensives},00
      </h3>
    </>
  );
}

export default Table;
