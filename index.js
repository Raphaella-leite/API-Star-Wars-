const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());
db.carregarFilms();

app.get("/", async (req, res) => {
  res.send(db);
});

app.patch("/:episode_id", async (req, res) => {
  if (!req.body.opening_crawl) {
    return res.status(400).send({ message: "A descrição não pode ser vazia" });
  }

  const filme = db.buscarPorId(req.params.episode_id);

  if (filme) {
    filme.version++;
    filme.opening_crawl = req.body.opening_crawl;
    res.status(204).send();
  } else res.status(404).send({ message: "Filme não encontrado" });
});

app.get("/:episode_id", async (req, res) => {
  const filme = db.buscarPorId(req.params.episode_id);

  if (filme == null) {
    return res.status(404).send({ message: "Filme não encontrado" });
  }

  res.send(await filme.populate());
});

app.listen(8080, () => {
  console.log("Servidor iniciado");
});
