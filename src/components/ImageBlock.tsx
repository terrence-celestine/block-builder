// src/components/blocks/ImageBlock.tsx
interface ImageBlockProps {
    src?: string;
    alt?: string;
  }
  
const ImageBlock = ({ 
    src = "https://via.placeholder.com/800x400", 
    alt = "Placeholder image" 
  }: ImageBlockProps) => {
    return (
      <div className="w-full overflow-hidden rounded-lg">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover" 
        />
      </div>
    );
  };

  export default ImageBlock;