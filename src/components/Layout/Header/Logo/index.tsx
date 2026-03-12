import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {}

const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/images/logo/dig.svg"
                alt="logo"
                width={117}
                height={34}
                style={{ width: '100px', height: '100px' }}
                quality={100}
                priority={true}
            />
        </Link>
    );
};

export default Logo;