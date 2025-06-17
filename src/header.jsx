import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (window.location.pathname === "/") {
            navigate("/AdminLogin");
        }
    };
    const home = () => {
        if (window.location.pathname != "/") {
            navigate("/");
        }
    };

    return (
        <div className="header">
            <div className="heading">
                Organizerr
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="56px"
                    onClick={home}
                    viewBox="0 -960 960 960"
                    width="56px"
                    fill="#c24413"
                >
                    <path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l395-78v640l-379 76q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-640h80v720H270Zm90-233 200-39v-478l-200 39v478Zm-80 16v-478l-15 3q-11 2-18 9.5t-7 18.5v457q5-2 10.5-3.5T261-293l19-4Zm-40-472v482-482Z" /><title>Organizerr</title>
                </svg>
            </div>
            <svg
                className="profile"
                onClick={handleProfileClick}
                xmlns="http://www.w3.org/2000/svg"
                height="54px"
                viewBox="0 -960 960 960"
                width="54px"
                fill="#c24413"
            >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /><title>Profile Login</title>
            </svg>
        </div>
    );
}

export default Header;
