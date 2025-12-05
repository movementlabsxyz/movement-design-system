import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressButton } from "../components/ProgressButton/ProgressButton";
import { useState, useEffect } from "react";
import * as React from "react";

const meta = {
  title: "movement-design-system/ProgressButton",
  component: ProgressButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress percentage (0-100)",
    },
    loading: {
      control: "boolean",
      description: "Whether to show the progress animation",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof ProgressButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic progress button
export const Default: Story = {
  args: {
    children: "Loading...",
    loading: true,
    percent: 50,
  },
};

// Different progress states
export const NoProgress: Story = {
  args: {
    children: "Start",
    loading: true,
    percent: 0,
  },
};

export const QuarterProgress: Story = {
  args: {
    children: "Loading...",
    loading: true,
    percent: 25,
  },
};

export const HalfProgress: Story = {
  args: {
    children: "Loading...",
    loading: true,
    percent: 50,
  },
};

export const ThreeQuartersProgress: Story = {
  args: {
    children: "Almost there...",
    loading: true,
    percent: 75,
  },
};

export const Complete: Story = {
  args: {
    children: "Complete!",
    loading: true,
    percent: 100,
  },
};

// Not loading (no progress bar)
export const NotLoading: Story = {
  args: {
    children: "Click me",
    loading: false,
    percent: 0,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    children: "Disabled",
    loading: true,
    percent: 50,
    disabled: true,
  },
};

// Animated progression
export const AnimatedProgress: Story = {
  render: () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <ProgressButton loading percent={percent}>
        {percent === 100 ? "Complete!" : `Loading... ${percent}%`}
      </ProgressButton>
    );
  },
};

// Step-based progression (like bridgeStep example)
export const StepBasedProgress: Story = {
  render: () => {
    const [step, setStep] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setStep((prev) => {
          if (prev >= 4) return 1;
          return prev + 1;
        });
      }, 1500);

      return () => clearInterval(interval);
    }, []);

    const getPercent = (step: number) => {
      switch (step) {
        case 1:
          return 5;
        case 2:
          return 33.33;
        case 3:
          return 66.66;
        case 4:
          return 100;
        default:
          return 0;
      }
    };

    const getMessage = (step: number) => {
      switch (step) {
        case 1:
          return "Initializing...";
        case 2:
          return "Processing...";
        case 3:
          return "Almost there...";
        case 4:
          return "Complete!";
        default:
          return "Start";
      }
    };

    return (
      <ProgressButton loading percent={getPercent(step)}>
        Step {step}: {getMessage(step)}
      </ProgressButton>
    );
  },
};

// Interactive click to progress
export const ClickToProgress: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [percent, setPercent] = useState(0);

    const handleClick = () => {
      setLoading(true);
      setPercent(0);

      // Simulate progress over 3 seconds
      const duration = 3000;
      const interval = 30;
      const increment = 100 / (duration / interval);

      const timer = setInterval(() => {
        setPercent((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setLoading(false);
              setPercent(0);
            }, 500);
            return 100;
          }
          return next;
        });
      }, interval);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <ProgressButton
          loading={loading}
          percent={percent}
          onClick={handleClick}
        >
          {loading
            ? percent === 100
              ? "Complete!"
              : `Processing... ${Math.round(percent)}%`
            : "Click to Start"}
        </ProgressButton>
        <p className="text-muted-foreground text-sm">
          Click the button to simulate a 3-second loading process
        </p>
      </div>
    );
  },
};

