export default function Results({ foods = [] }) {
  return foods.length ? (
    <ul data-testid="results">
      {foods.map((food) => (
        <li key={food.name}>{food.name}</li>
      ))}
    </ul>
  ) : (
    <div data-testid="no-results">Sorry, no items match your search.</div>
  );
}
