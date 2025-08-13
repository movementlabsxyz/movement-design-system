import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { flex, stack } from "styled-system/patterns";

import Card from "./Card";
import {
  cardContentStyles,
  cardHeaderStyles,
  cardBodyStyles,
  cardFooterStyles,
  cardGridStyles,
} from "./card.styles";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    hoverEffect: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    height: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a basic glass card",
    height: "200px",
    width: "300px",
  },
};

const sectionHeadingStyles = css({
  color: "text.secondary",
  borderBottomStyle: "solid",
  borderBottomWidth: "1",
  borderBottomColor: "border.secondary",
  pb: "2",
  mb: "4",
});

export const BasicCards: Story = {
  render: (props) => (
    <div className={stack({ gap: "6" })}>
      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Different Sizes</h2>
        <div
          className={flex({
            gap: "4",
            align: "center",
            justify: "space-between",
          })}
        >
          <Card {...props} size="sm">
            <div className={cardContentStyles}>Small Card</div>
          </Card>
          <Card {...props} size="md">
            <div className={cardContentStyles}>Medium Card</div>
          </Card>
          <Card {...props} size="lg">
            <div className={cardContentStyles}>Large Card</div>
          </Card>
        </div>
      </div>

      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>With Hover Effect</h2>
        <div
          className={flex({
            gap: "4",
            align: "center",
            justify: "space-between",
          })}
        >
          <Card {...props} size="sm" hoverEffect>
            <div className={cardContentStyles}>Hover me</div>
          </Card>
          <Card {...props} size="md" hoverEffect>
            <div className={cardContentStyles}>Hover me</div>
          </Card>
          <Card {...props} size="lg" hoverEffect>
            <div className={cardContentStyles}>Hover me</div>
          </Card>
        </div>
      </div>

      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Clickable Cards</h2>
        <div
          className={flex({
            gap: "4",
            align: "center",
            justify: "space-between",
          })}
        >
          <Card
            {...props}
            size="sm"
            hoverEffect
            onClick={() => alert("Card clicked!")}
          >
            <div className={cardContentStyles}>Click me</div>
          </Card>
          <Card
            {...props}
            size="md"
            hoverEffect
            onClick={() => alert("Card clicked!")}
          >
            <div className={cardContentStyles}>Click me</div>
          </Card>
          <Card
            {...props}
            size="lg"
            hoverEffect
            onClick={() => alert("Card clicked!")}
          >
            <div className={cardContentStyles}>Click me</div>
          </Card>
        </div>
      </div>
    </div>
  ),
  args: {
    children: "Glass Card",
  },
};

export const Variants: Story = {
  render: () => (
    <div className={stack({ gap: "6" })}>
      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Card Variants</h2>
        <div
          className={flex({
            gap: "4",
            align: "center",
            justify: "space-between",
          })}
        >
          <Card variant="default" size="md" hoverEffect>
            <div className={cardContentStyles}>Default</div>
          </Card>
          <Card variant="elevated" size="md" hoverEffect>
            <div className={cardContentStyles}>Elevated</div>
          </Card>
          <Card variant="outlined" size="md" hoverEffect>
            <div className={cardContentStyles}>Outlined</div>
          </Card>
        </div>
      </div>

      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Loading States</h2>
        <div
          className={flex({
            gap: "4",
            align: "center",
            justify: "space-between",
          })}
        >
          <Card variant="default" size="sm" loading>
            <div className={cardContentStyles}>Loading...</div>
          </Card>
          <Card variant="elevated" size="md" loading>
            <div className={cardContentStyles}>Loading...</div>
          </Card>
          <Card variant="outlined" size="lg" loading>
            <div className={cardContentStyles}>Loading...</div>
          </Card>
        </div>
      </div>
    </div>
  ),
  args: {
    children: "Variants",
  },
};

