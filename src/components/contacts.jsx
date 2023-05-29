import profile from '../assets/profile.png';

const Contacts = () => {
  return (
    <div className="px-4 mb-3">
      <div>
        <h2 className="text-center font-bold text-xl mb-3">Contacts</h2>
        <ul>
          <li className="bg-white rounded-md shadow-lg px-3 pt-3 pb-2 mb-2 text-red-700">
            <a className="w-full text-center right-0 left-0 inline-block" href="https://mhmmd-azmi.vercel.app/">
              Personal Website
            </a>
          </li>
          <li className="bg-white rounded-md shadow-lg px-3 pt-3 pb-2 mb-2 text-blue-700">
            <a className="w-full text-center right-0 left-0 inline-block" href="https://www.linkedin.com/in/mhmmd-azmi/">
              LinkedIn
            </a>
          </li>
          <li className="bg-white rounded-md shadow-lg px-3 pt-3 pb-2 mb-2 text-gray-700">
            <a className="w-full text-center right-0 left-0 inline-block" href="https://github.com/Azmye">
              Github
            </a>
          </li>
          <li className="bg-white rounded-md shadow-lg px-3 pt-3 pb-2 mb-2 text-green-700">
            <a className="w-full text-center right-0 left-0 inline-block" href="https://wa.me/+6285155363232">
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
