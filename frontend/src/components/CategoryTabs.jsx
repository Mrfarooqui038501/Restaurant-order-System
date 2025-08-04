import clsx from "clsx";

export default function CategoryTabs({ categories, selected, onSelect, dishCounts }) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      {categories.map(cat => (
        <button
          key={cat}
          className={clsx("category-tab", { selected: selected === cat })}
          style={{
            flex: 1,
            padding: 10,
            border: '1.5px solid var(--border)',
            background: selected === cat ? 'var(--primary-light)' : '#fff',
            color: selected === cat ? 'var(--primary)' : undefined,
            borderRadius: 6,
            position: 'relative'
          }}
          onClick={() => onSelect(cat)}
        >
          {cat}
          {dishCounts[cat] > 0 && (
            <span style={{
              position: 'absolute',
              top: 5,
              right: 13,
              background: 'var(--primary)',
              color: '#fff',
              borderRadius: 14,
              padding: '1.5px 8px',
              fontSize: 13,
              fontWeight: 'bold'
            }}>
              {dishCounts[cat]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
