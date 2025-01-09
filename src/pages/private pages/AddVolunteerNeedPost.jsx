import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddVolunteerNeedPost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const thumbnail = form.thumbnail.value;
        const postTitle = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteersNeeded = form.volunteersNeeded.value;
        const deadline = form.deadline.value;
        const organizerName = form.organizerName.value;
        const organizerEmail = form.organizerEmail.value;

        const newReview = { thumbnail, postTitle, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail };

        fetch('https://volunteer-server-phi.vercel.app/volunteers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        navigate("/");
                    })
                }
            })
    }
    return (
        <div>
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto py-10">
                <form onSubmit={handleSubmit} className="flex bg-white text-black flex-col gap-6 lg:w-[50%] mx-auto shadow-2xl border p-6 rounded">
                    <div>
                        <label className="block font-medium">Add a thumbnail URL</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="text"
                            name="thumbnail"
                            placeholder="Thumbnail URL"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Add a Post Title</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="text"
                            name="title"
                            placeholder="Post Title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Add a description</label>
                        <textarea
                            required
                            name="description"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="5"
                            placeholder="Write your review..."
                        ></textarea>
                    </div>
                    <div>
                        <label className="block font-medium">Add a Category</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="text"
                            name="category"
                            placeholder="Category"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Add a Location</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="text"
                            name="location"
                            placeholder="Location"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Add the number of Volunteers Needed</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="number"
                            name="volunteersNeeded"
                            placeholder="Number of Volunteers Needed"
                            required
                        />
                    </div>
                    <div className="">
                        <label className="block font-medium">Add a Deadline</label>
                        <div className="w-full border border-gray-300 rounded px-3 py-2">
                            <DatePicker
                                required
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                name="deadline"
                                className="date-picker"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium">Organizer Name</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="text"
                            name="organizerName"
                            value={user?.displayName}
                            required
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Organizer Email</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            type="email"
                            name="organizerEmail"
                            value={user?.email}
                            required
                            readOnly
                        />
                    </div>
                    <button className="btn mt-6 w-full bg-purple-600 text-white rounded hover:bg-purple-700" type="submit">Add Post</button>
                </form>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddVolunteerNeedPost;