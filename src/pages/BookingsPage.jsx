import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import HeadFirst from '../components/HeadFirst';

// BookingsPage component
export default function BookingsPage(){
    const [currentTab, setCurrentTab] = useState("Today");
    const tabHeads = ["Today", "Upcoming", "Confirmed", "Past"];
    return (
        <>
            <Dashboard />
            
            <section className="ml-70 p-10 shadow-xl min-h-200">

                <HeadFirst 
                    header={"Bookings"} 
                    paragraph={"see scheduled trips from travelers who's selected to travel with you"}
                />

                {/* tab for various bookings */}

                {/* tab head */}
                <div className="bookingsTabHead">
                    {tabHeads.map((tab, index) => (
                        <span
                            key={index}
                            className={`${currentTab === tab ? 'active' : ''}`}
                            onClick={() => setCurrentTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>

                {/* tab content */}
                <div className="bookingsTabContents">
                    <div className="bookingsTabContent">
                        <div className='text-center border-r border-gray-500'>
                            <span className="font-bold p-2">WED</span>
                            <span className="font-bold text-5xl leading-6">28</span>
                        </div>

                        <div>
                            <span>12:00PM</span>
                            <span>Enugu {"->"} Abuja</span>
                        </div>

                        <div>
                            <span><h3>Passenger List</h3></span>
                            <span> view all</span>
                        </div>

                        <div>
                            <span><h3>Total fare</h3></span>
                            <span>N120,000</span>
                        </div>

                        <div>
                            <span><h3>Payout Estimate</h3></span>
                            <span>N114,000</span>
                        </div>

                        <div>
                            <span>
                                <button className="px-2  text-2xl flex justify-center w-20">
                                ...
                                </button>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};