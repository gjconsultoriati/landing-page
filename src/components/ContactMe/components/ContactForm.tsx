import { ReactNode } from 'react'

interface ContactFormProps {
  children: ReactNode
}

export function ContactForm({ children }: ContactFormProps) {
  return <form className="px-4 py-4">{children}</form>
}
