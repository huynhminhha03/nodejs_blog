import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(".hbs", engine({ extname: ".hbs"}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
