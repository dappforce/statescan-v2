// FIXME: complete the file

import { ReactComponent as Polkadot } from "../../../components/icons/polkadot.svg";

const nodes = [
    {
        name: "Subsocial",
        url: "wss://para.f3joule.space/",
    },
];

const subsocial = {
    name: "Subsocial",
    icon: <Polkadot />,
    identity: "subsocial",
    value: "subsocial",
    chain: "subsocial",
    symbol: "SUB",
    decimals: 10,
    color: "#ED8C3B",
    colorSecondary: "rgba(237,140,59, 0.1)",
    nodes,
    useOnChainBlockData: true,
    modules: {
        identity: false,
    },
};

export default subsocial;
