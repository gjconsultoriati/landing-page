import Typewriter from 'typewriter-effect'

type WriteProps = {
  strings: string[]
  autoStart?: boolean
  loop?: boolean
}
export function TypeWrite({ strings, autoStart, loop, ...rest }: WriteProps) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart,
        loop,
      }}
      {...rest}
    />
  )
}
