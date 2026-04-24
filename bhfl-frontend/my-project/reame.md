# BFHL Frontend

## About
This is a simple frontend I built using React and Tailwind CSS to interact with the BFHL API.

The idea was to make it easy to input graph edges and clearly see the processed output.

---

## Features
- Input edges in a simple format (A->B, B->C)
- Calls backend API
- Displays:
  - Trees
  - Cycles
  - Invalid entries
  - Duplicate edges
  - Summary

---

## Tech used
- React (Vite)
- Tailwind CSS

---

## How to use
1. Enter edges in the input box  
2. Click "Run"  
3. View results on the right panel  

---

## Deployment
Frontend is hosted on Vercel:
https://mayankthawani-bfhl.vercel.app/

---

## Note
Since the backend is hosted on a free service, the first request might take a few seconds.  
A message is shown in the UI while the server is waking up.