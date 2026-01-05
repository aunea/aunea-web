'use client';

import { AssistantPortal } from '@/shared/components/assistent/AssistentPortal';

import './assistant.css';

type Props = {
    greeting: string;
    subtitle: string;
};

export function AssistantHeader({ greeting, subtitle }: Props) {
    return (
        <div className="assistant-header">
            <div className="aunea-text">
                <h1>{greeting}</h1>
                <p>{subtitle}</p>
            </div>

            <div className="aunea-action">
                <div className="assistant-anchor">
                    <button className="ui-button ui-button--secondary talk-to-aunea">
                        Talk to AUNE-A
                    </button>

                    <AssistantPortal />
                </div>
            </div>
        </div>
    );
}
