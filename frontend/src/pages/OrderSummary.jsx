import { useLocation, useNavigate } from "react-router-dom";
import dishes from "../data/dishes";
import { useState } from "react";

export default function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const selectedDishesState = location.state?.selectedDishes || {};
  const selectedIds = Object.keys(selectedDishesState).map(id => Number(id));
  const selectedDishes = dishes.filter(d => selectedIds.includes(d.id));

  if (selectedDishes.length === 0 && !orderPlaced) {
    return (
      <div style={{ padding: '32px 0', textAlign: 'center' }}>
        <h2>No Dishes Selected</h2>
        <button onClick={() => navigate("/")} style={{ padding: "10px 30px", borderRadius: 8, background: "var(--primary)", color: "#fff", border: "none", fontWeight: "bold", marginTop: 16, fontSize: "1.1rem" }}>
          Go Back
        </button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <h2>✅ Order Placed!</h2>
        <div style={{ margin: "18px 0 40px 0", color: "var(--primary)" }}>Thank you for placing your order at THE RESTAURANT 🍽️</div>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "10px 30px", borderRadius: 8, background: "var(--primary)", color: "#fff", border: "none", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ margin: '30px 0 20px' }}>🧾 Order Details</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {selectedDishes.map(dish => (
          <li key={dish.id} style={{
            margin: "14px 0",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: 14,
            background: "var(--gray-light)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "space-between"
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src={dish.category?.image} alt={dish.name} style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 8 }} />
              <div>
                <div style={{ fontWeight: 600, color: "var(--primary)" }}>{dish.name}</div>
                <div style={{ color: "var(--gray)", fontSize: 13 }}>{dish.description}</div>
              </div>
            </div>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Qty: {selectedDishesState[dish.id]}</div>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center", margin: "30px 0 0" }}>
        <button
          onClick={() => setOrderPlaced(true)}
          style={{ padding: "13px 36px", background: "var(--green)", color: "#fff", border: "none", borderRadius: 11, fontWeight: "bold", fontSize: "1.1rem" }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
