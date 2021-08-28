import { signIn } from "./signin.js";

const app = document.getElementById("app")
let signin = new signIn()

app.appendChild(signin.render())