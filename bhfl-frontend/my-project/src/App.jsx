import { useState } from "react";
import InputBox from "./components/inputbox";
import OutputPanel from "./components/output";


export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <h1 className="text-3xl font-semibold mb-6 text-red-500">
        BFHL Graph Visualizer
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <InputBox setResult={setResult} />
        <OutputPanel result={result} />
      </div>
    </div>
  );
}