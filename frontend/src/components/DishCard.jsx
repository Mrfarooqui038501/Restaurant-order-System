export default function DishCard({ dish, selectedDishes, onAdd, onRemove, onQuantityChange }) {
  const quantity = selectedDishes[dish.id] || 0;

  const handleQuantityInput = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      onQuantityChange(dish.id, 1);
    } else {
      onQuantityChange(dish.id, val);
    }
  };

  return (
    <div className={`dish-card-container${quantity > 0 ? " selected" : ""}`} style={{ position: "relative" }}>
      <img
        className="dish-card-image"
        src={dish.image || dish.category?.image}
        alt={dish.name}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="dish-card-title">{dish.name}</div>
        <div className="dish-card-desc">{dish.description}</div>
        <a href={`/ingredient/${dish.id}`} className="dish-link" aria-label={`View Ingredients of ${dish.name}`}>
          Ingredients
        </a>
      </div>
      <div className="dish-card-actions" style={{ minWidth: 140, display: "flex", alignItems: "center", gap: 8 }}>
        {quantity > 0 ? (
          <>
            <button
              className="dish-btn remove"
              onClick={() => onRemove(dish.id)}
              aria-label={`Remove ${dish.name}`}
            >
              Remove
            </button>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={handleQuantityInput}
              aria-label={`Set quantity for ${dish.name}`}
              style={{
                width: 60,
                padding: '4px 8px',
                fontSize: "1rem",
                borderRadius: 6,
                border: "1px solid var(--border)",
                textAlign: "center",
                userSelect: "text"
              }}
            />
          </>
        ) : (
          <button
            className="dish-btn"
            onClick={() => onAdd(dish.id)}
            aria-label={`Add ${dish.name}`}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
