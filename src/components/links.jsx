import { useEffect, useState } from 'react';
import { FaArrowCircleDown, FaGithub, FaLink } from 'react-icons/fa';
import { IoMdArrowDropdownCircle, IoMdArrowDroprightCircle } from 'react-icons/io';

const Links = (props) => {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    setDropdown(props.dropdown);
  }, []);

  return (
    <div className={`px-4 w-full ${props.className}`}>
      <div className="bg-white rounded-md shadow-lg px-3 pt-3 pb-2">
        <div className={`flex items-center justify-between ${dropdown ? 'mb-3' : ''}`}>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <button className="transition-all duration-300 ease-in-out" onClick={() => setDropdown(!dropdown)}>
            {dropdown ? <IoMdArrowDropdownCircle className="text-sky-500" size={32} /> : <IoMdArrowDroprightCircle className="text-black/80" size={32} />}
          </button>
        </div>
        <ul className={`duration-150 transition-all ease-linear ${dropdown ? '' : 'hidden'}`}>
          {props.deploy ? (
            <li>
              <button onClick={() => (window.location.href = `${props.deploy}`)} className="w-full bg-sky-500 text-center py-2 mb-3 rounded-md text-white font-bold text-lg flex items-center justify-center mx-auto">
                <FaLink className="mr-2" /> <span name="deploy">Deployment</span>
              </button>
            </li>
          ) : null}
          {props.backend ? (
            <li>
              <button onClick={() => (window.location.href = `${props.backend}`)} className="w-full bg-gray-500 text-center py-2 mb-3 rounded-md text-white font-bold text-lg flex items-center justify-center mx-auto">
                <FaGithub className="mr-2" /> <span name="backend">Backend</span>
              </button>
            </li>
          ) : null}
          {props.frontend ? (
            <li>
              <button onClick={() => (window.location.href = `${props.frontend}`)} className="w-full bg-gray-500 text-center py-2 mb-3 rounded-md text-white font-bold text-lg flex items-center justify-center mx-auto">
                <FaGithub className="mr-2" /> <span name="frontend">Frontend</span>
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Links;
