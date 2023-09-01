import { useCallback, useState } from 'react'

type Error = {
  message: string
  field: string
}
export default function useError() {
  const [errors, setErros] = useState<Error[]>([])

  const setError = useCallback(
    ({ field, message }: Error) => {
      const errorAlreadyExists = errors.find((error) => error.field === field)

      if (errorAlreadyExists) {
        return
      }

      setErros((prevState) => [...prevState, { field, message }])
    },
    [errors],
  )

  const removeError = useCallback((fieldName: string) => {
    setErros((prevState) =>
      prevState.filter((error) => error.field !== fieldName),
    )
  }, [])

  const getErrorMessageByFieldName = useCallback(
    (fildName: string) =>
      errors.find((error) => error.field === fildName)?.message,
    [errors],
  )
  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  }
}
