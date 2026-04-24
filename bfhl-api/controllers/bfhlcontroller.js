import { validateAndClean } from "../utils/validator.js";
import { buildGraph } from "../utils/graphbuilder.js";
import { buildTree } from "../utils/treebuilder.js";
import { getDepth } from "../utils/depthcalculator.js";
import { detectCycle } from "../utils/cycledetector.js";

// performing the dfs technique here to detect connected componenents in graphs and marking the visited nodes
function dfs(node, component, visited, adj, reverseAdj) {
  if (component.has(node)) return;

  component.add(node);
  visited.add(node);

  (adj[node] || []).forEach(child => {
    dfs(child, component, visited, adj, reverseAdj);
  });

  (reverseAdj[node] || []).forEach(parent => {
    dfs(parent, component, visited, adj, reverseAdj);
  });
}

export const handlebfhl = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ error: "Invalid input format" });
    }

   // validating the things here 
    const {
      validEdges,
      invalidEntries,
      duplicateEdges
    } = validateAndClean(data);

    // building graph here 
    const { adj, reverseAdj, nodes } = buildGraph(validEdges);

    const visited = new Set();
    const hierarchies = [];

    let totalTrees = 0;
    let totalCycles = 0;
    let maxDepth = 0;
    let largestTreeRoot = "";

    for (let node of nodes) {
      if (visited.has(node)) continue;

      const component = new Set();

      // calling dfs function
      dfs(node, component, visited, adj, reverseAdj);

      //calling the detect cyvle function
      const hasCycle = detectCycle(component, adj);

      let root;

      if (hasCycle) {
        totalCycles++;
        root = [...component].sort()[0];

        hierarchies.push({
          root,
          tree: {},
          has_cycle: true
        });
      } else {
        totalTrees++;

        // finding the root here 
        const children = new Set();
        component.forEach(n => {
          (adj[n] || []).forEach(c => children.add(c));
        });

        root = [...component].find(n => !children.has(n));

        const tree = buildTree(root, adj);
        const depth = getDepth(root, adj);

        if (
          depth > maxDepth ||
          (depth === maxDepth && root < largestTreeRoot)
        ) {
          maxDepth = depth;
          largestTreeRoot = root;
        }

        hierarchies.push({
          root,
          tree,
          depth
        });
      }
    }
    res.json({
      user_id: "mayank_thawani", 
      email_id: "mt7316@srmist.edu.in",
      college_roll_number: "RA2311030010219",
      hierarchies,
      invalid_entries: invalidEntries,
      duplicate_edges: duplicateEdges,
      summary: {
        total_trees: totalTrees,
        total_cycles: totalCycles,
        largest_tree_root: largestTreeRoot
      }
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};