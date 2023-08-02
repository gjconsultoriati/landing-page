import Typewriter from 'typewriter-effect'

type WriteProps = {
  strings: string[]
  autoStart?: boolean
  loop?: boolean
  wrapperClassName: string
}
export function TypeWrite({
  strings,
  autoStart,
  loop,
  wrapperClassName,
}: WriteProps) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart,
        loop,
        wrapperClassName,
      }}
    />
  )
}
