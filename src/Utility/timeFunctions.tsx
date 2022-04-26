export class timeFunctions {
    static formatTime = (time: string) : string => {
        const [weekDay] = [
            new Date(time).toLocaleString('en-US', { hour: 'numeric', hour12: true }),
        ]
        return weekDay
    }
}
