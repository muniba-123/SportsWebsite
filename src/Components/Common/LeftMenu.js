import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftMenu = (props) => {
    const { menuOptions, showLeftMenu, toggleMenu, active, setActive } = props;
    const navigate = useNavigate();
    return (
        <>
            <div className={`menu-wrapper ${showLeftMenu ? 'show' : 'not-show'}`}>
                <div className="cross-icon" onClick={() => toggleMenu(false)}>X</div>
                <ul className="menu-list">
                    {
                        menuOptions?.map((item, i) => <li className={`menu-item ${i === active ? "active" : ""}`} key={i}
                            onClick={() => { setActive(i); toggleMenu(false); navigate(item.path) }}>
                            {item.text}
                        </li>
                        )
                    }
                </ul>
            </div>
            {/* <div className={`overlay ${showLeftMenu && 'd-block'}`} onClick={() => toggleMenu(false)} ></div > */}
        </>
    );
};

export default LeftMenu;