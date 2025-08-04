import { useParams, useNavigate } from "react-router-dom";
import dishes from '../data/dishes';
import ingredients from '../data/ingredients';

export default function IngredientDetail() {
  const { dishId } = useParams();
  const id = Number(dishId);
  const dish = dishes.find(d=>d.id === id);
  const ingList = ingredients[id] || [{name:"Sample Ingredient",quantity:"100g"}];
  const navigate = useNavigate();

  if(!dish) return <div style={{padding:32}}>Dish not found.</div>

  return (
    <div style={{
      maxWidth:450,margin:'40px auto',background:'#fff',borderRadius:8,padding:24,
      border:'1px solid var(--border)'
    }}>
      <button onClick={()=>navigate(-1)} style={{marginBottom:14, background:'#e5e8ed', border:'none', borderRadius:6,padding:'4px 16px'}}>← Back</button>
      <h2 style={{margin:"8px 0"}}>{dish.name}</h2>
      <div style={{color:"var(--gray)",marginBottom:18}}>{dish.description}</div>
      <b>Ingredients:</b>
      <ul>
        {ingList.map((ing, idx)=>(
          <li key={idx}>{ing.name} — {ing.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
