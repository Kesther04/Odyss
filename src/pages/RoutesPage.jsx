import { useState } from "react";
import Dashboard from "../components/Dashboard";
import HeadFirst from "../components/HeadFirst";

export default function RoutesPage(){
    const [route,setRoute] = useState({origin:null,destination:null,dep_time:null,price:null,terminal:null,vehicles:null});
    const [routeList,setRouteList] = useState([]);


    const submitRoute = (e) => {
        e.preventDefault();
        console.log(route);
        setRouteList([...routeList,route]);
    }

    return (
        <>
            <Dashboard />
            <section className="ml-70 p-10 shadow-xl min-h-200">
                <HeadFirst
                    header={"Routes"} 
                    paragraph={"set a list of routes that your travelers can book with your company and their corresponding prices per seat"}
                />

                <div>
                    <form className="routeForm" onSubmit={(data)=>submitRoute(data)}>
                        <div>
                        <p>
                            <label htmlFor="origin">Origin</label>
                            <select name="origin" onChange={(e)=>setRoute({...route,origin:e.target.value})} required className="focus:outline-none" >
                                <option value="">Select Origin</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Enugu">Enugu</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="destination">Destination</label>
                            <select name="destination" onChange={(e)=>setRoute({...route,destination:e.target.value})} required className="focus:outline-none" >
                                <option value="">Select Destination</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Enugu">Enugu</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="dep_time">Depature Time</label>
                            <select name="dep_time" onChange={(e)=>setRoute({...route,dep_time:e.target.value})} required className="focus:outline-none" >
                                <option value="">Select Depature Time</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </p>


                        <p>
                            <label htmlFor="price">Price (per seat)</label>
                            <input 
                                type="number" 
                                onChange={(e)=>setRoute({...route,price:e.target.value})} 
                                name="price" 
                                placeholder="Enter Price" 
                                className="focus:outline-none" 
                                required
                            />
                        </p>

                        <p>
                            <label htmlFor="terminal">Terminal</label>
                            <select name="terminal" onChange={(e)=>setRoute({...route,terminal:e.target.value})} required className="focus:outline-none" >
                                <option value="">Select Terminals</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="vehicles">Vehicles</label>
                            <select name="vehicles" required onChange={(e)=>setRoute({...route,vehicles:e.target.value})} className="focus:outline-none" >
                                <option value="">Select Vehicles</option>
                                <option value="Short Bus, Long Bus">Short Bus, Long Bus</option>
                                <option value="Short Bus, Long Bus">Short Bus, Long Bus</option>
                            </select>
                        </p>

                        </div>

                        <p>
                            <button className="p-2">Add route {"-->"}</button>
                        </p>
                    </form>

                    <div className="my-5 flex flex-col gap-5">
                        {routeList.map((route,index) => 
                        // 
                        <div className="routeContent" key={index}>
                            <div className="border-r border-gray-500">
                                <span className="font-bold text-2xl">{route.origin}</span>

                                <span className="font-bold text-2xl">{route.destination}</span>
                            </div>

                            <div>
                                <span><h3>Depature Times</h3></span>
                                <span>{route.dep_time}</span>
                            </div>

                            <div>
                                <span><h3>Vehicles</h3></span>
                                <span>{route.vehicles}</span>
                            </div>

                            <div>
                                <span><h3>Terminals</h3></span>
                                <span>{route.terminal}</span>
                            </div>

                            <div>
                                <span><h3>Total Fare</h3></span>
                                <span>{`N${route.price}`}</span>
                            </div>
                            

                            <div>
                                <span><h3>Payout Estimate</h3></span>
                                <span>{`N${route.price - 1000}`}</span>
                            </div>

                            <div>
                                <span>
                                    <button className="w-20 p-2 text-2xl">...</button>
                                </span>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}