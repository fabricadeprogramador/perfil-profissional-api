const perfilService = require("./PerfilService")

module.exports = {
  autenticar: (req, res) => {
    let usuario = req.body

    if (usuario.email && usuario.senha) {
      let usuarioEncontrado = perfilService.perfis.find(
        (perfil) =>
          perfil.usuario.email == usuario.email &&
          perfil.usuario.senha == usuario.senha
      )

      if (usuarioEncontrado) {
        let resposta = {}
        resposta.perfil = usuarioEncontrado.id
        resposta.token = "Fabricadeprogramador"

        res.json(resposta)
      } else {
        res.json({
          message: "Erro ao efetuar login : Credenciais inválidas"
        })
      }
    } else {
      res.status(400).json({
        message: "Erro ao efetuar login : Faltando Credenciais"
      })
    }
  }
}
