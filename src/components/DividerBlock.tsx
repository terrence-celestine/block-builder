// src/components/blocks/DividerBlock.tsx
interface DividerBlockProps {
    thickness?: number;
    color?: string;
    margin?: number;
  }
  
const DividerBlock = ({ 
    thickness = 1, 
    color = "#e5e7eb", 
    margin = 16 
  }: DividerBlockProps) => {
    return (
      <div className="w-full" style={{ padding: `${margin}px 0` }}>
        <div 
          style={{ 
            height: `${thickness}px`, 
            backgroundColor: color 
          }} 
          className="w-full"
        />
      </div>
    );
  };

  export default DividerBlock;