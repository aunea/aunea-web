import Greeting from '@/shared/components/Greeting'
import {getGreetingByHour} from '@/shared/utils/getGreetingByHour'
import './globals.css';

export default function HomePage() {
    return (
        <main className="home">
            <div className="">
                <Greeting
                    greeting={getGreetingByHour()}
                    name="Bella"
                />
            </div>
        </main>
    );
}
