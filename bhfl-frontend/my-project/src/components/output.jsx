import HierarchyCard from "./heirarchycard";
import SummaryBox from "./summary";

export default function OutputPanel({ result }) {
  if (!result) {
    return (
      <div className="bg-neutral-900 p-4 rounded-xl">
        No output yet...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {result.hierarchies.map((item, index) => (
        <HierarchyCard key={index} data={item} />
      ))}

      <SummaryBox summary={result.summary} />

      <div className="bg-neutral-800 p-3 rounded">
        Invalid: {result.invalid_entries.join(", ") || "None"}
      </div>

      <div className="bg-neutral-800 p-3 rounded">
        Duplicates: {result.duplicate_edges.join(", ") || "None"}
      </div>
    </div>
  );
}