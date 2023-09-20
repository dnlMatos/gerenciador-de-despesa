import React from "react";
import "./index.css";

function Table({ expensives, monthSelected }) {
  console.log(monthSelected);

 const expansive = expensives.map((month)=>{
    return month.installment.filter((m)=>{
        return(
            m == monthSelected
        )
    })
 })

 console.log(expansive);
  return (
    <table>
      <thead>
        <tr>
          <th>DESPESA</th>
          <th>PARCELA</th>
          <th>VALOR R$</th>
        </tr>
      </thead>
      <tbody>
        {monthSelected == undefined ? (
         expensives.map((exp, index) => {
            return (
              <tr key={index}>
                <td>{exp.name}</td>
                <td>{exp.installment.length}</td>
                <td>{exp.payment}</td>
              </tr>
            );
          })
        ) : (
            expensives.filter((exp, index) => {
                return (
                  <tr key={index}>
                    <td>{exp.name}</td>
                    <td>{exp.installment.length}</td>
                    <td>{exp.payment}</td>
                  </tr>
                );
              })
        )}       
      </tbody>
    </table>
  );
}

export default Table;
