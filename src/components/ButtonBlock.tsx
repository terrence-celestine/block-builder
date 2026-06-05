// src/components/blocks/ButtonBlock.tsx
interface ButtonBlockProps {
    label?: string;
    url?: string;
    variant?: 'solid' | 'outline';
    backgroundColor?: string;
  }
  
  const ButtonBlock = ({ 
    label = "Click Me", 
    url = "#", 
    variant = "solid",
    backgroundColor = "blue"
  }: ButtonBlockProps) => {
    const baseStyles = "px-6 py-2 rounded-lg font-medium transition-colors";
    const variants = {
      solid: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    };
  
    return (
      <div className="w-full flex justify-center py-2">
        <a 
          href={url} 
          style={{ backgroundColor: backgroundColor }}
          className={`${baseStyles} ${variants[variant]} text-white`}
        >
          {label}
        </a>
      </div>
    );
  };

  export default ButtonBlock;