const express = require("express")
const router = express.Router()
const { verificar } = require("./../middlewares/AutenticacaoMiddleware")
const notificacaoService = require("./../services/NotificacaoService")

router.get("/:id", verificar, async (req, res) => {
  const resposta = await notificacaoService.buscarPorId(req.params.id)
  res.json(resposta)
})
router.get("/perfil/:id", verificar, async (req, res) => {
  const resposta = await notificacaoService.buscarPorPerfilId(req.params.id)
  res.json(resposta)
})
router.post("", verificar, async (req, res) => {
  const resposta = await notificacaoService.cadastrar(req.body)
  res.json(resposta)
})
router.put("/lida/:id", verificar, async (req, res) => {
  const resposta = await notificacaoService.marcarLida(req.params.id)
  res.json(resposta)
})

module.exports = router
