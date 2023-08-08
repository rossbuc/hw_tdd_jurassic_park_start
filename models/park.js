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
}

module.exports = Park