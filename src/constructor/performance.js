export class Performance {
    constructor(data) {
        data && data.data ? this.data = data.data : this.data = [
            {
                "value": 0,
                "kind": 1,
                "xAxe": "Cardio"
            },
            {
                "value": 0,
                "kind": 2,
                "xAxe": "Energie"
            },
            {
                "value": 0,
                "kind": 3,
                "xAxe": "Endurance"
            },
            {
                "value": 0,
                "kind": 4,
                "xAxe": "Force"
            },
            {
                "value": 0,
                "kind": 5,
                "xAxe": "Vitesse"
            },
            {
                "value": 0,
                "kind": 6,
                "xAxe": "Intensité"
            }
        ]
        data && data.kind ? this.kind = data.kind : this.kind = {1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'}
    }
}
