'use client';

import Logo from '@/components/ui/Logo';

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
          <div
            className="w-full h-full bg-cover bg-top"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 "></div>

            {/* Branding */}
            <div className="absolute top-8 left-8 z-10">
              <Logo
                variant="transparent"
                borderColor="#fff"
                iconColor="#fff"
                textColor="#fff"
              />
            </div>
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
          <div
            className="w-full h-full bg-cover bg-top"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            <div className="absolute inset-0"></div>
            <div className="absolute top-8 left-8 z-10">
              <Logo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
