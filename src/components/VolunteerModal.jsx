import React, { useState } from "react";

const VolunteerModal = ({ isOpen, onClose, volunteer, loggedInUser }) => {
    const [suggestion, setSuggestion] = useState("");

    const handleSubmit = () => {
        const requestBody = {
            postId: volunteer._id,
            volunteerName: loggedInUser.displayName,
            volunteerEmail: loggedInUser.email,
            suggestion,
        };

        fetch("https://volunteer-server-phi.vercel.app/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })
            .then((res) => res.json())
            .then(() => {
                alert("Request submitted successfully!");
                onClose();
            })
            .catch((error) => console.error("Error submitting request:", error));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                <h2 className="text-lg font-bold mb-4">Volunteer Request</h2>
                <div className="mb-4">
                    <p><strong>Thumbnail:</strong> <img src={volunteer.thumbnail} alt="Thumbnail" className="h-20" /></p>
                    <p><strong>Post Title:</strong> {volunteer.postTitle}</p>
                    <p><strong>Description:</strong> {volunteer.description}</p>
                    <p><strong>Category:</strong> {volunteer.category}</p>
                    <p><strong>Location:</strong> {volunteer.location}</p>
                    <p><strong>Volunteers Needed:</strong> {volunteer.volunteersNeeded}</p>
                    <p><strong>Deadline:</strong> {volunteer.deadline}</p>
                    <p><strong>Organizer Name:</strong> {volunteer.organizerName}</p>
                    <p><strong>Organizer Email:</strong> {volunteer.organizerEmail}</p>
                    <p><strong>Your Name:</strong> {loggedInUser.displayName}</p>
                    <p><strong>Your Email:</strong> {loggedInUser.email}</p>
                </div>
                <textarea
                    className="w-full border p-2 rounded"
                    placeholder="Your suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                />
                <button onClick={handleSubmit} className="btn bg-blue-500 text-white mt-4">Request</button>
                <button onClick={onClose} className="btn bg-gray-500 text-white mt-4 ml-2">Close</button>
            </div>
        </div>
    );
};

export default VolunteerModal;
