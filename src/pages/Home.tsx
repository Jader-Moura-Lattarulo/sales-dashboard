import { AvatarList, CardComponent, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1000.00),
    },

    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2344.14),
    },

    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(2730.31),
    }

  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>
          CARD
        </CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
