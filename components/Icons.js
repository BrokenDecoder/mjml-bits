import {
  Search,
  SlidersHorizontal,
  Sun,
  ArrowRight,
  ChevronDown,
  Copy,
  Check,
  Palette,
  Shapes,
  Image as ImageIconLucide,
  Gem,
  Trophy,
  Sparkles,
  Boxes,
  Layers,
  Mail,
  Flame,
  Star,
  Heart,
  Share2,
  Code,
  Play,
  Smartphone,
  Monitor,
  Download,
  RefreshCw,
  Eye,
  Wand2,
} from 'lucide-react';

export function GitHubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function HeartIcon(props) {
  return <Heart {...props} />;
}

export function ShareIcon(props) {
  return <Share2 {...props} />;
}

export function CodeIcon(props) {
  return <Code {...props} />;
}

export function CopyIcon(props) {
  return <Copy {...props} />;
}

export function CheckIcon(props) {
  return <Check {...props} />;
}

export function SearchIcon(props) {
  return <Search {...props} />;
}

export function FilterIcon(props) {
  return <SlidersHorizontal {...props} />;
}

export function SunIcon(props) {
  return <Sun {...props} />;
}

export function ArrowRightIcon(props) {
  return <ArrowRight {...props} />;
}

export function ChevronDownIcon(props) {
  return <ChevronDown {...props} />;
}

export function PaletteIcon(props) {
  return <Palette {...props} />;
}

export function ShapesIcon(props) {
  return <Shapes {...props} />;
}

export function ImageIcon(props) {
  return <ImageIconLucide {...props} />;
}

export function DiamondIcon(props) {
  return <Gem {...props} />;
}

export function TrophyIcon(props) {
  return <Trophy {...props} />;
}

export function SparklesIcon(props) {
  return <Sparkles {...props} />;
}

export function BlocksIcon(props) {
  return <Boxes {...props} />;
}

export function LayersIcon(props) {
  return <Layers {...props} />;
}

export function MailIcon(props) {
  return <Mail {...props} />;
}

export function FlameIcon(props) {
  return <Flame {...props} />;
}

export function StarIcon(props) {
  return <Star {...props} />;
}

export function PlayIcon(props) {
  return <Play {...props} />;
}

export function SmartphoneIcon(props) {
  return <Smartphone {...props} />;
}

export function MonitorIcon(props) {
  return <Monitor {...props} />;
}

export function DownloadIcon(props) {
  return <Download {...props} />;
}

export function RefreshIcon(props) {
  return <RefreshCw {...props} />;
}

export function EyeIcon(props) {
  return <Eye {...props} />;
}

export function FormatIcon(props) {
  return <Wand2 {...props} />;
}
