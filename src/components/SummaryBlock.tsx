import BlockTitle from "./BlockTitle";

const SummaryBlock = () => {
    return <div className="summary-block block-bg-gradient">
        <BlockTitle title="Summary" />
        <h2 className="font-bold text-3xl">George H. Diep</h2>
        <hr className="my-4" />
        <p>Full Stack developer</p>
        <p>HTML/CSS</p>
        <p>SASS, CSS modules, Bootstrap, Tailwind CSS, USWDS</p>
        <p>JavaScript / TypeScript</p>
        <p>React, NextJS</p>
        <p>Redux Toolkit, Zustand</p>
        <p>Vite</p>
        <p>Cypress</p>
        <p>Storybook</p>
        <p>Azure Maps</p>
        <p>NestJS</p>
        <hr className="my-4" />

    </div>;
}

export default SummaryBlock;