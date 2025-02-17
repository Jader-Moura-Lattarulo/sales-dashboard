import { AvatarList, CardComponent, CustomChart, CustomTable, Header } from "@/components"
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [<span>Nome 1</span>, <span>qX0oR@example.com</span>, <button>Action</button>],
      [<span>Nome 2</span>, <span>qX0oR@example.com</span>, <button>Action</button>],
      [<span>Nome 3</span>, <span>qX0oR@example.com</span>, <button>Action</button>],
    ]
  }

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
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}/>
        </CardComponent>
        <CardComponent>
          <CustomChart labels={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']} data={[100, 300, 250, 400, 500]} type="line"/>
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
