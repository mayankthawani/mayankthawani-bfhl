export default function SummaryBox({ summary }) {
  return (
    <div className="bg-green-900 p-4 rounded">
      <p> Trees: {summary.total_trees}</p>
      <p> Cycles: {summary.total_cycles}</p>
      <p> Largest Root: {summary.largest_tree_root}</p>
    </div>
  );
}