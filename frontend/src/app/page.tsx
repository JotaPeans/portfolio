import Header from "./components/Header";
import Profile from "./components/Profile";
import Techs from "./components/Techs";

const App = () => {
    return (
        <main className="bg-zinc-900 w-full h-full pb-12 flex flex-col">
            <Header/>
            <Profile/>
            <Techs/>
        </main>
    );
}
 
export default App;