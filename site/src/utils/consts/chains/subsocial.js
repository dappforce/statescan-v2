// FIXME: complete the file

import { ReactComponent as Subsocial } from "../../../components/icons/subsocial.svg";

const nodes = [
    {
        name: "Subsocial",
        url: "wss://para.f3joule.space/",
    },
];

const subsocial = {
    name: "Subsocial",
    icon: <Subsocial />,
    identity: "subsocial",
    value: "subsocial",
    chain: "subsocial",
    symbol: "SUB",
    decimals: 10,
    color: "#eb2f96",
    colorSecondary: "#f759ab",
    nodes,
    useOnChainBlockData: true,
    modules: {
        identity: false,
    },
};

export default subsocial;
