/**
 * Format Activity data
 */
export class Activity {
    constructor(data) {
        data && data.day? this.day = data.day : this.day = "0000-01-01"
        data && data.kilogram? this.kilogram = data.kilogram : this.kilogram = 0
        data && data.calories? this.calories = data.calories : this.calories = 0
    }
}
