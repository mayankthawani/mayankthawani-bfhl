export const validateAndClean = (data) => {
  const validEdges = [];
  const invalidEntries = [];
  const duplicateEdges = [];

  const seen = new Set();
  const regex = /^[A-Z]->[A-Z]$/;

  data.forEach(item => {
    const trimmed = item.trim();

    if (!regex.test(trimmed) || trimmed[0] === trimmed[3]) {
      invalidEntries.push(item);
      return;
    }

    if (seen.has(trimmed)) {
      if (!duplicateEdges.includes(trimmed)) {
        duplicateEdges.push(trimmed);
      }
      return;
    }

    seen.add(trimmed);
    validEdges.push(trimmed);
  });

  return { validEdges, invalidEntries, duplicateEdges };
};