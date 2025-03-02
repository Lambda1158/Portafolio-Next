import Header from './components/header';
import Navbar from './components/navbar';
import Experience from './components/experience';
import Footer from './components/footer';
import Project from './components/project';
import Contact from './components/contact';
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
