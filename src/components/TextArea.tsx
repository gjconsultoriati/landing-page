/* eslint-disable n/handle-callback-err */
import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error: string | undefined
}

export function InputArea({ error, label, ...props }: TextAreaProps) {
  return (
    <div>
      <h1 className="mb-[10px] font-exo2 font-bold text-gray-900">{label}</h1>
      <textarea
        className={`h-[150px] w-full resize-none rounded-lg bg-[#3E3E3E] px-4 py-4 font-lato font-bold text-gray-900 placeholder-gray-400 outline-none ${
          error ? 'focus:outline-red-600' : 'focus:outline-green-700'
        } `}
        placeholder="Sua mensagem aqui..."
        {...props}
      />
    </div>
  )
}
