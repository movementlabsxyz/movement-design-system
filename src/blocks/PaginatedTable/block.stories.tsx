import type { StoryObj } from "@storybook/react-vite";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/shadcn/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/pagination";
import { useSortableData, useTableSort } from "@/components/shadcn/table-hooks";

/**
 * PaginatedTable Block
 *
 * A complete paginated table component with sorting capabilities.
 * Combines Table and Pagination components with state management for
 * page navigation and data slicing.
 */

const meta = {
  title: "Blocks/Paginated Table",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
interface Transaction {
  id: string;
  hash: string;
  type: string;
  amount: string;
  from: string;
  to: string;
  status: "success" | "pending" | "failed";
  timestamp: number;
}

const generateTransactions = (count: number): Transaction[] => {
  const types = ["Transfer", "Stake", "Unstake", "Delegate"];
  const statuses: Transaction["status"][] = ["success", "pending", "failed"];
  const addresses = [
    "0x1a2b...3c4d",
    "0x5e6f...7g8h",
    "0x9i0j...1k2l",
    "0x3m4n...5o6p",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `tx-${i + 1}`,
    hash: `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`,
    type: types[Math.floor(Math.random() * types.length)],
    amount: (Math.random() * 1000).toFixed(2),
    from: addresses[Math.floor(Math.random() * addresses.length)],
    to: addresses[Math.floor(Math.random() * addresses.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    timestamp: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
  }));
};

interface PaginatedTableProps {
  itemsPerPage?: number;
  variant?: "simple" | "borders" | "alternating";
}

function PaginatedTableInner({
  itemsPerPage = 10,
  allData,
}: {
  itemsPerPage: number;
  allData: Transaction[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const sortedData = useSortableData(allData);
  const { sortColumn, sortDirection } = useTableSort();

  // Calculate pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisible = 7; // Total number of page buttons to show

    if (totalPages <= maxVisible) {
      // Show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis");
    }

    // Show pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "success":
        return "text-green-400";
      case "pending":
        return "text-yellow-400";
      case "failed":
        return "text-red-400";
    }
  };

  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHead sortKey="hash">Transaction Hash</TableHead>
          <TableHead sortKey="type">Type</TableHead>
          <TableHead sortKey="amount">Amount</TableHead>
          <TableHead sortKey="from">From</TableHead>
          <TableHead sortKey="to">To</TableHead>
          <TableHead sortKey="status">Status</TableHead>
          <TableHead sortKey="timestamp">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody key={`${sortColumn}-${sortDirection}`}>
        {currentData.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell className="font-mono text-xs">{tx.hash}</TableCell>
            <TableCell>{tx.type}</TableCell>
            <TableCell className="font-mono">{tx.amount} MOVE</TableCell>
            <TableCell className="font-mono text-xs">{tx.from}</TableCell>
            <TableCell className="font-mono text-xs">{tx.to}</TableCell>
            <TableCell>
              <span className={getStatusColor(tx.status)}>
                {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
              </span>
            </TableCell>
            <TableCell className="text-white/64">
              {formatDate(tx.timestamp)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption className="mt-0">
        <div className="flex items-center justify-between py-4">
          <div className="text-sm text-white/64">
            Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of{" "}
            {sortedData.length} transactions
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((page, index) =>
                page === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </TableCaption>
    </>
  );
}

export function PaginatedTable({
  itemsPerPage = 10,
  variant = "alternating",
}: PaginatedTableProps) {
  const allData = useMemo(() => generateTransactions(47), []);

  return (
    <div className="w-full max-w-6xl">
      <Table variant={variant}>
        <PaginatedTableInner itemsPerPage={itemsPerPage} allData={allData} />
      </Table>
    </div>
  );
}

export const Default: Story = {
  render: () => <PaginatedTable />,
};

export const WithBorders: Story = {
  render: () => <PaginatedTable variant="borders" />,
};

export const Simple: Story = {
  render: () => <PaginatedTable variant="simple" />,
};

export const SmallPageSize: Story = {
  render: () => <PaginatedTable itemsPerPage={5} />,
};

