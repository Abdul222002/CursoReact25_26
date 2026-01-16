import { Suspense, useState } from "react";
import PlatosList from "./components/PlatosList";
import Header from "./components/Header";
import LoadingFallback from "./components/LoadingFallback";
import { fecthPlatos } from "./utils/api";

const App = () => {
  //hooks
  const [platosPromise] = useState(()=>fecthPlatos())
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <Header onSearch={setSearchTerm}/>
      <main className="container mx-auto px-4">
        <Suspense fallback={<LoadingFallback message="Cocinando platos para ti...🍽️"/>}>
          <PlatosList platosPromise={platosPromise} searchTerm={searchTerm}/>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
