import React from "react";
import { FlagProvider } from "./context";
import { useContext } from "react";
import { FlagContext } from "./context";
import Accordion from "../Accordion";
import Forms from "../Forms";
import ParagraphGenerator from "../ParagraphGenerator";
import QRCode from "../QrCode";

const index = () => {
  return (
    <FlagProvider>
      <FeatureFlag />
    </FlagProvider>
  );
};

export default index;

function FeatureFlag() {
    const { loading, enabledFlags } = useContext(FlagContext);

    const componentsToRender = [
        {
            key: "showAccordian",
            component: <Accordion />,
        },
        {
            key: "showForms",
            component: <Forms />,
        },
        {
            key: "showParagraphGenerator",
            component: <ParagraphGenerator />,
        },
        {
            key: "showQrCode",
            component: <QRCode />,
        }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            {componentsToRender.map((component) => 
                checkEnabledFlags(component.key) ? component.component : null
            )}
        </div>
    );
}
