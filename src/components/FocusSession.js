import React from "react";

export default function Expense({ preview }) {
  if (preview) {
    return (
      <div>
        <div style={{fontSize: 12, color: "#666"}}>This month</div>
        <div style={{fontWeight: 700, fontSize: 20}}>₹0.00</div>
      </div>




    );
  }
  return <div>Expense full view (coming soon)</div>;
}
