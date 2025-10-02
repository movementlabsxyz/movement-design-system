import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'assets');
const outputFilePath = path.join(__dirname, 'AllAssetIcons.tsx');

// List of all SVG files in the assets directory
const assetFiles = [
  'aptos-logo.svg',
  'avalanche.svg',
  'binance.svg',
  'bnb-logo.svg',
  'bnb.svg',
  'bsc.svg',
  'coinbase.svg',
  'dai.svg',
  'enzo_btc.svg',
  'enzobtc.svg',
  'eth-logo.svg',
  'eth.svg',
  'ez-eth.svg',
  'ezeth.svg',
  'husd.svg',
  'industries.svg',
  'kelp-icon.svg',
  'lbtc.svg',
  'metamask.svg',
  'move-icon.svg',
  'move-logo.svg',
  'move.svg',
  'nightly.svg',
  'petra.svg',
  'polygon.svg',
  'rabby.svg',
  'razor.svg',
  'rseth.svg',
  'sender.svg',
  'solana-logo.svg',
  'solvbtc.svg',
  'stbtc.svg',
  'susda.svg',
  'usda.svg',
  'usdc.svg',
  'usde.svg',
  'usdt.svg',
  'usdy.svg',
  'wbtc.svg',
  'weeth.svg',
  'weth.svg',
  'wsteth.svg',
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatComponentName(filename) {
  const name = filename.replace('.svg', '');
  return name
    .split('-')
    .map((part) => capitalizeFirstLetter(part))
    .join('');
}

const generateIcons = () => {
  let imports = `import { forwardRef, ReactElement } from "react";\nimport { Icon, IconBase, IconWeight } from "@phosphor-icons/react";\n\n`;
  let components = '';

  assetFiles.forEach(file => {
    const svgContent = fs.readFileSync(path.join(assetsDir, file), 'utf-8');
    const componentName = formatComponentName(file) + 'Icon';

    // Extract viewBox from SVG content
    const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 256 256'; // Default viewBox

    // Remove SVG tag and its attributes, but preserve original colors
    const cleanedSvgContent = svgContent
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>/, '')
      .replace(/stroke-width="[^"]*"/g, '')
      .replace(/style="[^"]*"/g, '') // Remove style attributes but keep fill colors
      .replace(/xlink:href=/g, 'xlinkHref='); // Convert xlink:href to xlinkHref for React

    // Check if there are multiple path elements
    const pathCount = (cleanedSvgContent.match(/<path/g) || []).length;
    const hasMultiplePaths = pathCount > 1;
    
    // // Wrap in fragment if multiple paths
    // const wrappedContent = hasMultiplePaths 
    //   ? `<>${cleanedSvgContent}</>`
    //   : cleanedSvgContent;



    const wrappedContent = `<>${cleanedSvgContent}</>`

    // Create weights map with regular weight only
    components += `
// ${componentName} Component
const ${componentName}Weights = new Map<IconWeight, ReactElement>([
  ["regular", (
    ${wrappedContent}
  )],
]);

export const ${componentName}: Icon = forwardRef((props, ref) => (
  <IconBase 
    ref={ref} 
    {...props} 
    weights={${componentName}Weights}
    viewBox="${viewBox}"
    style={{
      ...props.style
    }}
  />
));

${componentName}.displayName = "${componentName}";\n
`;
  });

  const outputContent = imports + components;
  fs.writeFileSync(outputFilePath, outputContent);
  console.log('Generated AllAssetIcons.tsx with all asset icons');
};

generateIcons();
