import styled from "styled-components";
import TableHead from "./head";
import TableBody from "./body";

const StyledTable = styled.table`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  table-layout: fixed;
  background: ${(p) => p.theme.fillPanel};
  border-collapse: collapse;
  color: ${(p) => p.theme.fontPrimary};
`;

export default function Table({ heads = [], data = [] }) {
  return (
    <StyledTable>
      <TableHead heads={heads} />
      <TableBody heads={heads} data={data} />
    </StyledTable>
  );
}