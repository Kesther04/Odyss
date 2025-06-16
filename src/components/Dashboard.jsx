import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import booking from "../assets/booking.svg";   
import vehicle from "../assets/vehicle.svg";
import route from "../assets/route.svg";

// Dashboard component
export default function Dashboard() {
    
    // Get the current path to determine which link should be active
    const location = useLocation();
    const pathParts = location.pathname.split("/");
    const fileName = pathParts[pathParts.length - 1];

    return (
        <section className="dashboard">
            <ul>
                <li>
                    <Link to={"/dashboard/bookings"} className={fileName == "bookings" ? "active" : ""}  >
                        <img src={booking} alt="booking" width={20}/>Bookings
                    </Link>
                </li>
                
                <li>
                    <Link to={"/dashboard/vehicles"} className={fileName == "vehicles" ? "active" : ""} >
                        <img src={vehicle} alt="vehicle" width={20} />Vehicles
                    </Link>
                </li>

                <li>
                    <Link to={"/dashboard/routes"} className={fileName == "routes" ? "active" : ""} >
                        <img src={route} alt="route" width={20} />Routes
                    </Link>
                </li>
            </ul>         

            <img src={logo} alt="logo" width={80}/>   
        </section>
    );
}

