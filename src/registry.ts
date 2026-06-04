import { 
  Type, Image as ImageIcon, Columns, MousePointer, 
  Minus, ArrowDown, MessageSquare, Film, List 
} from 'lucide-react';

import Hero from './components/Hero';
import TextBlock from './components/TextBlock';
import TwoColumn from './components/TwoColumn';
import ImageBlock from './components/ImageBlock';
import ButtonBlock from './components/ButtonBlock';
import DividerBlock from './components/DividerBlock';
import SpacerBlock from './components/SpacerBlock';
import QuoteBlock from './components/QuoteBlock';
import VideoBlock from './components/VideoBlock';
import ListBlock from './components/ListBlock';

export const ComponentRegistry = {
  hero: { component: Hero, icon: ImageIcon },
  text: { component: TextBlock, icon: Type },
  columns: { component: TwoColumn, icon: Columns },
  image: { component: ImageBlock, icon: ImageIcon },
  button: { component: ButtonBlock, icon: MousePointer },
  divider: { component: DividerBlock, icon: Minus },
  spacer: { component: SpacerBlock, icon: ArrowDown },
  quote: { component: QuoteBlock, icon: MessageSquare },
  video: { component: VideoBlock, icon: Film },
  list: { component: ListBlock, icon: List },
};