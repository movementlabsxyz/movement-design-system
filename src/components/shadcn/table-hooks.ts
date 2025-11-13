import * as React from "react";

type SortDirection = "asc" | "desc" | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SortFunction<T = any> = (
  a: T,
  b: T,
  column: string,
  direction: SortDirection,
) => number;

interface TableContextValue {
  variant: "simple" | "borders" | "alternating";
  sortColumn: string | null;
  sortDirection: SortDirection;
  onSort: (column: string) => void;
  defaultSortFn?: SortFunction;
  columnSortFns?: Record<string, SortFunction>;
  registerColumnSortFn?: (column: string, sortFn: SortFunction) => void;
}

export const TableContext = React.createContext<TableContextValue>({
  variant: "simple",
  sortColumn: null,
  sortDirection: null,
  onSort: () => {},
});

// Hook to get table sorting state
export function useTableSort() {
  const { sortColumn, sortDirection } = React.useContext(TableContext);
  return { sortColumn, sortDirection };
}

// Hook to sort data based on table's current sort state
export function useSortableData<T>(data: T[], sortFn?: SortFunction<T>) {
  const { sortColumn, sortDirection, defaultSortFn, columnSortFns } =
    React.useContext(TableContext);

  return React.useMemo(() => {
    if (!sortColumn || !sortDirection) return data;

    const sorted = [...data].sort((a, b) => {
      // Priority: hook sortFn > column sortFn > table defaultSortFn > built-in default
      const resolvedSortFn =
        sortFn || columnSortFns?.[sortColumn] || defaultSortFn;

      if (resolvedSortFn) {
        return resolvedSortFn(a, b, sortColumn, sortDirection);
      }

      // Built-in default sorting logic - access property by key
      const aValue = a[sortColumn as keyof T];
      const bValue = b[sortColumn as keyof T];

      if (aValue === bValue) return 0;

      const comparison = aValue < bValue ? -1 : 1;
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [data, sortColumn, sortDirection, sortFn, defaultSortFn, columnSortFns]);
}

export type { SortDirection, SortFunction };
