# BFHL Backend API

## About
This is a Node.js API I built for the Bajaj Finance (BFHL) challenge.  
The API takes a list of directed edges as input and processes them into meaningful structures like trees and cycles.

The goal was to handle different edge cases properly and return a clean, structured response.

---

## What it does
- Validates input format (like A->B)
- Filters invalid entries
- Removes duplicate edges
- Builds graph structure
- Detects cycles using DFS
- Converts valid components into trees
- Calculates depth of each tree
- Generates a summary of results

---

## Tech used
- Node.js
- Express.js

---

## API Endpoint
POST /bfhl

---

## Example Input
 - A->B, A->C, B->D


---

## Example Output
- Tree structures
- Cycles (if present)
- Invalid inputs
- Duplicate edges
- Summary (trees, cycles, largest root)

---

## Deployment
The backend is hosted on Render:

[https://your-backend-url.onrender.com/bfhl](https://mayankthawani-bfhl.onrender.com)

---

## Note
If the server has been idle, it may take a few seconds to respond initially (free hosting behavior). 