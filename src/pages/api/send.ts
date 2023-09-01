/* eslint-disable import/no-anonymous-default-export */
import TemplateEmail, {
  SendEmailProps,
} from '@/components/ContactMe/components/TemplateEmail '
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { email, subject, name, phone, message } =
    request.body as SendEmailProps
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gjconsultoriati@gmail.com',
      reply_to: email,
      subject,
      react: TemplateEmail({
        email,
        subject,
        name,
        message,
        phone,
      }),
    })

    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}
