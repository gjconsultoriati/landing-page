import { Input } from '../Input'
import { InputArea } from '../TextArea'
import { ContactForm } from './components/ContactForm'
import { Spinner } from './components/Spinner'
import { useContactMe } from './useContactMe'
export function ContactMe() {
  const {
    name,
    email,
    phone,
    subject,
    message,
    handleChangeName,
    handleEmailChange,
    handlePhoneChange,
    handleChangeMessage,
    handleChangeSubject,
    handleSubmit,
    isFormValid,
    isSubmiting,
    getErrorMessageByFieldName,
  } = useContactMe()

  return (
    <form onSubmit={handleSubmit}>
      <ContactForm error={getErrorMessageByFieldName('name')}>
        <Input
          label="Nome"
          value={name}
          onChange={handleChangeName}
          error={getErrorMessageByFieldName('name')}
        />
      </ContactForm>
      <ContactForm error={getErrorMessageByFieldName('email')}>
        <Input
          label="Email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </ContactForm>
      <ContactForm error={getErrorMessageByFieldName('phone')}>
        <Input
          label="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          error={getErrorMessageByFieldName('phone')}
        />
      </ContactForm>
      <ContactForm error={getErrorMessageByFieldName('subject')}>
        <Input
          label="Assunto"
          value={subject}
          onChange={handleChangeSubject}
          error={getErrorMessageByFieldName('subject')}
        />
      </ContactForm>
      <ContactForm error={getErrorMessageByFieldName('message')}>
        <InputArea
          label="Mensagem"
          value={message}
          onChange={handleChangeMessage}
          error={getErrorMessageByFieldName('message')}
        />
      </ContactForm>
      <div className="flex items-center justify-center py-14">
        <button
          className="rounded-lg border px-24 py-2 transition-all ease-in hover:border-green-900 disabled:cursor-not-allowed disabled:hover:border-gray-600"
          disabled={isFormValid}
          type="submit"
        >
          <h1 className="font-exo2 font-bold text-green-900">
            {isSubmiting ? <Spinner /> : 'ENVIAR'}
          </h1>
        </button>
      </div>
    </form>
  )
}
