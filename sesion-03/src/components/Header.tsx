import BuscarPlato from './BuscarPlato'

interface HeaderProps {
  onSearch: (term: string) => void
}

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Menu Platos 
          <span className="text-orange-600">PREMIUM</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">Explora nuestra carta de platos internacionales. Usando:
          <code className="text-orange-300 px-2 py-1 rounded bg-orange-50 ml-2">React 19</code>
        </p>
        <BuscarPlato onSearch={onSearch} />
      </header>
  )
}

export default Header