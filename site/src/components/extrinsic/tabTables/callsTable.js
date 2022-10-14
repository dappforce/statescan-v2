import { StyledPanelTableWrapper } from "../../styled/panel";
import CallsTableOrigin from "../../call/callsTable";
import { noop } from "lodash";
import { useLocation } from "react-router-dom";
import { getPageFromQuery } from "../../../utils/viewFuncs";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import Pagination from "../../pagination";
import { LIST_DEFAULT_PAGE_SIZE } from "../../../utils/constants";

function CallsTable({ extrinsicId, setCallsCount = noop }) {
  const location = useLocation();
  const page = getPageFromQuery(location);
  const pageSize = LIST_DEFAULT_PAGE_SIZE;
  const [calls, setCalls] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!extrinsicId) {
      return;
    }

    api
      .fetch(`/extrinsics/${extrinsicId}/calls`, {
        page: page - 1,
        pageSize,
      })
      .then(({ result }) => {
        setCalls(result?.items ?? []);
        setTotal(result?.total ?? 0);
        setCallsCount(result?.total ?? 0);
      });
  }, [page, pageSize, extrinsicId, setCallsCount]);

  return (
    <StyledPanelTableWrapper>
      <CallsTableOrigin data={calls} />
      <Pagination page={page} pageSize={pageSize} total={total} />
    </StyledPanelTableWrapper>
  );
}

export default CallsTable;