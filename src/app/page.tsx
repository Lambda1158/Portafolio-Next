import Header from './components/header';
import Navbar from './components/navbar';
import Experience from './components/experience';


export default function Home() {
  return (
    <>
      <Navbar />
     
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header />
        <Experience />
        <h1 className="text-2xl">Esto es un texto de prueba</h1>
      </main>
      <footer className=" flex justify-center">
        <p>Gracias por scrollear hasta el final 💖</p>
      </footer>
    </>
  );
}
