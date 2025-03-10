import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl } from '@/components'
import { pxToRem } from '@/utils'


function Registration() {
  return (
    <>
      <Box>
            <Grid container>
              <Grid item xs={12} sm={6} sx={{ display: {alignItems: 'center', display: 'flex', height: '100vh'} }}>
              
                <Container maxWidth="sm">
                  <Box sx={{ marginBottom: pxToRem(24) }}>
                    <Logo height={41} width={100}/>
                  </Box>
                  <Box>
                    <StyledH1>Faça seu cadastro</StyledH1>
                    <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                    <StyledUl>
                      <li>Entre 8 e 16 caracteres</li>
                      <li>Pelo menos uma letra maiúscula</li>
                      <li>Pelo menos um caracter especial</li>
                      <li>Pelo menos um número</li>
                    </StyledUl>
                  </Box> 
                  <FormComponent inputs={[
              { type: 'email', placeholder: 'Email', name: 'email' },
              { type: 'password', placeholder: 'Senha', name: 'password' },
            ]} 
            buttons={[
              { className: 'primary', type: 'submit', children: 'Login' }
            ]}
            message={{ message: 'ERROOO!', type: 'error' }}
            /> 
                </Container>
              </Grid>
              
              <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
                  <BannerImage />
              </Grid>
            </Grid>
          </Box>
    </>
  )
}

export default Registration
