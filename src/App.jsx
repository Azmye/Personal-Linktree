import { useHref, useNavigate } from 'react-router-dom';
import Contacts from './components/contacts';
import Footer from './components/footer';
import Topbar from './components/topbar';
import { createElement } from 'react';
import Links from './components/links';

const App = () => {
  const handleOnClick = () => {
    window.location.href = 'https://github.com/Azmye?tab=repositories';
  };
  return (
    <>
      <Topbar />
      <div className="lg:w-1/2 mx-auto pb-20">
        <Contacts />
        <section>
          <h3 className="px-4 text-lg text-center font-bold mb-3 text-black/60 uppercase">Portfolio Links</h3>
          <Links className={`mb-3`} dropdown={true} title={'Dumbflix'} deploy={'https://dw-front-end.vercel.app/'} backend={'https://github.com/Azmye/dw-backend'} frontend={'https://github.com/Azmye/DW-FrontEnd'} />
          <Links className={`mb-3`} title={'Waysfood'} deploy={'https://waysfood-front-end-git-main-azmye.vercel.app/'} backend={'https://github.com/Azmye/dw-backend'} frontend={'https://github.com/Azmye/Waysfood-FrontEnd'} />
          <Links className={`mb-3`} title={'Playwatch'} deploy={'https://playwatch-lime.vercel.app/'} frontend={'https://github.com/Azmye/playwatch'} />
        </section>
        <section className="px-4">
          <button onClick={handleOnClick} className="bg-white w-full rounded-md shadow-lg px-3 pt-3 pb-2 hover:text-sky-500">
            More on Github...
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
