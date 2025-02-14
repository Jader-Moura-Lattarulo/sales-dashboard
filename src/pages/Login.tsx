import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, Logo, StyledH1, StyledP } from '@/components'
import { pxToRem } from '@/utils'

function Login() {
  return (
    <>
    <Box>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
          <Container maxWidth="sm">
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={41} width={100}/>
            </Box>
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Bem-vindo</StyledH1>
              <StyledP>Faça login para continuar</StyledP>
            </Box>
            <FormComponent inputs={[
              { type: 'email', placeholder: 'Email', name: 'email' },
              { type: 'password', placeholder: 'Senha', name: 'password' },
            ]} 
            buttons={[
              { className: 'primary', type: 'submit', children: 'Login'},
            ]}
            message={{ message: 'Login efetuado com sucesso', type: 'success' }}
            /> 
          </Container>
        </Grid>
        
        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <BannerImage/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Login
