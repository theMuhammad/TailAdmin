import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-light.svg";

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false); 
    const [showIcons, setShowIcons] = useState(false); 

    const toggleDashboard = () => {
        setIsOpen(!isOpen);
        setShowIcons(!showIcons); 
    };

    const menuItems = [
        { name: "Home", path: "/", icon: "fas fa-home" },
        { name: "Mahsulotlar", path: "/mahsulotlar", icon: "fas fa-box" },
        { name: "Magazine", path: "/magazine", icon: "fas fa-newspaper" },
        { name: "Omborxona", path: "/omborxona", icon: "fas fa-warehouse" },
        { name: "Settings", path: "/settings", icon: "fas fa-cog" },
    ];

    return (
        <div className={`flex ${isOpen ? "" : "flex-row"}`}>
            <div
                className={`bg-gray-800 text-white h-full p-4 
                ${isOpen ? "w-64" : "w-20"} 
                transition-width duration-300`}
            >
                <div className="flex items-center mb-4">
                    <button
                        onClick={toggleDashboard}
                        className="flex items-center p-2 rounded focus:outline-none w-full"
                    >
                        <i className="fas fa-bars text-lg"></i>
                        {isOpen && <span className="ml-4"><img src={logo} alt="Logo" className="h-8" /></span>}
                    </button>
                </div>

                {isOpen && (
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name} className="mb-4">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center p-2 rounded ${isActive ? "bg-[#131334]" : "pl-2"}`
                                    }
                                >
                                    <i className={`${item.icon} text-lg`}></i>
                                    {showIcons && isOpen && <span className="ml-4">{item.name}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="flex-1 bg-gray-100 p-4 lg:p-8">
            </div>
        </div>
    );
}

export default Dashboard;