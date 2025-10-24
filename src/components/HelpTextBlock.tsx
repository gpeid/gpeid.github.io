import useAppContext from "../context/useAppContext";
import BlockTitle from "./BlockTitle";

const HelpTextBlock = () => {
    const { focusedMenuItem } = useAppContext();
    return (
        <div className="block-bg-gradient secondary-block help-text-block">
            <BlockTitle title="Help" />
            <p className="help-text">{focusedMenuItem ? focusedMenuItem?.description : "Hover over or focus on a link to see more information here."}
            </p>
        </div>
    );
};

export default HelpTextBlock;