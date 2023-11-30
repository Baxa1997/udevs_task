import {useState} from "react";

import Table from "../Table";
import {CTable} from "../Ctable";
import {data, columns} from "../../utils/mockData";
import useTable from "../../hooks/useTable";
import computeData from "../../hooks/computeData";

function Main() {
  const {paginationValueProps, paginationSetValueProps} = useTable();
  const journalList = computeData({...paginationValueProps, data});
  console.log("journalList", journalList);
  return (
    <>
      <CTable.Table>
        <CTable.CTableHead>
          <CTable.CTableRow>
            {columns?.map((item) => (
              <CTable.CTableHeadCol key={item?.id}>
                {item?.key}
              </CTable.CTableHeadCol>
            ))}
          </CTable.CTableRow>
        </CTable.CTableHead>

        <CTable.CTableBody>
          {journalList?.map((item) => (
            <CTable.CTableRow key={item?.id}>
              <CTable.CTableBodyColumn>{item?.id}</CTable.CTableBodyColumn>
              <CTable.CTableBodyColumn>{item?.name}</CTable.CTableBodyColumn>
              <CTable.CTableBodyColumn>{item?.age}</CTable.CTableBodyColumn>
              <CTable.CTableBodyColumn>{item?.city}</CTable.CTableBodyColumn>
            </CTable.CTableRow>
          ))}
        </CTable.CTableBody>
      </CTable.Table>
      <CTable.Pagination
        dataLength={data?.length}
        {...paginationSetValueProps}
        {...paginationValueProps}
      />
    </>
  );
}

export default Main;
