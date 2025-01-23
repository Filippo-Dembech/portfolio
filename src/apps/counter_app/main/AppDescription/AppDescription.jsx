import styles from "./AppDescription.module.css";
import DropdownDetails from "./DropdownDetails";

export default function AppDescription() {
    return (
        <div className={styles.description}>
            <h1 className={styles.mainHeader}>READ ME</h1>
            <DropdownDetails summaryText="The Idea">
                <p>
                    When I was learning state management I really had a hard
                    time understanding which approach to use depending on the
                    scenario, and the pros and cons of each option the state
                    management market offers.
                </p>
                <p>
                    After some headaches and a fair bit of coffee I have
                    realized that the best way to learn (in my case) is to
                    compare them. In this way I could see how a longer code base
                    with fewer files suited better in some small apps, or how a
                    modular one would have been a better fit for big projects.
                </p>
                <p>
                    So, I came up with this page that compares{" "}
                    <strong>the same counter app</strong>, but with{" "}
                    <strong>three different techniques</strong>:
                </p>
                <ul>
                    <li>
                        <code>useState()</code> hook
                    </li>
                    <li>
                        <code>useReducer()</code> hook
                    </li>
                    <li>
                        and <em>Context API</em>
                    </li>
                </ul>
                <p>
                    Here we can see how the code base changes between
                    approaches, how different files appear to separate concerns
                    and how the structure of the entire app evolves when the
                    used tools become more sophisticated.
                </p>
            </DropdownDetails>
            <DropdownDetails summaryText="One App, Three Approaches">
                <p>
                    Below, there are three different versions of the same
                    counter app. What are their differences?
                </p>
                <ol>
                    <li>
                        The first app only uses the <code>useState()</code>{" "}
                        hook. In this version the state is
                        managed only by this hook in a pretty rudimentary way.
                        All the logic is located in the event handlers and each
                        component receives a lot of props, therefore prop
                        drilling is quite noticeable. Here, the main component (
                        <code>CounterApp</code>) holds both logic and state.
                    </li>
                    <li>
                        The second version uses the <code>useReducer()</code>{" "}
                        hook. In this version prop drilling is still present but
                        state logic is separated by the components and is
                        entirely located in the <code>reducer</code> function.
                    </li>
                    <li>
                        The third version uses the <em>Context API</em>. In this
                        version the problem with prop drilling is solved, and
                        each component fetches and updates data from the context
                        it's interested about. Here, we can notice how clean the
                        main component (<code>CounterAppContext</code>) is and
                        how no prop is present. Although it is cleaner, it's a
                        bit complex to grasp at first sight.
                    </li>
                </ol>
            </DropdownDetails>
            <DropdownDetails summaryText="Code Viewers and Selection">
                <p>
                    Below each counter app you can check the source code of the
                    app by selecting the tab of the component you are interested
                    in. When a component tab is selected, it will pop up in the
                    relative app interface. In this way it makes it obvious which
                    part of the UI the code you are viewing is related to.
                </p>
            </DropdownDetails>
            <DropdownDetails summaryText="How the App Works">
                <h3>Counter and Step</h3>
                <p>
                    It is a really simple counter app. By pressing on the plus
                    button (<code>+</code>) the counter will increase by the
                    amount set in the <em>Step Amount</em> field, otherwise the
                    minus button (<code>-</code>) will decrease by the same step
                    amount (the default step amount is <code>1</code>).
                </p>
                <h3>Sign Displayer</h3>
                <p>
                    In the top-left corner of the app (to the left of the app
                    title) is displayed the <em>sign</em> of the counter (
                    <em>negative</em> or <em>positive</em>). When it's positive
                    the little box will have a green background, otherwise it
                    will be blue.
                </p>
                <h3>Step Amount Displayer</h3>
                <p>
                    In the top-right corner of the app (to the right of the app
                    title) is displayed the current step value.
                </p>
                <h3>Reset Button</h3>
                <p>
                    If you want to start all over again you can press the{" "}
                    <code>Reset</code> button. In this way the counter will be
                    reset to <code>0</code> and the step amount will be reset to{" "}
                    <code>1</code>.
                </p>
            </DropdownDetails>
        </div>
    );
}
