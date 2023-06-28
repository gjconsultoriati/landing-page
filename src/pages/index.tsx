import { Company } from '@/components/Company '
import { Header } from '@/components/Header/ '
// import { TypeWrite } from '../components/TypeWriter'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        {/* component de section aqui */}
        <div>
          <Company />
        </div>

        {/* component de Serviço aqui */}
      </main>
    </div>
  )
}
