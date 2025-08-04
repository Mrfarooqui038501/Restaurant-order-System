import DishCard from "./DishCard";

export default function DishList({ dishes, selectedDishes, onAdd, onRemove, onQuantityChange }) {
  if (dishes.length === 0) {
    return <div className="no-dishes">No dishes found.</div>;
  }
  return (
    <div>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          selectedDishes={selectedDishes}
          onAdd={onAdd}
          onRemove={onRemove}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
}
