import { ReactNode } from 'react'

interface ContactFormProps {
  children: ReactNode
}

export function ContactForm({ children }: ContactFormProps) {
  return <div className="px-4 py-4">{children}</div>
}
