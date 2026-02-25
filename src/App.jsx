import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Scrollbar from 'react-smooth-scrollbar';

function App() {
    return (
        <Scrollbar
            damping={0.1}
            thumbMinSize={20}
            renderByPixels={true}
            alwaysShowTracks={false}
            continuousScrolling={true}
            style={{ width: '100%', height: '100vh' }}
        >
            <Navbar />
            <About />
            <Projects />
        </Scrollbar>
    );
}

export default App;