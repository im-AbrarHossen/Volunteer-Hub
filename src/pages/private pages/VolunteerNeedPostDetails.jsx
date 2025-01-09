import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { AuthContext } from "../../provider/AuthProvider";
import VolunteerModal from "../../components/VolunteerModal";

const VolunteerNeedPostDetails = () => {
    const { id } = useParams(); // Get the id from the URL
    const [volunteer, setVolunteer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://volunteer-server-phi.vercel.app/volunteers/${id}`)
            .then((res) => res.json())
            .then((data) => setVolunteer(data))
            .catch((error) => console.error("Error fetching volunteer post details:", error));
    }, [id]);

    if (!volunteer) {
        return <p>Loading...</p>;
    }

    return (
        <div className="">
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto py-10">
                <div className="bg-white border shadow-md rounded p-4 lg:w-[60%] mx-auto">
                    <img className="lg:h-[300px] h-[200px] w-full object-cover rounded" src={volunteer.thumbnail} alt="Thumbnail" />
                    <h3 className="mt-4 text-lg font-bold">Post Title: {volunteer.postTitle}</h3>
                    <p className="text-gray-600 font-bold">Category: {volunteer.category}</p>
                    <p className="text-gray-500 text-sm font-bold">Deadline: {volunteer.deadline}</p>
                    <p className="text-gray-500 text-sm font-bold">Description: {volunteer.description}</p>
                    <p className="text-gray-500 text-sm font-bold">Location: {volunteer.location}</p>
                    <p className="text-gray-500 text-sm font-bold">Volunteers Needed: {volunteer.volunteersNeeded}</p>
                    <p className="text-gray-500 text-sm font-bold">Organizer Name: {volunteer.organizerName}</p>
                    <p className="text-gray-500 text-sm font-bold">OrganizerEmail: {volunteer.organizerEmail}</p>
                    <button onClick={() => setIsModalOpen(true)} className="btn mt-4 w-full bg-purple-600 text-white rounded hover:bg-purple-700">Be a Volunteer</button>
                </div>
                <VolunteerModal
                    volunteer={volunteer}
                    loggedInUser={user}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default VolunteerNeedPostDetails;