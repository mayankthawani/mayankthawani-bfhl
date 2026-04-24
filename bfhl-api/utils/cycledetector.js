export const detectCycle = (component, adj) => {
  const visited = new Set();
  const recStack = new Set();

  const dfs = (node) => {
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    recStack.add(node);

    for (let nei of adj[node] || []) {
      if (component.has(nei) && dfs(nei)) return true;
    }

    recStack.delete(node);
    return false;
  };

  for (let node of component) {
    if (dfs(node)) return true;
  }

  return false;
};