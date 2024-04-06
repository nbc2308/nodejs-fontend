import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useProductQuery } from "@/common/hooks/useProductQuery";
import { useState } from "react";
import { columns } from "./Column";
import Datatable from "./DataTable";
import FooterTable from "./FooterTable";
import HeaderTable from "./HeaderTable";

const ProductList = () => {
  const { data } = useProductQuery();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="flex justify-between items-center py-3">
        <h2>Product List</h2>
        <Link to="/admin/products/add" className="flex items-center">
          <Button>
            <Plus />
            Add Product
          </Button>
        </Link>
      </div>
      <hr />
      <div className="my-5">
        <div className="w-full">
          <HeaderTable table={table} />
          <div className="rounded-md border">
            <Datatable table={table} columns={columns} />
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <FooterTable table={table} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
