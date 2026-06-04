// src/components/blocks/TwoColumn.tsx

interface TwoColumnProps {
  leftContent?: string;
  rightContent?: string;
}

const TwoColumn = ({ 
  leftContent = "Left Column", 
  rightContent = "Right Column" 
}: TwoColumnProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full p-4 border border-gray-200 rounded">
      <div className="p-2 border border-dashed border-gray-300">
        {leftContent}
      </div>
      <div className="p-2 border border-dashed border-gray-300">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumn;