import { useLocation } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import PageTransition from './PageTransition';

export default function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
      <CustomCursor />
      <Nav />
      <main className="flex-1">
        <PageTransition />
      </main>
      <Footer />
    </div>
  );
}
