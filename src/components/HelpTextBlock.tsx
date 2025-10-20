import useAppContext from "../context/useAppContext";

const HelpTextBlock = () => {
    const { focusedMenuItem } = useAppContext();
    return (
        <div className="block-bg-gradient secondary-block help-text-block">
            <p className="help-text">{focusedMenuItem ? focusedMenuItem?.description : "Hover over or focus on a link to see more information here."}
            </p>
        </div>
    );
};

export default HelpTextBlock;