export const ContentShowcase: Story = {
  render: () => (
    <div className={stack({ gap: "6" })}>
      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Article Card</h2>
        <Card height="300px" width="500px" hoverEffect variant="elevated">
          <div
            className={css({
              h: "full",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <div className={cardHeaderStyles}>
              <h3
                className={css({
                  fontSize: "lg",
                  fontWeight: "bold",
                  mb: "2",
                  color: "white",
                })}
              >
                Glass Morphism Design
              </h3>
              <p
                className={css({
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "sm",
                })}
              >
                Published on January 1, 2024
              </p>
            </div>
            <div className={cardBodyStyles}>
              <p className={css({ mb: "4", flex: "1", color: "white" })}>
                This card demonstrates the beautiful glass morphism effect with
                backdrop blur, subtle transparency, and smooth hover
                transitions. The design creates a modern, elegant interface that
                feels both sophisticated and accessible.
              </p>
            </div>
            <div className={cardFooterStyles}>
              <div
                className={flex({
                  gap: "4",
                  justify: "space-between",
                  align: "center",
                })}
              >
                <span
                  className={css({
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "sm",
                  })}
                >
                  3 min read
                </span>
                <button
                  className={css({
                    px: "4",
                    py: "2",
                    bg: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "sm",
                    fontWeight: "medium",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    _hover: { bg: "rgba(255, 255, 255, 0.3)" },
                  })}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Profile Card</h2>
        <Card height="200px" width="400px" hoverEffect variant="outlined">
          <div className={cardContentStyles}>
            <div className={flex({ gap: "4", align: "center", h: "full" })}>
              <div
                className={css({
                  w: "16",
                  h: "16",
                  bg: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "full",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "lg",
                  fontWeight: "bold",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                })}
              >
                JD
              </div>
              <div>
                <h4
                  className={css({
                    fontSize: "md",
                    fontWeight: "bold",
                    mb: "1",
                    color: "white",
                  })}
                >
                  John Doe
                </h4>
                <p
                  className={css({
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "sm",
                  })}
                >
                  Software Engineer
                </p>
                <p
                  className={css({
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "sm",
                  })}
                >
                  john.doe@example.com
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Stats Cards</h2>
        <div className={flex({ gap: "4", wrap: "wrap" })}>
          <Card height="120px" width="150px" hoverEffect variant="elevated">
            <div
              className={css({
                p: "4",
                color: "white",
                h: "full",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <div
                className={css({
                  fontSize: "2xl",
                  fontWeight: "bold",
                  mb: "2",
                })}
              >
                1,234
              </div>
              <div
                className={css({
                  fontSize: "sm",
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "center",
                })}
              >
                Total Users
              </div>
            </div>
          </Card>
          <Card height="120px" width="150px" hoverEffect variant="elevated">
            <div
              className={css({
                p: "4",
                color: "white",
                h: "full",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <div
                className={css({
                  fontSize: "2xl",
                  fontWeight: "bold",
                  mb: "2",
                })}
              >
                567
              </div>
              <div
                className={css({
                  fontSize: "sm",
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "center",
                })}
              >
                Active Users
              </div>
            </div>
          </Card>
          <Card height="120px" width="150px" hoverEffect variant="elevated">
            <div
              className={css({
                p: "4",
                color: "white",
                h: "full",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <div
                className={css({
                  fontSize: "2xl",
                  fontWeight: "bold",
                  mb: "2",
                })}
              >
                89%
              </div>
              <div
                className={css({
                  fontSize: "sm",
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "center",
                })}
              >
                Success Rate
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ),
  args: {
    children: "Content Showcase",
  },
};

export const GridLayout: Story = {
  render: () => (
    <div className={stack({ gap: "6" })}>
      <div className={stack({ gap: "4" })}>
        <h2 className={sectionHeadingStyles}>Card Grid</h2>
        <div className={cardGridStyles}>
          {Array.from({ length: 6 }, (_, i) => (
            <Card
              key={i}
              height="150px"
              hoverEffect
              variant={
                i % 3 === 0 ? "default" : i % 3 === 1 ? "elevated" : "outlined"
              }
            >
              <div className={cardContentStyles}>Card {i + 1}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
  args: {
    children: "Grid Layout",
  },
};
