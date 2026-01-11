import './home-gretting.css'

export enum GreetingType {
    Morning = 'Good morning',
    Afternoon = 'Good afternoon',
    Evening = 'Good evening',
}

type GreetingProps = {
    greeting: GreetingType;
    name: string;
    subtitle?: string;
};

export function HomeGreeting({
                                     greeting,
                                     name,
                                     subtitle = 'Overview of your life data'
                                 }: GreetingProps) {
    return (
        <section className="greeting">
            <p className="greeting-eyebrow">{greeting},</p>

            <h1 className="greeting-name">
                {name}
            </h1>

            <p className="greeting-subtitle">
                {subtitle}
            </p>
        </section>
    );
}