'use client';

import Logo from '@/components/ui/Logo';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
                                                 children,
                                                 imageSrc = '/images/auth.jpg',
                                                 imagePosition = 'left',
                                               }) => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Conditionally render image section on left or right */}
      {imagePosition === 'left' && (
        <div className="hidden lg:block lg:w-6/8 relative">
          <Image
            src={imageSrc}
            alt="Authentication background"
            layout="fill"
            objectFit="cover"
            className="z-0" // Image behind other content
          />
          {/* Overlay for better readability */}
          <div className="absolute inset-0 z-10 bg-black opacity-20"></div> {/* Added z-10 and opacity for overlay */}

          {/* Branding */}
          <div className="absolute top-8 left-8 z-20"> {/* Increased z-index for branding */}
            <Logo
              variant="transparent"
              borderColor="#fff"
              iconColor="#fff"
              textColor="#fff"
            />
          </div>
        </div>
      )}

      {/* Form Section */}
      <div className="flex-1 lg:w-2/8 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* If imagePosition is right */}
      {imagePosition === 'right' && (
        <div className="hidden lg:block lg:w-6/8 relative">
          <Image
            src={imageSrc}
            alt="Authentication background"
            layout="fill"
            objectFit="cover"
            className="z-0" // Image behind other content
          />
          <div className="absolute inset-0 z-10 bg-black opacity-20"></div> {/* Added z-10 and opacity for overlay */}
          <div className="absolute top-8 left-8 z-20"> {/* Increased z-index for branding */}
            <Logo />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
