import { useState } from "react";

export default function usePopMessage(timeout = 3000) {
  const [pop, setPop] = useState({ show: false, message: "" });

  function showPop(message) {
    setPop({ show: true, message });
    setTimeout(() => setPop({ show: false, message: "" }), timeout);
  }

  function PopComponent() {
    return pop.show ? (
      <div style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#e11d48",
        color: "#fff",
        padding: "12px 32px",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        zIndex: 9999,
        fontWeight: "bold",
        fontSize: 16
      }}>
        {pop.message}
      </div>
    ) : null;
  }

  return [PopComponent, showPop];
}
