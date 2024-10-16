'use client';
import { type ReactNode, Fragment } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/utils/common';

export type BreadcrumbLinkProps = {
  children: ReactNode;
  href: string;
  isActive?: boolean;
};

const BreadcrumbLink = ({
  children,
  href,
  isActive = false,
}: BreadcrumbLinkProps) => (
  <li>
    <Link
      className={cn(
        'text-sm text-blue-600 capitalize transition hover:text-black',
        isActive && 'text-black'
      )}
      href={href}
    >
      {children}
    </Link>
  </li>
);

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((path) => path);

  return (
    <div>
      <ul className="flex items-center gap-1">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        {paths.map((path, index) => (
          <Fragment key={path}>
            <ChevronRight size={16} className="text-blue-600" />
            <BreadcrumbLink
              href={`/${paths.slice(0, index + 1).join('/')}`}
              isActive={index === paths.length - 1}
            >
              {path}
            </BreadcrumbLink>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
