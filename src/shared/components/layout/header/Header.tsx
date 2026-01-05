import { AssistantHeader } from '@/shared/components/assistent/AssistantHeader';
import { HeaderMenu } from '@/shared/components/layout/header/HeaderMenu';

import './header.css';
export function Header() {
    return (
        <header>
            <HeaderMenu
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Body metrics', href: '/modules/body-metrics' },
                    { label: 'Settings', href: '/modules/settings' },
                ]}
            />

            <AssistantHeader
                greeting="Good morning, Isabella"
                subtitle="Here's a quick overview of your data"
            />
        </header>
    );
}
