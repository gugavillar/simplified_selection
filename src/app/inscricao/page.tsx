import { WrapperPage } from '@/components'
import { sortSelectOptions } from '@/helpers'
import { PageContent } from '@/modules/Registrations/content'
import { getBrazilUf } from '@/services'

const getStates = async () => {
  try {
    const response = await getBrazilUf()
    const formattedResponse = response
      .map((uf) => ({
        label: `${uf.sigla} - ${uf.nome}`,
        value: uf.sigla,
      }))
      .sort(sortSelectOptions)
    return formattedResponse
  } catch {
    return { message: 'Falha ao carregar os estados' }
  }
}

export default async function Subscription() {
  const states = await getStates()
  return (
    <WrapperPage title="Formulário de inscrição">
      <PageContent states={states} />
    </WrapperPage>
  )
}
