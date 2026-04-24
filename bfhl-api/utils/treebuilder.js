export const buildTree = (node, adj) => {
  const dfs = (curr) => {
    const res = {};
    (adj[curr] || []).forEach(child => {
      res[child] = dfs(child);
    });
    return res;
  };

  return {
    [node]: dfs(node)
  };
};