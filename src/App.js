import { TypeAnimation } from "react-type-animation";
import Typewriter from "./Typewriter";

function App() {

    return (
        <div className="bg-orange-100">
            <h1>
            <TypeAnimation
              sequence={[
                "Hi there,\nI'm Phil.\nWelcome to my world!",
              ]}
              className="font-bold whitespace-pre-line font-custom-bebas text-orange-600 text-5xl"
              wrapper="span"
              speed={1}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />  
            </h1>
            <Typewriter keySequence="Hi there, I'm Phil. Welcome to my world!"/>
        </div>
    );
}

export default App;
