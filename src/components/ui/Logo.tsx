import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'transparent';
  borderColor?: string; // Optional custom border color
  iconColor?: string;   // Optional custom icon color
  textColor?: string;   // Optional custom text color
}

const Logo = ({
                variant = 'default',
                borderColor = 'currentColor',
                iconColor = 'currentColor',
                textColor = 'currentColor',
              }: LogoProps) => {
  const isTransparent = variant === 'transparent';

  return (
    <Link href={'/'}>
      <div className="flex items-center space-x-2">
        {/* Logo Icon Container */}
        <div className={`
        w-8 h-8 rounded-lg flex items-center justify-center
        ${isTransparent
          ? 'border-2 bg-transparent'
          : 'bg-orange-400'
        }
      `} style={isTransparent ? { borderColor: borderColor } : {}}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ color: isTransparent ? iconColor : '#fff' }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Logo Text */}
        <span className={`
        text-2xl font-bold
        ${isTransparent
          ? textColor
            ? `text-[${textColor}]`
            : 'text-gray-800'
          : 'bg-gradient-to-r from-orange-200 to-orange-400 bg-clip-text text-transparent'
        }
      `}>
        Next Case
      </span>
      </div>
    </Link>
  );
};

export default Logo;