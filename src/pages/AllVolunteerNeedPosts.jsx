import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import VolunteerNeedCard from '../components/VolunteerNeedCard';
import Footer from "../components/Footer"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSearch } from 'react-icons/fi';

const AllVolunteerNeedPosts = () => {
    const [volunteers, setVolunteer] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);

    useEffect(() => {
        fetch('https://volunteer-server-phi.vercel.app/volunteers')
            .then(res => res.json())
            .then(data => {
                setVolunteer(data);
                setFilteredVolunteers(data);
            })
    }, []);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = volunteers.filter(volunteer =>
            volunteer.postTitle.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            toast.error("No matching posts found!", {
                position: 'top-center',
            });
        }

        setFilteredVolunteers(filtered);
    };

    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-10'>
                <h1 className='text-3xl text-center font-bold my-10'>All Volunteer Need Posts</h1>
                <div className="flex justify-center items-center mb-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by Post Title..."
                        className="border text-black border-gray-300 rounded-l-lg px-4 py-2 w-full max-w-md"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white px-4 py-[10.5px] rounded-r-lg hover:bg-blue-600 flex items-center"
                    >
                        <FiSearch className="text-xl" />
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        filteredVolunteers.map(volunteer => (
                            <VolunteerNeedCard key={volunteer._id} volunteer={volunteer}></VolunteerNeedCard>
                        ))
                    }
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

            <ToastContainer />
        </div>
    );
};

export default AllVolunteerNeedPosts;