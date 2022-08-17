import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { sidebarLinks } from '../../data/data';
import './sidebar.scss';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="link">
          <span className="logo">BagSTore</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {sidebarLinks.map((link) => (
            <>
              {/* <p className="title">{link.title}</p> */}
              <Link to={link.path} className="link">
                <li key={link}>
                  <span className="icon">{link.icon}</span>
                  <span className="link-title">{link.linkTitle}</span>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color-option"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;
