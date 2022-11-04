/**
 * TODO:
 */
export class AverageSessions {
    constructor(data) {
        data && data.day? this.day = data.day : this.day = 0
        data && data.sessionLength? this.sessionLength = data.sessionLength : this.sessionLength = 0
    }
}
