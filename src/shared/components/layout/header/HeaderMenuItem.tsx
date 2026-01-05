'use client';

import { usePathname } from 'next/navigation';

type Props = {
    label: string;
    href: string;
};

export function HeaderMenuItem({ label, href }: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <a
            href={href}
            className={`header-menu-item ${isActive ? 'active' : ''}`}
        >
            {label}
        </a>
    );
}
