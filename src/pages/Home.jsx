import Banner from "../components/Banner";
import ExtraSection1 from "../components/ExtraSection1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VolunteerNeeds from "../components/VolunteerNeeds";

const Home = () => {
    return (
        <div>
            <header className="w-full bg-purple-700 fixed top-0 left-0 z-50">
                <Navbar></Navbar>
            </header>
            <div className="w-11/12 mx-auto">
                <Banner></Banner>
            </div>
            <div className="w-11/12 mx-auto">
                <VolunteerNeeds></VolunteerNeeds>
            </div>
            <div className="w-11/12 mx-auto">
                <ExtraSection1></ExtraSection1>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;