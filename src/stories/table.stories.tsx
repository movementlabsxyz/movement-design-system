import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/shadcn/table";
import {
  useSortableData,
  type SortFunction,
} from "../components/shadcn/table-hooks";

const meta = {
  title: "movement-design-system/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["simple", "borders", "alternating"],
      description: "Visual variant of the table",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "User",
    status: "Active",
  },
];

function SortableTableContent() {
  const sortedUsers = useSortableData(users);

  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHead sortKey="name">Name</TableHead>
          <TableHead sortKey="email">Email</TableHead>
          <TableHead sortKey="role">Role</TableHead>
          <TableHead sortKey="status">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}

export const Simple: Story = {
  args: {
    variant: "simple",
  },
  render: (args) => (
    <Table {...args}>
      <SortableTableContent />
    </Table>
  ),
};

export const Borders: Story = {
  args: {
    variant: "borders",
  },
  render: (args) => (
    <Table {...args}>
      <SortableTableContent />
    </Table>
  ),
};

export const Alternating: Story = {
  args: {
    variant: "alternating",
  },
  render: (args) => (
    <Table {...args}>
      <SortableTableContent />
    </Table>
  ),
};

export const WithCaption: Story = {
  args: {
    variant: "simple",
  },
  render: (args) => (
    <Table {...args}>
      <TableCaption>
        A list of users in the system. Click on column headers to sort.
      </TableCaption>
      <SortableTableContent />
    </Table>
  ),
};

export const NonSortable: Story = {
  args: {
    variant: "simple",
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Custom sort function for case-insensitive sorting
const caseInsensitiveSort: SortFunction = (a, b, column, direction) => {
  const aValue = String(a[column as keyof typeof a] || "").toLowerCase();
  const bValue = String(b[column as keyof typeof b] || "").toLowerCase();

  if (aValue === bValue) return 0;
  const comparison = aValue < bValue ? -1 : 1;
  return direction === "asc" ? comparison : -comparison;
};

export const CustomSortFunction: Story = {
  args: {
    variant: "simple",
  },
  render: (args) => {
    function CustomSortContent() {
      // Pass custom sort function to the hook
      const sortedUsers = useSortableData(users, caseInsensitiveSort);

      return (
        <>
          <TableHeader>
            <TableRow>
              <TableHead sortKey="name">Name (Case Insensitive)</TableHead>
              <TableHead sortKey="email">Email</TableHead>
              <TableHead sortKey="role">Role</TableHead>
              <TableHead sortKey="status">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      );
    }

    return (
      <Table {...args}>
        <TableCaption>
          Custom sort function passed to useSortableData hook
        </TableCaption>
        <CustomSortContent />
      </Table>
    );
  },
};

// Priority-based role sorting
const rolePriority: Record<string, number> = {
  Admin: 1,
  Manager: 2,
  User: 3,
};

const roleSort: SortFunction = (a, b, column, direction) => {
  if (column === "role") {
    const roleA = a[column as keyof typeof a] as string;
    const roleB = b[column as keyof typeof b] as string;
    const priorityA = rolePriority[roleA] || 999;
    const priorityB = rolePriority[roleB] || 999;

    const comparison = priorityA - priorityB;
    return direction === "asc" ? comparison : -comparison;
  }

  // Default sorting for other columns
  const aValue = a[column as keyof typeof a];
  const bValue = b[column as keyof typeof b];
  if (aValue === bValue) return 0;
  const comparison = aValue < bValue ? -1 : 1;
  return direction === "asc" ? comparison : -comparison;
};

export const ColumnSpecificSort: Story = {
  args: {
    variant: "borders",
  },
  render: (args) => {
    function ColumnSortContent() {
      const sortedUsers = useSortableData(users);

      return (
        <>
          <TableHeader>
            <TableRow>
              <TableHead sortKey="name">Name</TableHead>
              <TableHead sortKey="email">Email</TableHead>
              <TableHead sortKey="role" sortFn={roleSort}>
                Role (Priority: Admin → Manager → User)
              </TableHead>
              <TableHead sortKey="status">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      );
    }

    return (
      <Table {...args}>
        <TableCaption>
          Custom sort function for the Role column via sortFn prop
        </TableCaption>
        <ColumnSortContent />
      </Table>
    );
  },
};

export const TableDefaultSort: Story = {
  args: {
    variant: "alternating",
  },
  render: (args) => {
    function TableDefaultContent() {
      const sortedUsers = useSortableData(users);

      return (
        <>
          <TableHeader>
            <TableRow>
              <TableHead sortKey="name">Name</TableHead>
              <TableHead sortKey="email">Email</TableHead>
              <TableHead sortKey="role">Role</TableHead>
              <TableHead sortKey="status">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      );
    }

    return (
      <Table {...args} defaultSortFn={caseInsensitiveSort}>
        <TableCaption>
          Case-insensitive sorting applied to all columns via Table
          defaultSortFn prop
        </TableCaption>
        <TableDefaultContent />
      </Table>
    );
  },
};
