import "./App.css";
import { Count } from "./Count";

export function App() {
  return (
    <>
      <h1>I am huge component and have thousand another components inside</h1>
      {[1, 2, 3, 4, 5].map((v) => (
        <Count key={`counter-${v}`} color="red" countValue={v} />
      ))}
    </>
  );
}
