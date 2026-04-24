export const getDepth = (node, adj) => {
  const dfs = (curr) => {
    let depth = 1;

    (adj[curr] || []).forEach(child => {
      depth = Math.max(depth, 1 + dfs(child));
    });

    return depth;
  };

  return dfs(node);
};