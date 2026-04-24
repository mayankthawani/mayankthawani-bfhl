import { useState } from "react";
import axios from "axios";

const API_URL = "https://mayankthawani-bfhl.onrender.com/bfhl";

export default function InputBox({ setResult }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return alert("Enter some data");

    try {
      setLoading(true);

      const arr = input.split(",").map((x) => x.trim());

      const res = await axios.post(API_URL, {
        data: arr,
      });

      setResult(res.data);
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const sampleData = () => {
    setInput(
      "A->B, A->C, B->D, C->E, E->F, X->Y, Y->Z, Z->X, P->Q, Q->R"
    );
  };

  return (
    <div className="bg-neutral-900 p-4 rounded-xl shadow">
      <h2 className="text-lg mb-3">Input Edges</h2>

      <textarea
        className="w-full h-32 p-2 text-black rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="A->B, B->C, C->D"
      />

      <div className="flex gap-3 mt-3">
        <button
          onClick={handleSubmit}
          className="bg-red-600 px-4 py-2 rounded"
        >
          {loading ? "Processing..." : "Run"}
        </button>

        <button
          onClick={sampleData}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Sample
        </button>
      </div>
    </div>
  );
}