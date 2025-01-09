import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useState } from "react";

const UpdatePost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const post = useLoaderData();
    const { _id, thumbnail, postTitle, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail } = post;

    const handleUpdate = e => {
        e.preventDefault();

        const thumbnail = e.target.thumbnail.value;
        const postTitle = e.target.postTitle.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const volunteersNeeded = e.target.volunteersNeeded.value;
        const deadline = e.target.deadline.value;
        const organizerName = e.target.userName.value;
        const organizerEmail = e.target.email.value;

        const newPost = { thumbnail, postTitle, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail }
        //console.log(newReview)

        // send data to the server and database
        fetch(`https://volunteer-server-phi.vercel.app/volunteers/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount) {
                    //console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        navigate("/manage-my-posts");
                    });
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='pb-10'>
                <div className='lg:w-3/4 mx-auto'>
                    <div className="text-center p-10">
                        <h1 className="text-5xl font-bold">Update Post!</h1>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl border">
                        <form onSubmit={handleUpdate} className="card-body">
                            {/* form first row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Thumbnail</span>
                                    </label>
                                    <input type="text" name='thumbnail' defaultValue={thumbnail} placeholder="thumbnail" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Post Title</span>
                                    </label>
                                    <input type="text" name='postTitle' defaultValue={postTitle} placeholder="Post Title" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* form second row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Post Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        defaultValue={description}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        rows="1"
                                        placeholder="Write your description..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Deadline</span>
                                    </label>
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
                            </div>
                            {/* form third row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Category</span>
                                    </label>
                                    <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Location</span>
                                    </label>
                                    <input type="text" name='location' defaultValue={location} placeholder="Location" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">volunteersNeeded</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="volunteersNeeded"
                                        defaultValue={volunteersNeeded}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                            </div>
                            {/* form fourth row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">User email</span>
                                    </label>
                                    <input type="text" name='email' defaultValue={organizerEmail} className="input input-bordered" disabled />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">User Name</span>
                                    </label>
                                    <input type="text" name='userName' defaultValue={organizerName} placeholder="Photo url" className="input input-bordered" disabled />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn mt-6 w-full bg-purple-600 text-white rounded hover:bg-purple-700">Update Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdatePost;