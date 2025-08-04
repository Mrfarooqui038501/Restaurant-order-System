export default function SearchBar({ value, onChange }) {
  return (
    <input
      style={{
        width:'100%',padding:8,border:'1px solid var(--border)',borderRadius:8,marginBottom:12
      }}
      placeholder="Search for dishes..."
      value={value}
      onChange={e=>onChange(e.target.value)}
    />
  );
}
