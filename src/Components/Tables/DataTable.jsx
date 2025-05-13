import React from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";

import '../Tables/styles.css'

// Componente de Búsqueda Global
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <input
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value || undefined)}
      placeholder="Buscar..."
      className="form-control mb-3 input-filter"
    />
  );
}

// Componente principal de la tabla
function DataTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, globalFilter } = state;

  return (
    <div className="container p-3">
      {/* Filtro global */}
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

      {/* Tabla */}
      <div className="table-responsive">
        <table {...getTableProps()} className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.id || column.Header}

                    className="text-center align-middle"
                  >
                    {column.render("Header")}
                    <span className="d-block text-center">
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : " ⬍"}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id ?? i}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="text-center align-middle"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={columns.length} className="bg-dark text-white text-center">
                Total: {data.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Paginación */}
      <div className="container mt-1">
  <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
    <button
      className="btn btn-dark d-flex align-items-center justify-content-center"
      onClick={previousPage}
      disabled={!canPreviousPage}
      style={{ width: '40px', height: '40px' }}
      aria-label="Página anterior"
    >
      ←
    </button>

    <span className="bg-dark text-white px-3 py-2 rounded text-center" style={{ minWidth: '110px' }}>
      Página <strong>{pageIndex + 1}</strong> de <strong>{pageOptions.length}</strong>
    </span>

    <button
      className="btn btn-dark d-flex align-items-center justify-content-center"
      onClick={nextPage}
      disabled={!canNextPage}
      style={{ width: '40px', height: '40px' }}
      aria-label="Página siguiente"
    >
      →
    </button>
  </div>
</div>

    </div>
  );
}

export default DataTable;
