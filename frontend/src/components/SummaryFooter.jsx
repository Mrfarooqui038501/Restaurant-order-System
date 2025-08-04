import { useNavigate } from "react-router-dom";

export default function SummaryFooter({ counts, total, selectedDishes }) {
  const navigate = useNavigate();

  return (
    <div className="summary-footer" style={{
      position: 'sticky',
      bottom: 0,
      background: 'var(--background)',
      borderTop: '2px solid var(--border)',
      padding: '16px 0 12px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 11
    }}>
      <div>
        <span className="summary-label" style={{ marginRight: 10 }}>
          Total Selected: <b>{total}</b>
        </span>
        {Object.entries(counts).map(([cat, cnt]) => (
          <span
            key={cat}
            className={`category-count${cnt > 0 ? " selected" : ""}`}
            style={{
              marginRight: 12,
              color: cnt > 0 ? 'var(--primary)' : 'var(--gray)',
              fontWeight: cnt > 0 ? 600 : undefined
            }}
          >
            {cat}: {cnt}
          </span>
        ))}
      </div>
      <button
        className="continue-btn"
        disabled={total === 0}
        onClick={() => {
          if (total > 0) {
            navigate("/order", { state: { selectedDishes } });
          }
        }}
        style={{
          background: total === 0 ? "var(--border)" : "var(--primary)",
          color: "#fff",
          padding: "12px 36px",
          borderRadius: 10,
          border: "none",
          fontWeight: 600,
          fontSize: "1.05rem",
          cursor: total === 0 ? "not-allowed" : "pointer"
        }}
      >
        Continue
      </button>
    </div>
  );
}
