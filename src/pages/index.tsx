import { Company } from '@/components/Company '
import { Header } from '@/components/Header/ '
import { Services } from '@/components/Services '
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
        <div>
          {/* component de Serviço aqui */}
          <Services />
        </div>
      </main>
    </div>
  )
}
