import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';  

export const MainLayout = ({ children }) => {
    return (
      <div className="d-flex flex-column full-height">  {/* Aseguramos que ocupe toda la pantalla */}
      <div className="d-flex flex-grow-1">  {/* Sidebar y contenido */}
        <Sidebar />
        <div className="d-flex flex-column flex-grow-1 ">
          <Navbar />
          <main className="container-fluid mt-3 flex-grow-1">
            {children}
          </main>
        </div>
      </div>
      <Footer />  {/* El Footer debe ir fuera del main */}
    </div>
    );
  };
  