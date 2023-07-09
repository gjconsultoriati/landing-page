export function LineUpServicesCards() {
  return (
    <div className="mt-[30px] px-5">
      <div className="h-[350px] w-[250px] rounded-md bg-black-50 shadow-lg ">
        <div className="flex h-[180px] flex-col items-center justify-center object-contain">
          <img
            src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
            alt=""
            className="rounded-t-md"
          />
        </div>
        <div className="max-w-full px-2 py-5">
          <h1 className="font-exo2 text-sm font-bold text-white">Concepção</h1>
          <p className="mt-5 font-lato text-sm font-medium text-white">
            Nesta etapa elaboramos uma lista inicial com os requisitos do
            sistema.
          </p>
        </div>
      </div>
    </div>
  )
}
