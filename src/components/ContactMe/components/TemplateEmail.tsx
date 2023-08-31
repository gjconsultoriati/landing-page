export type SendEmailProps = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}
export default function TemplateEmail({
  name,
  email,
  phone,
  subject,
  message,
}: SendEmailProps) {
  const data = [{ name, email, phone, subject, message }]
  return (
    <div>
      {data.map((bodyEmail) => (
        <>
          <span>
            Nome: <strong>{bodyEmail.name}</strong>
          </span>
          <br />
          <span>
            Email: <strong>{bodyEmail.email}</strong>
          </span>
          <br />

          <span>
            Telefone: <strong>{bodyEmail.phone}</strong>
          </span>
          <br />

          <span>
            Assunto: <strong>{bodyEmail.subject}</strong>
          </span>
          <br />

          <span>
            Mensagem: <strong>{bodyEmail.message}</strong>
          </span>
        </>
      ))}
    </div>
  )
}
