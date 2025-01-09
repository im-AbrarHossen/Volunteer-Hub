import { Link } from "react-router-dom";

const VolunteerNeedCard = ({ volunteer }) => {
    return (
        <div className="bg-pink-100 text-black border shadow-md rounded p-4">
            <img className="h-[200px] w-full object-cover rounded" src={volunteer.thumbnail} alt="Thumbnail" />
            <h3 className="mt-4 text-lg font-bold">{volunteer.postTitle}</h3>
            <p className="text-gray-600">{volunteer.category}</p>
            <p className="text-gray-500 text-sm">Deadline: {volunteer.deadline}</p>
            <Link to={`/post-details/${volunteer._id}`} className=" btn mt-4 w-full bg-purple-600 text-white rounded hover:bg-purple-700">View Details</Link>
        </div>
    );
};

export default VolunteerNeedCard;