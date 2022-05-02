export default function Results({ foods }) {
  return foods.length ? (
    <ul>
      {foods.map((food) => (
        <li key={food.name}>{food.name}</li>
      ))}
    </ul>
  ) : (
    <div>Sorry, no items match your search.</div>
  );
}
