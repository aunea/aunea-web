'use client'

import {App, Home} from '@/shared/components'
import {getGreetingByHour} from '@/shared/utils/getGreetingByHour'
import React from "react";
import './globals.css';

export default function HomePage() {
    return (
        <main className="home">
            <App.AppMenu/>

            <div className="columns-container">
                <div className="column-left">
                    <Home.HomeGreeting className="greeting" greeting={getGreetingByHour()} name="Bella"/>
                    <div className="metrics-section">
                        <Home.HomeMetricsCarousel/>
                    </div>
                </div>
                <div className="column-right">
                    <Home.HomeAssistant/>
                </div>
            </div>

            <div className="coming-soon-section">
                <Home.HomeComingSoonCarousel/>
            </div>
            <Home.HomeAssistantCTA/>
        </main>
    );
}
