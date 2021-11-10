import embed from "vega-embed";
import { spec } from "./spec.js";
import "./style.css";

embed("#app", spec);

/*
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/
