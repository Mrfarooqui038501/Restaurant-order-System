import { useState, useMemo } from "react";
import CategoryTabs from "../components/CategoryTabs";
import SearchBar from "../components/SearchBar";
import VegNonVegFilter from "../components/VegNonVegFilter";
import DishList from "../components/DishList";
import SummaryFooter from "../components/SummaryFooter";
import dishes from "../data/dishes";

const CATEGORIES = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ veg: true, nonveg: true });
  const [selectedDishes, setSelectedDishes] = useState({});

  const visibleDishes = useMemo(() => {
    return dishes.filter(
      (d) =>
        d.mealType === selectedCategory &&
        ((filter.veg && d.type === "VEG") || (filter.nonveg && d.type === "NON-VEG")) &&
        d.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [selectedCategory, search, filter]);

  // Handles addition/removal and quantity change
  const handleAddDish = (dishId) => {
    setSelectedDishes((sd) => {
      if (sd[dishId]) return sd; 
      return { ...sd, [dishId]: 1 };
    });
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes((sd) => {
      const newSd = { ...sd };
      delete newSd[dishId];
      return newSd;
    });
  };

  const handleQuantityChange = (dishId, quantity) => {
    const q = Math.max(1, Math.min(99, quantity));
    setSelectedDishes((sd) => ({
      ...sd,
      [dishId]: q,
    }));
  };

  // Count selected dishes per category (based on quantities)
  const counts = useMemo(() => {
    const perCat = {};
    CATEGORIES.forEach((cat) => (perCat[cat] = 0));
    Object.keys(selectedDishes).forEach((id) => {
      const dish = dishes.find((d) => d.id === Number(id));
      if (dish) perCat[dish.mealType] = (perCat[dish.mealType] || 0) + selectedDishes[id];
    });
    return perCat;
  }, [selectedDishes]);

  // Total count of selected dishes sum of quantities
  const totalCount = useMemo(() => {
    return Object.values(selectedDishes).reduce((a, b) => a + b, 0);
  }, [selectedDishes]);

  return (
    <div>
      <CategoryTabs
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        dishCounts={counts}
      />
      <SearchBar value={search} onChange={setSearch} />
      <VegNonVegFilter filter={filter} setFilter={setFilter} />
      <DishList
        dishes={visibleDishes}
        selectedDishes={selectedDishes}
        onAdd={handleAddDish}
        onRemove={handleRemoveDish}
        onQuantityChange={handleQuantityChange}
      />
      <SummaryFooter counts={counts} total={totalCount} selectedDishes={selectedDishes} />
    </div>
  );
}
