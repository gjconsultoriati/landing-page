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
        <div className="flex items-center justify-center py-14">
          <button className="rounded-lg border px-24 py-2 transition-all ease-in hover:border-green-900">
            <h1 className="font-exo2 font-bold text-green-900">ENVIAR</h1>
          </button>
        </div>
      </ContactForm>
    </>
  )
}
