import { useState } from "react";
import Dashboard from "../components/Dashboard";
import HeadFirst from "../components/HeadFirst";
import longBus from "../assets/long_bus.png";
import shortBus from "../assets/short_bus.png";

export default function VehiclesPage(){
    const [vehicle,setVehicle] = useState({type:null,capacity:null,features:null});
    const [vehList,setVehList] = useState([]);

    let vehImg = {long_bus:longBus,short_bus:shortBus};

    const submitVehicle = (e) => {
        e.preventDefault();
        console.log(vehicle);
        setVehList([...vehList,vehicle]);
    }
    
    return (
        <>
            <Dashboard/>
            <section className="ml-70 p-10 shadow-xl min-h-200">
                <HeadFirst 
                    header={"Vehicles"} 
                    paragraph={"set a list of vehicles your company owns for travel"}
                />

                <div>
                    <form className="vehicleForm" onSubmit={(data)=>submitVehicle(data)}>
                        <div>
                        <p>
                            <label htmlFor="type">Vehicle Type</label>
                            <select name="type" onChange={(e)=>setVehicle({...vehicle,type:e.target.value})} required className="focus:outline-none" >
                                <option value="">Select Type</option>
                                <option value="short bus">short bus</option>
                                <option value="long bus">long bus</option>
                            </select>
                        </p>
                        <p>
                            <label htmlFor="capacity">Vehicle Capacity</label>
                            <input 
                                type="number" 
                                onChange={(e)=>setVehicle({...vehicle,capacity:e.target.value})} 
                                name="capacity" 
                                placeholder="Enter capacity" 
                                className="focus:outline-none" 
                                required
                            />
                        </p>

                        <p>
                            <label htmlFor="features">Vehicle Features</label>
                            <select name="features" required onChange={(e)=>setVehicle({...vehicle,features:e.target.value})} className="focus:outline-none" >
                                <option value="">Select Features</option>
                                <option value="Tv, Charging Port, AC">Tv, Charging Port, AC</option>
                                <option value="TV, Charging Port, AC">TV, Charging Port, AC</option>
                            </select>
                        </p>
                        </div>

                        <p>
                            <button className="p-2">List Vehicle {"-->"}</button>
                        </p>
                    </form>

                    <div className="my-5 flex flex-col gap-5">
                        {vehList.map((vehicle,index) => 
                        // 
                        <div className="vehicleContent" key={index}>
                            <div>
                                <img src={vehImg[vehicle.type.replace(/ /g,"_")]} alt={vehicle.type} width={100} />
                            </div>

                            <div>
                                <span><h3>Vehicle Type</h3></span>
                                <span>{vehicle.type}</span>
                            </div>

                            <div>
                                <span><h3>Capacity</h3></span>
                                <span>{vehicle.capacity} travelers</span>
                            </div>

                            <div>
                                <span><h3>Vehicle Features</h3></span>
                                <span>{vehicle.features}</span>
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