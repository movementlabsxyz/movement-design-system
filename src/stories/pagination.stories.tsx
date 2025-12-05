import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
  BulletPagination,
} from "../components/shadcn/pagination";
import { useState } from "react";

const meta = {
  title: "movement-design-system/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Bullets: Story = {
  render: () => (
    <Pagination>
      <PaginationContent className="gap-0">
        <PaginationItem>
          <PaginationPrevious variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" isActive />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext variant="bullets" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const BulletsWithoutArrows: Story = {
  render: () => (
    <Pagination>
      <PaginationContent className="gap-0">
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" isActive />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink variant="bullets" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const BulletPaginationComponent: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
      <BulletPagination
        totalPages={7}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showArrows={true}
      />
    );
  },
};

export const BulletPaginationInteractive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 7;

    return (
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Page {currentPage + 1} of {totalPages}
          </p>
          <BulletPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showArrows={true}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(0)}
            className="px-3 py-1 text-sm border rounded hover:bg-accent"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage(Math.floor(totalPages / 2))}
            className="px-3 py-1 text-sm border rounded hover:bg-accent"
          >
            Middle
          </button>
          <button
            onClick={() => setCurrentPage(totalPages - 1)}
            className="px-3 py-1 text-sm border rounded hover:bg-accent"
          >
            Last
          </button>
        </div>
      </div>
    );
  },
};
