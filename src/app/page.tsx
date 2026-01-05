import { Header } from "@/shared/components/layout/header/Header";
import { PrimaryAction } from '@/shared/components/buttons/PrimaryAction';
import { ModuleCard } from '@/shared/components/cards/ModuleCard';
import { LockedModuleCard } from '@/shared/components/cards/LockedModuleCard';

import '@/styles/home.css';


export default function Home() {
    return (
        <main className="home">
            <section className="header">
                <Header/>
            </section>

            <section className="primary-action">
                <PrimaryAction label="Add body record" />
            </section>

            <section className="modules">
                <h2>Your modules</h2>

                <ModuleCard
                    title="Body metrics"
                    record="Last record: 72.4 kg"
                    updated="Updated 2 days ago"
                />
            </section>

            <section className="coming-soon">
                <h2>Coming soon</h2>

                <div className="coming-soon-grid">
                    <LockedModuleCard title="Emotional diary" />
                    <LockedModuleCard title="Finance" />
                    <LockedModuleCard title="Agenda" />
                </div>
            </section>
        </main>
    );
}
