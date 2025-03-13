import { ChangeEvent, useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import {
  CardComponent,
  FormComponent,
  Header,
  CustomTable,
  StyledH2,
  StyledButton,
  StyledSpan,
  StyledP,
} from '@/components'
import { useFormValidation, useGet, usePost, useDelete } from '@/hooks'
import { InputProps, LeadsData, LeadsPostData, MessageProps } from '@/types'

function Leads() {
  // HOOKS
  const {
    data: createLeadsData,
    loading: createLeadsLoading,
    error: createLeadsError,
    postData: createLeadsPostData,
  } = usePost<LeadsData, LeadsPostData>('leads/create', true)

  const {
    data: leadsData,
    loading: leadsLoading,
    error: leadsError,
    getData: getLeads,
  } = useGet<LeadsData[]>('leads')

  const { deleteData: leadsDeleteData, loading: leadsDeleteLoading } =
    useDelete('leads/delete')

  const [createMessage, setCreateMessage] = useState<MessageProps>({
    type: 'success',
    message: '',
  })

  const clearMessage = () => {
    setTimeout(() => {
      setCreateMessage({ type: 'success', message: '' })
    }, 3000)
  }

  useEffect(() => {
    if (createLeadsData?.id) {
      setCreateMessage({
        message: 'Lead criado com sucesso',
        type: 'success',
      })
      getLeads()
      clearMessage()
    } else if (createLeadsError) {
      setCreateMessage({
        message:
          'Não foi possível realizar a operação. Entre em contato com o nosso suporte',
        type: 'error',
      })
    }
  }, [createLeadsData, createLeadsError])

  // FORM
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', required: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createLeadsPostData({
      name: String(formValues[0]),
      email: String(formValues[1]),
      phone: String(formValues[2]),
    })
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir esse lead?')) {
      try {
        await leadsDeleteData({ params: { id: id } })
        alert('Lead deletado com sucesso!')
        getLeads()
      } catch (e) {
        alert(
          'Não foi possível realizar a operação. Entre em contato com o nosso suporte'
        )
      }
    }
  }

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <CardComponent
              className={
                leadsLoading ? 'skeleton-loading skeleton-loading-mh2' : ''
              }
            >
              {!leadsError && !leadsLoading && (
                <>
                  <StyledH2 className="mb-2">Meus leads</StyledH2>
                  {leadsData?.length ? (
                    <CustomTable
                      headers={['Nome', 'Email', 'Telefone', '']}
                      rows={leadsData.map((lead) => [
                        <StyledP key={`name-${lead.id}`}>{lead.name}</StyledP>,
                        <StyledP key={`email-${lead.id}`}>
                          {lead.email}
                        </StyledP>,
                        <StyledP key={`phone-${lead.id}`}>
                          {lead.phone}
                        </StyledP>,
                        <StyledButton
                          key={`btn-${lead.id}`}
                          className="borderless-alert"
                          onClick={() => handleDelete(lead.id)}
                          disabled={leadsDeleteLoading}
                        >
                          Excluir
                        </StyledButton>,
                      ])}
                    />
                  ) : (
                    <StyledSpan>Sem leads cadastrados.</StyledSpan>
                  )}
                </>
              )}
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Cadastrar leads</StyledH2>
              <FormComponent
                inputs={inputs.map((input: InputProps, index: number) => ({
                  ...input,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, e.target.value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled:
                      !formValid || createLeadsLoading || leadsDeleteLoading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Cadastrar lead',
                  },
                ]}
                message={createMessage}
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Leads
