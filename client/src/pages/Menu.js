import { Link } from "react-router-dom";
import * as API from "../api";
export default function Menu() {
    const getAction = async () => {
        try {
            const res = await API.get("user/login");
            alert("hello");
        } catch (error) {}
    };
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link onClick={getAction} to="/about">
                    About
                </Link>
            </nav>
        </div>
    );
}
