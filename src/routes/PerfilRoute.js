const express = require("express")
const router = express.Router()
const { verificar } = require("./../middlewares/AutenticacaoMiddleware")
const perfilService = require("./../services/PerfilService")

router.get("", async (req, res) => {
  const resposta = await perfilService.buscarUltimos()
  res.json(resposta)
})
router.get("/:id", async (req, res) => {
  const resposta = await perfilService.buscarPorId(req.params.id)
  res.json(resposta)
})
router.post("", async (req, res) => {
  const resposta = await perfilService.cadastrar(req.body)
  res.json(resposta)
})
router.post("/conexao", verificar, async (req, res) => {
  const resposta = await perfilService.conectar(req.body)
  res.json(resposta)
})
router.put("/:id", verificar, async (req, res) => {
  const resposta = await perfilService.editar(req.params.id, req.body)
  res.json(resposta)
})

module.exports = router
