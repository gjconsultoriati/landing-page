import Link from 'next/link'
import { useEffect } from 'react'


export default function App() {
  const instagram = 'https://www.instagram.com/gj_consultoriati/'
  useEffect(() => {
    const url = "https://wa.me/5527995088009?text=G.J+Consultoria+e+desenvolvimento+de+Software+agradece+seu+contato.+Como+podemos+ajuda-lo%3F"
    
    alert('Site em construção, visite:'); 
    window.location.href = url

  },[])
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Link 
        href={instagram}
        style={{fontSize: 26, textDecoration: 'none', color: '#1A0046', fontFamily: 'Exo 2'}}
        >G.J Consultoria e Desenvolvimento De Software</Link>
    </div>
  )
}