const BlockTitle: React.FC<{ title: string }> = ({ title }) => {
    return <div className="block-title">{title ? title : "Block"}</div>;
};

export default BlockTitle;