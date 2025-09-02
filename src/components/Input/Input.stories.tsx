import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import { css } from "styled-system/css";
import { flex, stack } from "styled-system/patterns";

import { formControlSizeValues, formControlStateValues } from "@/recipes";
import { capitalize } from "@/utils";

import { IconButton } from "../Buttons";
import { FormField } from "../FormField";
// Importing these icons from the specific files they were declared in rather than from the index file
// greatly improves performance in the Storybook dev server. Unfortunately these imports may break
// in the future if the icon generation output changes.
import { IconMagnifyingGlass } from "../Icons/generated/IconsChunk4";
import { IconEye, IconEyeSlash } from "../Icons/generated/IconsChunk6";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

/** The component with all default props other than the example placeholder. */
export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    disabled: false,
  },
};

/**
 * Pass in an icon component or any React component that accepts a `className` prop and it will be
 * displayed to the left of the input text.
 */
export const WithLeadIcon: Story = {
  args: {
    placeholder: "Search...",
    LeadIcon: IconMagnifyingGlass,
  },
};

/**
 * Pass in an icon component or any React component that accepts a `className` prop and it will be
 * displayed to the right of the input text.
 *
 * In this example, a component is created that wraps an icon with `IconButton` and toggles the
 * password visibility on click. Since this custom component accepts a `className` as a prop and
 * forwards the prop to the underlying icon component, the component can be passed to `Input`'s
 * `TailIcon` prop.
 */
export const WithTailIcon: Story = {
  render: (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const VisibilityToggle = useCallback(({ className }: { className?: string }) => {
      const [icon, setIcon] = useState(<IconEyeSlash className={className} />);
      return (
        <IconButton
          size="sm"
          variant="text"
          className={css({ p: "0", h: "[unset]" })} // Remove padding from button
          ariaLabel="Toggle Visibility"
          onClick={() =>
            setIsVisible((prevIsVisible) => {
              setIcon(
                prevIsVisible ? (
                  <IconEyeSlash className={className} />
                ) : (
                  <IconEye className={className} />
                ),
              );
              return !prevIsVisible;
            })
          }
        >
          {icon}
        </IconButton>
      );
    }, []);

    return <Input {...props} type={isVisible ? "text" : "password"} TailIcon={VisibilityToggle} />;
  },
  args: {
    placeholder: "Password",
  },
};

export const AllSizes: Story = {
  render: (props) => (
    <div
      className={flex({
        align: "center",
        justify: "space-between",
        gap: "24",
        wrap: "wrap",
        "& > *": { w: "[unset]" },
      })}
    >
      {formControlSizeValues.map((size) => (
        <Input key={size} size={size} {...props} />
      ))}
    </div>
  ),
  args: {
    placeholder: "Search...",
    LeadIcon: IconMagnifyingGlass,
  },
};

export const AllStatesWithLabels: Story = {
  render: (props) => (
    <div className={flex({ gap: "24", wrap: "wrap" })}>
      {formControlStateValues.map((state) => (
        <FormField key={state} label={capitalize(state)} state={state}>
          {(formControlProps) => <Input state={state} {...formControlProps} {...props} />}
        </FormField>
      ))}
      <FormField label="Disabled">
        {(formControlProps) => <Input disabled {...formControlProps} {...props} />}
      </FormField>
    </div>
  ),
  args: {
    placeholder: "Placeholder",
  },
};

export const WithLabelAndDescription: Story = {
  render: (props) => (
    <div className={stack({ gap: "24" })}>
      {formControlStateValues.map((state) => (
        <FormField key={state} label="Label" description="Description" state={state}>
          {(formControlProps) => <Input state={state} {...formControlProps} {...props} />}
        </FormField>
      ))}
      <FormField label="Label" description="Description">
        {(formControlProps) => <Input disabled {...formControlProps} {...props} />}
      </FormField>
    </div>
  ),
  args: {},
};
