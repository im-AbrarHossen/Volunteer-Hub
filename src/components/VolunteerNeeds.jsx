import { useState } from "react";
import { useEffect } from "react";
import VolunteerNeedCard from "./VolunteerNeedCard";
import { Link } from "react-router-dom";

const VolunteerNeeds = () => {
    const [volunteers, setVolunteer] = useState([]);
    useEffect(() => {
        fetch('https://volunteer-server-phi.vercel.app/volunteers')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <div className="py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Volunteer Needs Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    volunteers.map(volunteer => <VolunteerNeedCard key={volunteer._id} volunteer={volunteer}></VolunteerNeedCard>)
                }
            </div>
            <div className="flex justify-center items-center py-10">
                <Link to="/posts" className="btn bg-purple-600 text-white hover:bg-purple-700">See all</Link>
            </div>
        </div>
    );
};

export default VolunteerNeeds;