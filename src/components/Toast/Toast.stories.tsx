import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId, useState } from "react";

import { Button } from "../Button";
import { Toast } from "./Toast";
import { toastVariants } from "./types";
import { createToaster } from "./Toaster";
import { GlobalToaster, toast as globalToast } from "./global-toast";

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const BasicUsage: Story = {
  render: (props) => {
    const [Toaster, toast] = createToaster();
    return (
      <div style={{ paddingBottom: "120px" }}>
        <Toaster />
        <Button onClick={() => toast(props)}>Create Toast</Button>
      </div>
    );
  },
  args: {
    variant: "info",
    title: "Toast Title",
    description: "This is the description of the toast message.",
  },
};

export const AllVariants: Story = {
  render: (props) => {
    const [Toaster, toast] = createToaster();
    return (
      <div className="flex flex-col gap-16 items-start pb-96">
        <Toaster />
        {toastVariants.map((variant) => (
          <Button
            key={variant}
            onClick={() =>
              toast({ ...props, title: capitalize(variant), variant })
            }
          >
            {capitalize(variant)} Toast
          </Button>
        ))}
      </div>
    );
  },
  args: {
    description: "This is the description of the toast message.",
  },
};

export const MethodBasedAPI: Story = {
  render: () => {
    const [Toaster, toast] = createToaster();
    return (
      <div className="flex flex-col gap-16 items-start pb-96">
        <Toaster />
        <Button
          onClick={() => toast.success("Operation completed successfully!")}
        >
          Success Toast (String)
        </Button>
        <Button onClick={() => toast.error("Something went wrong!")}>
          Error Toast (String)
        </Button>
        <Button onClick={() => toast.warning("Please check your input")}>
          Warning Toast (String)
        </Button>
        <Button onClick={() => toast.info("New feature available!")}>
          Info Toast (String)
        </Button>
        <Button
          onClick={() =>
            toast.success({
              title: "Success!",
              description: "Your action was completed successfully.",
            })
          }
        >
          Success Toast (Object)
        </Button>
        <Button
          onClick={() =>
            toast.error({
              title: "Error",
              description: "Something went wrong. Please try again.",
            })
          }
        >
          Error Toast (Object)
        </Button>
      </div>
    );
  },
};

export const PersistentToast: Story = {
  render: (props) => {
    const [Toaster, toast] = createToaster();
    return (
      <div style={{ paddingBottom: "120px" }}>
        <Toaster />
        <Button onClick={() => toast({ ...props, duration: Infinity })}>
          Create Toast
        </Button>
      </div>
    );
  },
  args: {
    variant: "info",
    title: "I'm persistent",
    description: "You'll have to close me yourself.",
  },
};

export const WithComplexDescription: Story = {
  render: BasicUsage.render,
  args: {
    ...BasicUsage.args,
    description: () => (
      <>
        This is a <i>complex</i> <strong>description</strong>
      </>
    ),
  },
};

export const UpdateAndRemoveToast: Story = {
  render: (args) => {
    const [[Toaster, toast]] = useState(createToaster());
    const [count, setCount] = useState(0);
    const id = useId();

    const upsertToast = () => {
      toast({
        ...args,
        id,
        description: `Revision ${count + 1}`,
      });
      setCount((prev) => prev + 1);
    };

    const removeToast = () => {
      toast.dismiss(id);
    };

    return (
      <div
        className="flex flex-col pb-120 gap-16 items-start"
        style={{ paddingBottom: "120px" }}
      >
        <Toaster />
        <Button onClick={upsertToast}>Upsert Toast</Button>
        <Button onClick={removeToast}>Remove Toast</Button>
      </div>
    );
  },
  args: {
    variant: "info",
    title: "Test Toast",
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const [Toaster, toast] = createToaster();

    const createMultipleToasts = () => {
      toast({
        variant: "info",
        title: "Info Toast",
        description: "This is the first toast message.",
      });

      setTimeout(() => {
        toast({
          variant: "success",
          title: "Success Toast",
          description: "This is the second toast message.",
        });
      }, 100);

      setTimeout(() => {
        toast({
          variant: "warning",
          title: "Warning Toast",
          description: "This is the third toast message.",
        });
      }, 200);

      setTimeout(() => {
        toast({
          variant: "error",
          title: "Error Toast",
          description: "This is the fourth toast message.",
        });
      }, 300);
    };

    return (
      <div
        className="flex flex-col pb-120 gap-16 items-start"
        style={{ paddingBottom: "120px" }}
      >
        <Toaster />
        <Button onClick={createMultipleToasts}>Create Multiple Toasts</Button>
        <Button onClick={() => toast.dismiss()}>Dismiss All Toasts</Button>
      </div>
    );
  },
};

export const MethodBasedMultipleToasts: Story = {
  render: () => {
    const [Toaster, toast] = createToaster();

    const createMultipleToasts = () => {
      toast.info("This is the first toast message.");

      setTimeout(() => {
        toast.success("This is the second toast message.");
      }, 100);

      setTimeout(() => {
        toast.warning("This is the third toast message.");
      }, 200);

      setTimeout(() => {
        toast.error("This is the fourth toast message.");
      }, 300);
    };

    return (
      <div
        className="flex flex-col pb-120 gap-16 items-start"
        style={{ paddingBottom: "120px" }}
      >
        <Toaster />
        <Button onClick={createMultipleToasts}>
          Create Multiple Toasts (Method API)
        </Button>
        <Button onClick={() => toast.dismiss()}>Dismiss All Toasts</Button>
      </div>
    );
  },
};

export const GlobalToastUsage: Story = {
  render: () => {
    return (
      <div
        className="flex flex-col pb-120 gap-16 items-start"
        style={{ paddingBottom: "120px" }}
      >
        <GlobalToaster />

        <div className="flex flex-col gap-8 items-start">
          <h3 className="text-base font-medium mb-2">Global Toast Usage</h3>
          <p className="text-sm text-gray-600">
            These buttons use the global toast system. The GlobalToaster is set
            up once at the root level.
          </p>
        </div>

        <Button onClick={() => globalToast.success("Global success message!")}>
          Global Success Toast
        </Button>
        <Button onClick={() => globalToast.error("Global error message!")}>
          Global Error Toast
        </Button>
        <Button onClick={() => globalToast.warning("Global warning message!")}>
          Global Warning Toast
        </Button>
        <Button onClick={() => globalToast.info("Global info message!")}>
          Global Info Toast
        </Button>
        <Button
          onClick={() =>
            globalToast.success({
              title: "Global Success",
              description:
                "This is a global success toast with title and description.",
            })
          }
        >
          Global Success (Object)
        </Button>
        <Button onClick={() => globalToast.dismiss()}>
          Dismiss All Global Toasts
        </Button>
      </div>
    );
  },
};
