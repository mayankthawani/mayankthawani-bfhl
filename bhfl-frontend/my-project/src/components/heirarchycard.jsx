export default function HierarchyCard({ data }) {
  if (data.has_cycle) {
    return (
      <div className="bg-red-900 p-4 rounded">
         Cycle detected at <b>{data.root}</b>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 p-4 rounded">
      <h3 className="text-red-400 font-medium">
        Root: {data.root}
      </h3>

      <pre className="text-sm mt-2 overflow-x-auto">
        {JSON.stringify(data.tree, null, 2)}
      </pre>

      <p className="mt-2">Depth: {data.depth}</p>
    </div>
  );
}