// Click to progress with steps
export const ClickToProgressSteps: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);

    const handleClick = () => {
      setLoading(true);
      setStep(1);

      // Step 1: 5%
      setTimeout(() => setStep(2), 800);
      // Step 2: 33.33%
      setTimeout(() => setStep(3), 1600);
      // Step 3: 66.66%
      setTimeout(() => setStep(4), 2400);
      // Step 4: 100%
      setTimeout(() => {
        // Reset after completion
        setTimeout(() => {
          setLoading(false);
          setStep(0);
        }, 800);
      }, 3200);
    };

    const getPercent = (step: number) => {
      switch (step) {
        case 1:
          return 5;
        case 2:
          return 33.33;
        case 3:
          return 66.66;
        case 4:
          return 100;
        default:
          return 0;
      }
    };

    const getMessage = (step: number) => {
      switch (step) {
        case 1:
          return "Initializing...";
        case 2:
          return "Processing transaction...";
        case 3:
          return "Confirming...";
        case 4:
          return "Complete!";
        default:
          return "Bridge Assets";
      }
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <ProgressButton
          loading={loading}
          percent={getPercent(step)}
          onClick={handleClick}
        >
          {getMessage(step)}
        </ProgressButton>
        <p className="text-muted-foreground text-sm">
          Click to simulate a multi-step bridge process
        </p>
      </div>
    );
  },
};

// Click to cancel pattern
export const ClickToCancelPattern: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [percent, setPercent] = useState(0);
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleClick = () => {
      if (loading) {
        // Cancel the operation
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setLoading(false);
        setPercent(0);
      } else {
        // Start the operation
        setLoading(true);
        setPercent(0);

        const duration = 5000;
        const interval = 50;
        const increment = 100 / (duration / interval);

        timerRef.current = setInterval(() => {
          setPercent((prev) => {
            const next = prev + increment;
            if (next >= 100) {
              if (timerRef.current) clearInterval(timerRef.current);
              setTimeout(() => {
                setLoading(false);
                setPercent(0);
              }, 500);
              return 100;
            }
            return next;
          });
        }, interval);
      }
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <ProgressButton
          loading={loading}
          percent={percent}
          onClick={handleClick}
        >
          {loading
            ? percent === 100
              ? "Complete!"
              : "Click to Cancel"
            : "Start Process"}
        </ProgressButton>
        <p className="text-muted-foreground max-w-md text-center text-sm">
          {loading
            ? "Click the button again to cancel the operation"
            : "This demonstrates the 'click to cancel' pattern where the button remains interactive during loading"}
        </p>
      </div>
    );
  },
};

// Prevent re-trigger pattern
export const PreventRetrigger: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [percent, setPercent] = useState(0);
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      // Prevent re-trigger if already loading
      if (loading) {
        setClickCount((prev) => prev + 1);
        return;
      }

      setLoading(true);
      setPercent(0);

      const duration = 3000;
      const interval = 30;
      const increment = 100 / (duration / interval);

      const timer = setInterval(() => {
        setPercent((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setLoading(false);
              setPercent(0);
              setClickCount(0);
            }, 500);
            return 100;
          }
          return next;
        });
      }, interval);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <ProgressButton
          loading={loading}
          percent={percent}
          onClick={handleClick}
        >
          {loading ? `Processing... ${Math.round(percent)}%` : "Start Process"}
        </ProgressButton>
        <div className="text-muted-foreground max-w-md space-y-2 text-center text-sm">
          <p>
            This demonstrates preventing re-trigger. Try clicking the button
            multiple times during loading.
          </p>
          {clickCount > 0 && (
            <p className="text-destructive font-medium">
              Blocked {clickCount} click{clickCount > 1 ? "s" : ""} during
              loading
            </p>
          )}
        </div>
      </div>
    );
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex w-full max-w-[600px] flex-col gap-4">
      <ProgressButton loading={false} percent={0}>
        Not Loading
      </ProgressButton>
      <ProgressButton loading percent={0}>
        0% - Starting
      </ProgressButton>
      <ProgressButton loading percent={25}>
        25% - Loading
      </ProgressButton>
      <ProgressButton loading percent={50}>
        50% - Halfway
      </ProgressButton>
      <ProgressButton loading percent={75}>
        75% - Almost Done
      </ProgressButton>
      <ProgressButton loading percent={100}>
        100% - Complete!
      </ProgressButton>
      <ProgressButton loading percent={50} disabled>
        Disabled at 50%
      </ProgressButton>
    </div>
  ),
};
