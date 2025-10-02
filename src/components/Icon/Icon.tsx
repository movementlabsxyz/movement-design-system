// Re-export Phosphor icons except Polygon to avoid conflict
// import * as PhosphorIcons from "@phosphor-icons/react";
// // const { PolygonIcon, ...phosphorIconsWithoutPolygon } = PhosphorIcons as unknown as Record<string, PhosphorIcons.Icon>;

// const { PolygonIcon,  ...phosphorIconsWithoutPolygon } = PhosphorIcons;
// // eslint-disable-next-line react-refresh/only-export-components
export * from "@phosphor-icons/react";
// export { phosphorIconsWithoutPolygon,  };

// // Re-export Phosphor Polygon with a different name
// export { PolygonIcon as PhosphorPolygon };

// eslint-disable-next-line react-refresh/only-export-components
// export * from "./AllAssetIcons";

// Export crypto icons individually to avoid linting issues
export {
  BitcoinIcon,
  EthereumIcon,
  SolanaIcon,
  USDCIcon,
  USDTIcon,
  MoveIcon,
  MovementIcon,
} from "./CryptoIcons";
