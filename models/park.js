class Park {
    constructor(name, ticketPrice, dinosaurCollection) {
        this.name = name
        this.ticketPrice = ticketPrice
        this.dinosaurCollection = dinosaurCollection
    }

    addDino(dino) {
        this.dinosaurCollection.push(dino)
    }
}

module.exports = Park