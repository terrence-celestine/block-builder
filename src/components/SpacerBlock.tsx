// src/components/blocks/SpacerBlock.tsx
interface SpacerBlockProps {
    height?: number;
  }
  
const SpacerBlock = ({ height = 40 }: SpacerBlockProps) => {
    return (
      <div 
        className="w-full" 
        style={{ height: `${height}px` }} 
      />
    );
  };

  export default SpacerBlock;