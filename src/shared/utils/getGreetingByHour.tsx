import {GreetingType} from "@/shared/components/Greeting";

export function getGreetingByHour(date = new Date()): GreetingType {
    const hour = date.getHours()

    if (hour < 12) return GreetingType.Morning
    if (hour < 18) return GreetingType.Afternoon
    return GreetingType.Evening
}