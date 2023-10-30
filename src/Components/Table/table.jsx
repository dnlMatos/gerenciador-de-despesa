import React from "react";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import Tablee from 'react-bootstrap/Table';

function Table({ expensives, monthSelected, form }) {
  const [payments, setPayments] = useState([]);
  const [statusMonth, setStatusMonth] = useState(true);
  const [t, setT] = useState({});

  const monthsFilter = () => {
    const expensive = expensives.filter((exp) => {
      return exp.installment.includes(monthSelected);
    });
    setPayments(expensive);
  };

  const checkInputValue = (form) => {
    const t =
      form !== ""
        ? expensives.filter((exp) => {
            return exp.name.includes(form);
          })
        : "";
    setT(t);
  };
  console.log(t);
  console.log(t.payment);

  const sumValuePayments = payments.reduce((accumulator, object) => {
    return accumulator + object.payment;
  }, 0);

  const sumValueExpensives = expensives.reduce((accumulator, object) => {
    return accumulator + object.payment * object.installment.length;
  }, 0);

  const checkStatusMonth = () => {
    monthSelected === "" || monthSelected === undefined
      ? setStatusMonth(false)
      : setStatusMonth(true);
  };

  useEffect(() => {
    checkInputValue(form);
    monthsFilter();
    checkStatusMonth();
  }, [monthSelected, form]);

  return (
    <>
      <Tablee>
        <thead>
          <tr>
            <th>DESPESA</th>
            <th>QTDE DE PARCELAS</th>
            <th>VALOR DA PARCELA R$</th>
          </tr>
        </thead>
        <tbody>
          {form === ""
            ? statusMonth
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
                })
            : expensives
                .filter((exp) => {
                  return exp.name.includes(form);
                })
                .map((a, index) => {
                  return (
                    <tr key={index}>
                      <td>{a.name}</td>
                      <td>{a.installment.length}</td>
                      <td>{a.payment},00</td>
                    </tr>
                  );
                })}
        </tbody>
      </Tablee>
      <h3 className="totalValue">
        TOTAL R$:{" "}
        {form === ""
          ? statusMonth
            ? sumValuePayments
            : sumValueExpensives
          : sumValuePayments}
        ,00
      </h3>
    </>
  );
}

export default Table;
