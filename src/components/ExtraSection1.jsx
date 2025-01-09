import Lottie from "lottie-react";
import volunteerAnimation from "../assets/jsonFiles/volunteer.json"

const ExtraSection1 = () => {
    return (
        <div className="py-10">
            <section className="bg-pink-100 text-black py-10">
                <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[300px] gap-6">
                    <div className="flex lg:flex-row flex-col items-center">
                        <div className="w-[150px]">
                            <Lottie animationData={volunteerAnimation}></Lottie>
                        </div>
                        <div className="lg:text-start text-center">
                            <h3 className="text-xl font-bold">Why Volunteer?</h3>
                            <p className="mt-2">Volunteering is an excellent way<br />to give back to the community, gain<br />new skills, and meet amazing people.</p>
                        </div>
                    </div>
                    <div className="lg:text-start text-center">
                        <h3 className="text-xl font-bold">Upcoming Events</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="">Event 1 - Date</li>
                            <li className="">Event 2 - Date</li>
                            <li className="">Event 3 - Date</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection1;