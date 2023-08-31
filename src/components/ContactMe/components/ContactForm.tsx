/* eslint-disable n/handle-callback-err */
import { ReactNode } from 'react'

interface ContactFormProps {
  children: ReactNode
  error: any
}

export function ContactForm({ error, children }: ContactFormProps) {
  return (
    <>
      <div className="px-4 py-4">{children}</div>
      {error && (
        <small className="px-4  font-lato font-bold text-red-600">
          {error}
        </small>
      )}
    </>
  )
}
