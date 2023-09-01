import useError from '@/hooks/useErrors '
import formatPhone from '@/utils/formatPhone '
import isEmailValid from '@/utils/isEmailValid '
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
export function useContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { getErrorMessageByFieldName, removeError, setError } = useError()
  const isFormValid = !(name && email && phone && subject && message)

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value))

    if (!event.target.value) {
      setError({ field: 'phone', message: 'Telefone inválido' })
    } else {
      removeError('phone')
    }
  }

  function handleChangeMessage(event: ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value)

    if (!event.target.value) {
      setError({
        field: 'message',
        message: 'Por favor, escreva uma mensagem',
      })
    } else {
      removeError('message')
    }
  }
  function handleChangeSubject(event: ChangeEvent<HTMLInputElement>) {
    setSubject(event.target.value)

    if (!event.target.value) {
      setError({
        field: 'subject',
        message: 'Por favor, insira um assunto',
      })
    } else {
      removeError('subject')
    }
  }
  async function handleSubmit() {
    event?.preventDefault()
    try {
      setIsSubmiting(true)
      const body = {
        name,
        email,
        phone,
        subject,
        message,
      }
      await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_SITE}`,
        },
        body: JSON.stringify(body),
      })
      toast.success('Email enviado com sucesso! 🚀')
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
    } catch {
      toast.error('Desculpe, tente novamente em instantes.')
    } finally {
      setIsSubmiting(false)
    }
  }

  return {
    name,
    email,
    phone,
    subject,
    message,
    isFormValid,
    isSubmiting,
    handleChangeName,
    handleEmailChange,
    handlePhoneChange,
    handleChangeMessage,
    handleChangeSubject,
    handleSubmit,
    getErrorMessageByFieldName,
  }
}
