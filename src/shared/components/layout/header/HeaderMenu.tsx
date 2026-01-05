import { HeaderMenuItem } from '@/shared/components/layout/header/HeaderMenuItem';

type MenuItem = {
    label: string;
    href: string;
};

type Props = {
    items: MenuItem[];
};

export function HeaderMenu({ items }: Props) {
    return (
        <nav className="header-menu">
            {items.map((item) => (
                <HeaderMenuItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                />
            ))}
        </nav>
    );
}
