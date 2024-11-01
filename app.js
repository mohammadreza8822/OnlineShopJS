import Products from "./models/Products.js";
import { fetchData } from "./utils/HttpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  const productsData = await fetchData();
  const productInstance = new Products(productsNode, productsData);
  productInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
