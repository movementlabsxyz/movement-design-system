// Re-export all Phosphor icons
// export * from "./Icon";
export * from "@phosphor-icons/react";
// import * as PhosphorIcons from "@phosphor-icons/react";
// const { PolygonIcon, ...phosphorIconsWithoutPolygon } = PhosphorIcons as unknown as Record<string, PhosphorIcons.Icon>;

// export { PolygonIcon as PhosphorPolygonIcon, ...phosphorIconsWithoutPolygon };


// Export individual crypto icon components
export {
  BitcoinIcon,
  EthereumIcon,
  SolanaIcon,
  USDCIcon,
  USDTIcon,
  MoveIcon,
  MovementIcon,
} from "./CryptoIcons";

// Export asset icons
export {
  USDCIcon as USDCAssetIcon,
  USDTIcon as USDTAssetIcon,
  MoveIcon as MoveAssetIcon,
} from "./AssetIcons";

// Export all asset icons
export * from "./AllAssetIcons";
