import Header from "./components/Header";
import Profile from "./components/Profile";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main className="bg-zinc-900 w-full h-full flex flex-col">
            <Header/>
            <Profile/>
            <Techs/>
            <Projects/>
            <Experience/>
            <Footer/>
        </main>
    );
}
 
export default App;