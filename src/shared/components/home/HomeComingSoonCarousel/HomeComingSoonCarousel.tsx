import {Carousel, CustomCard} from "@aunea/ui-layout";
//import './'
export function HomeComingSoonCarousel() {
    return (
        <Carousel itemWidth={"20vw"}>
            <CustomCard
                title="Peso"
                value={78}
                unit="kg"
                tone="positive"
                delta={{value: -1, label: 'semana', direction: 'down'}}
            />

            <CustomCard
                title="Saldo"
                value="R$ 1.245"
                tone="positive"
                delta={{value: '+300', label: 'mês', direction: 'up'}}
            />

            <CustomCard
                title="Treinos"
                value={4}
                tone="info"
                delta={{value: '+1', label: 'semana', direction: 'up'}}
            />

            <CustomCard
                title="Humor"
                value="🙂"
                tone="neutral"
                delta={{value: 'estável', direction: 'flat'}}
            />
        </Carousel>
    );
}
