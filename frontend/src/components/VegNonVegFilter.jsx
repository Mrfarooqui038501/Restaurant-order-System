export default function VegNonVegFilter({ filter, setFilter }) {
  
  const isVeg = filter.veg && !filter.nonveg ? true : !filter.veg && filter.nonveg ? false : true;

  const handleToggle = () => {
    if (isVeg) {
      
      setFilter({ veg: false, nonveg: true });
    } else {
      
      setFilter({ veg: true, nonveg: false });
    }
  };

  return (
    <div style={{ marginBottom: 12, marginTop: 6, display: 'flex', alignItems: 'center', gap: 12 }}>
      <label className="single-toggle-switch" aria-label="Toggle Veg or Non-Veg filter">
        <input
          type="checkbox"
          checked={!isVeg}
          onChange={handleToggle}
          aria-checked={!isVeg}
        />
        <span className="single-slider">
          <span className="label" style={{ opacity: isVeg ? 1 : 0.5 }}>Veg</span>
          <span className="label" style={{ opacity: !isVeg ? 1 : 0.5 }}>Non-Veg</span>
        </span>
      </label>
      <span style={{
        fontWeight: "bold",
        color: isVeg ? "#27ae60" : "#e53935",
        fontSize: "1.06rem"
      }}>
        {isVeg ? "Veg" : "Non-Veg"} dishes
      </span>
    </div>
  );
}
