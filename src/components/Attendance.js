import React from "react";

export default function Attendance({ preview }) {
  if (preview) {
    return (
      <div>
        <div style={{fontSize: 12, color: "#666"}}>Avg attendance</div>
        <div style={{fontWeight: 700, fontSize: 20}}>— %</div>
      </div>
    );
  }
  return <div>Attendance full view (coming soon)</div>;
}
