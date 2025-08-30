import React from "react";

export default function Library({ preview }) {
  if (preview) {
    return (
      <div>
        <div style={{fontSize: 12, color: "#666"}}>Notes</div>
        <div style={{fontWeight: 700, fontSize: 20}}>0</div>
      </div>
    );
  }
  return <div>Library full view (coming soon)</div>;
}
