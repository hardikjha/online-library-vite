import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails'; 
import NotFound from './pages/NotFound'; 
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Browse />} />
          <Route path="/browse/:category" element={<Browse />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
