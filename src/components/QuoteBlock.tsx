// src/components/blocks/QuoteBlock.tsx
interface QuoteBlockProps {
    quote?: string;
    author?: string;
  }
  
  const QuoteBlock = ({ 
    quote = "The only way to do great work is to love what you do.", 
    author = "Steve Jobs" 
  }: QuoteBlockProps) => {
    return (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50">
        <p className="text-xl">"{quote}"</p>
        <footer className="mt-2 text-sm font-bold text-gray-500">— {author}</footer>
      </blockquote>
    );
  };

  export default QuoteBlock;