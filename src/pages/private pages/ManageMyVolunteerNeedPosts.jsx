import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageMyVolunteerNeedPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    useEffect(() => {
        if (userEmail) {
            fetch('https://volunteer-server-phi.vercel.app/volunteers')
                .then((res) => res.json())
                .then(data => {
                    const filteredData = data.filter(
                        (post) =>
                            post.organizerEmail?.trim().toLowerCase() === userEmail.trim().toLowerCase()
                    );
                    setMyPosts(filteredData);
                })
                .catch(error => console.error('Error:', error));
        }
    }, [userEmail]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-server-phi.vercel.app/volunteers/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            toast.success("Post deleted successfully!");
                            setMyPosts(myPosts.filter((myPost) => myPost._id !== id));
                        }
                    });
            }
        })
    };


    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-10'>
                <div className="w-11/12 mx-auto my-10 overflow-x-auto">
                    <h1 className="text-3xl font-bold my-10 text-center">My Volunteer Need Posts</h1>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Post Title</th>
                                <th className="border border-gray-300 px-4 py-2">Description</th>
                                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPosts.map((myPost) => (
                                <tr key={myPost._id}>
                                    <td className="border border-gray-300 px-4 py-2">{myPost.postTitle}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        <img className='w-full' src={myPost.thumbnail} alt="" />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{myPost.deadline}</td>
                                    <td className="px-4 py-2 flex lg:flex-row flex-col gap-3 items-center justify-center">
                                        <Link to={`/update-post/${myPost._id}`} className="btn bg-purple-600 text-white rounded hover:bg-purple-700">Update</Link>
                                        <button
                                            onClick={() => handleDelete(myPost._id)}
                                            className="btn bg-purple-600 text-white rounded hover:bg-purple-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ManageMyVolunteerNeedPosts;