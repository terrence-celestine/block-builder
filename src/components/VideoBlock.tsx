// src/components/blocks/VideoBlock.tsx
interface VideoBlockProps {
    url?: string;
  }
  
const VideoBlock = ({ url = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: VideoBlockProps) => {
    return (
      <div className="w-full aspect-video overflow-hidden rounded-lg bg-black">
        <iframe
          className="w-full h-full"
          src={url}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  export default VideoBlock;