type InputProps = {
  label: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <h1 className="mb-[10px] font-exo2 font-bold text-gray-900">{label}</h1>
      <input
        type="text"
        className="h-10 w-full rounded-lg bg-[#3E3E3E] px-3 font-lato font-bold text-gray-900 outline-none focus:outline-green-700"
        {...props}
      />
    </div>
  )
}
