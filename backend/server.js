
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Smart Watch", price: 1999, category: "Electronics" },
  { id: 2, name: "Headphones", price: 999, category: "Electronics" },
  { id: 3, name: "Shoes", price: 1499, category: "Fashion" },
  { id: 4, name: "T-Shirt", price: 599, category: "Fashion" }
];

app.get("/", (req, res) => {
  res.send("ShopSphere Backend is Running!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`ShopSphere server running on port ${PORT}`);
});
