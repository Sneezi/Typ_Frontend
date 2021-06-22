import React from 'react'
import { Container, Asidebar, Main } from './style'
import ilustracaoImg from '../../assets/ilustracao_cadastro.svg'
import logo from '../../assets/logo.svg'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  }
})

export default function Cadastro() {
  const classes = useStyles()

  return (
    <Container>
      <Asidebar>
        <img src={ilustracaoImg} alt="" />
      </Asidebar>
      <Main>
        <img src={logo} alt="logotipo do Typ" />
        <h2>Cadastro</h2>
        <form>
          <TextField
            className={classes.field}
            type="name"
            label="nome completo"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            className={classes.field}
            type="email"
            label="e-mail"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            className={classes.field}
            type="password"
            label="senha"
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.field}
            type="password"
            label="Confirme a senha"
            variant="outlined"
            required
            fullWidth
          />          
          <button>Cadastrar</button>
        </form>
      </Main>
    </Container>
  )
}