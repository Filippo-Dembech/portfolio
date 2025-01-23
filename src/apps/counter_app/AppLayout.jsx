import CounterApp from "./apps/CounterApp/CounterApp";
import CounterAppReducer from "./apps/CounterAppReducer/CounterAppReducer";
import CounterAppContext from "./apps/CounterAppContext/CounterAppContext";
import AppDescription from "./main/AppDescription/AppDescription";
import Footer from "./main/Footer/Footer";
import lightAppStyle from "./lightApp.module.css";
import darkAppStyle from "./darkApp.module.css";
import DarkModeButton from "./main/DarkModeButton/DarkModeButton";
import { useTheme } from "./ThemeContext";

export default function AppLayout() {
    const { isDarkTheme } = useTheme();

    const appTheme = isDarkTheme ? darkAppStyle : lightAppStyle;

    return (
            <div className={appTheme.app}>
                <DarkModeButton />
                <AppDescription />
                <hr />
                <CounterApp
                    codeDescription={
                        <>
                            <p>
                                In this solution state is managed by{" "}
                                <strong>event handlers</strong> and state
                                setters in the top parts of the application.{" "}
                                <strong>Prop drilling</strong> can be noticed in
                                the <code>CounterApp</code> component, where
                                almost all components receive state values and
                                setters to operate on them:
                            </p>
                            <ul>
                                <li>
                                    In the <code>CounterApp</code> code there is
                                    the <code>resetValues()</code> event handler
                                    that uses the setter functions (
                                    <code>setCounterValue()</code> and{" "}
                                    <code>setStepAmount()</code>) to reset the
                                    counter state.
                                </li>
                                <li>
                                    In the <code>Counter</code> code component
                                    the value of the counter is updated by the{" "}
                                    <code>decreaseCounter()</code> and{" "}
                                    <code>increaseCounter()</code> event
                                    handlers, used to decrease and increase its
                                    value accordingly.
                                </li>
                                <li>
                                    In the <code>Step</code> component code the
                                    event hander <code>setState()</code> updates
                                    the step amount validating the user input.
                                </li>
                                <li>
                                    All the other components are just
                                    presentational components (
                                    <code>Header</code>,{" "}
                                    <code>DecreaseButton</code>,{" "}
                                    <code>IncreaseButton</code>,{" "}
                                    <code>SignDisplayer</code>, and{" "}
                                    <code>StepDisplayer</code>).
                                </li>
                            </ul>
                        </>
                    }
                ></CounterApp>
                <hr />
                <CounterAppReducer
                    codeDescription={
                        <>
                            <p>
                                In this solution event handlers lose their power
                                and all the state logic is located into the{" "}
                                <code>reducer</code> function. The components of
                                the app just dispatch actions to the reducer and
                                it performs the state update. We can finally see
                                how they are completely{" "}
                                <strong>state logic free</strong>.
                            </p>
                            <p>Here we can see the separation of concerns:</p>
                            <ul>
                                <li>
                                    The <code>reducer</code> operates on the
                                    state and does the logic
                                </li>
                                <li>
                                    The app components focus on the
                                    presentational part and only tell the
                                    reducer which action to take depending on
                                    user interactions.
                                </li>
                            </ul>
                        </>
                    }
                />
                <hr />
                <CounterAppContext
                    codeDescription={
                        <>
                            <p>
                                Here the <code>CounterApp</code> component is
                                really clean. You can understand the{" "}
                                <em>components structure at first sight</em>.
                            </p>
                            <p>
                                Each component can grab the piece of state it's
                                interested in and display it to the user, or it
                                can also take state function to update the app
                                state values (e.g. <code>reset()</code> function
                                in the <code>ResetButton</code>).
                            </p>
                        </>
                    }
                />
                <Footer />
            </div>
    );
}