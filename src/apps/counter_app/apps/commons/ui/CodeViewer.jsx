import CodeSection from "./CodeSection";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Tooltip } from "react-tooltip";
import styles from "../styles/CodeViewer.module.css";

export default function CodeViewer({
    onTabSelect,
    codeItems,
}) {

    /*
        CODE ITEM EXAMPLE:
        
        {
            isStateManagement: false,
            tabLabel: "counterAppCode",
            tabCode: `
                ...
            `
        }

    */

    const component = (
        <Tabs
            onSelect={onTabSelect}
            className={styles.tabs}
        >
            <TabList>
                <Tooltip id="component-tooltip" />
                <Tooltip id="state-tooltip" />
                {codeItems.map((codeItem, id) => (
                    codeItem.isStateManagement ? (
                        <Tab
                            key={id}
                            data-tooltip-id="state-tooltip"
                            data-tooltip-content="State Management"
                            className={`${styles.stateManagementTab} react-tabs__tab`}
                        >
                            {codeItem.tabLabel}
                        </Tab>
                    ) : (
                        <Tab
                            key={id}
                            data-tooltip-id="component-tooltip"
                            data-tooltip-content="Component"
                            className={`${styles.componentTab} react-tabs__tab`}
                        >
                            {codeItem.tabLabel}
                        </Tab>
                    )
                ))}
            </TabList>

            {codeItems.map((codeItem, id) => (
                <TabPanel key={id}>
                    <CodeSection code={codeItem.tabCode} />
                </TabPanel>
            ))}
        </Tabs>
    );

    return component;
}
