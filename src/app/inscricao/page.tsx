import { WrapperPage } from '@/components/WrapperPage'
import { AddressDataFields } from '@/modules/Registrations/components/Form/AddressDataFields'
import { Container } from '@/modules/Registrations/components/Form/ContainerForm'
import { PersonDataFields } from '@/modules/Registrations/components/Form/PersonDataFields'

const Subscription = () => {
  return (
    <WrapperPage title="Formulário de inscrição">
      <Container>
        <PersonDataFields />
        <AddressDataFields />
      </Container>
    </WrapperPage>
  )
}

export default Subscription
