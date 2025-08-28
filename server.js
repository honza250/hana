const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// nastavení EJS jako šablonovací engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// statické soubory
app.use(express.static(path.join(__dirname, "public")));

// načtení rout
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
