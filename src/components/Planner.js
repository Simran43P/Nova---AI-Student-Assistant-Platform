import React from "react";

export default function Planner({ preview }) {
  if (preview) {
    return (
      <div>
        <div style={{fontSize: 12, color: "#666"}}>Next</div>
        <div style={{fontWeight: 700, fontSize: 16}}>No events</div>
      </div>
    );
  }
  return <div>Planner full view (coming soon)</div>;
}
