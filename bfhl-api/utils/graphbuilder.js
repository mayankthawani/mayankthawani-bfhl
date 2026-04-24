export const buildGraph = (edges) => {
  const adj = {};
  const reverseAdj = {};
  const nodes = new Set();
  const childParent = new Map();

  edges.forEach(edge => {
    const [p, c] = edge.split("->");

    // multi-parent handling
    if (childParent.has(c)) return;
    childParent.set(c, p);

    if (!adj[p]) adj[p] = [];
    adj[p].push(c);

    if (!reverseAdj[c]) reverseAdj[c] = [];
    reverseAdj[c].push(p);

    nodes.add(p);
    nodes.add(c);
  });

  return { adj, reverseAdj, nodes };
};