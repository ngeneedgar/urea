import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { Urea } from './pages/products/Urea';
import { AmmoniumSulfate } from './pages/products/AmmoniumSulfate';
import { DAP } from './pages/products/DAP';
import { NPK } from './pages/products/NPK';
import { MAP } from './pages/products/MAP';
import { CAN } from './pages/products/CAN';
import { AmmoniumNitrate } from './pages/products/AmmoniumNitrate';
import { Potash } from './pages/products/Potash';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { ThankYou } from './pages/ThankYou';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="products/urea" element={<Urea />} />
          <Route path="products/ammonium-sulfate" element={<AmmoniumSulfate />} />
          <Route path="products/dap" element={<DAP />} />
          <Route path="products/npk" element={<NPK />} />
          <Route path="products/map" element={<MAP />} />
          <Route path="products/can" element={<CAN />} />
          <Route path="products/ammonium-nitrate" element={<AmmoniumNitrate />} />
          <Route path="products/potash" element={<Potash />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </Router>
  );
}
