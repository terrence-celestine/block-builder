// src/components/blocks/ListBlock.tsx
interface ListBlockProps {
    items?: string[];
    ordered?: boolean;
  }
  
  const ListBlock = ({ 
    items = ["Item 1", "Item 2", "Item 3"], 
    ordered = false 
  }: ListBlockProps) => {
    const ListTag = ordered ? 'ol' : 'ul';
    
    return (
      <ListTag className={`${ordered ? 'list-decimal' : 'list-disc'} pl-5 space-y-2 py-2`}>
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ListTag>
    );
  };

export default ListBlock;