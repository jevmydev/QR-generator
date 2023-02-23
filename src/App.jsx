import Header from "./components/Header";
import UrlCode from "./components/UrlCode";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="max-w-screen-sm mx-auto px-4">
                    <UrlCode />
                </div>
            </main>
        </>
    );
}

export default App;
