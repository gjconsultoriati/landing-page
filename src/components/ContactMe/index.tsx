import { Input } from '../Input'
import { ContactForm } from './components/ContactForm'

export function ContactMe() {
  return (
    <>
      <ContactForm>
        <Input label="Nome" />
      </ContactForm>
      <ContactForm>
        <Input label="Email" />
      </ContactForm>
      <ContactForm>
        <Input label="Assunto" />
      </ContactForm>
      <ContactForm>
        <Input label="Mensagem" />
      </ContactForm>
    </>
  )
}
