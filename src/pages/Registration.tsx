import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #666;
`

const RegistrationImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  widows: 50vh;
`

function Registration() {
  return (
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration