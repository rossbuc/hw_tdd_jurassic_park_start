class Park {
    constructor(name, ticketPrice, dinosaurCollection) {
        this.name = name
        this.ticketPrice = ticketPrice
        this.dinosaurCollection = dinosaurCollection
    }

    addDino(dino) {
        this.dinosaurCollection.push(dino)
    }

    removeDino(dino) {
        this.dinosaurCollection.pop()
    }

    findBestDino() {
        let bestDino = 0
        for (let i = 0; i < this.dinosaurCollection.length - 1; i++) {
            let thisDino = this.dinosaurCollection[i].guestsAttractedPerDay
            let nextDino = this.dinosaurCollection[i + 1].guestsAttractedPerDay
            if (thisDino > nextDino && thisDino > bestDino) {
                bestDino = this.dinosaurCollection[i]
            }
        }
        return bestDino
    }

    findSpecies(species) {
        const dinosOfSpecies = []
        for (let dino of this.dinosaurCollection) {
            if (dino.species == species) {
                dinosOfSpecies.push(dino)
            }
        }
        return dinosOfSpecies
    }

    calculateTotalVisitors() {
        let total = 0
        for (let dino of this.dinosaurCollection) {
            total += dino.guestsAttractedPerDay
        }
        return total
    }

    calculateTotalVisitorsPerYear() {
        let total = this.calculateTotalVisitors() * 365
        return total
    }

    calculateTotalRevenue() {
        let total = this.calculateTotalVisitorsPerYear() * 10
        return total
    }

    removeSpecies(species) {
        let dinosLeft = []
        for (let dino of this.dinosaurCollection) {
            if (dino.species !==  species) {
                dinosLeft.push(dino)
            }
        }

        this.dinosaurCollection = dinosLeft

    }

    dietTypes() {
        let dinoDiets = {}
        for (let dino of this.dinosaurCollection) {
            if (dino.diet in dinoDiets) {
                dinoDiets[dino.diet] += 1
            }
            else {
                dinoDiets[dino.diet] = 1
            }
        }
        return dinoDiets
    }
}

module.exports = Park