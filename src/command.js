class ghost {
    constructor(name, description, evidence) {
        this.name = name
        this.description = description
        this.evidence = evidence
    }
}
// Different type of evidence:
const evidences = ["Freezing", "EMF 5", "Ghost Orbs", "Spirit Box", "Ghost Writing", "Fingerprints"]

// Making all the ghosts
const spirit = new.ghost("Spirit", "A Spirit is the most common Ghost you will come across, but it is still very powerful and dangerous. It is usually discovered at one of its hunting grounds after an unexplained death. It has no special strengths. Smudge sticks affect Spirits by preventing them from hunting for about three minutes.", [evidences[3], evidences[5], evidences[4]])

const wraith = new.ghost("Wraith", "A Wraith is one of the most dangerous ghosts you will find. It is the only known Ghost that has the ability of flight, and has sometimes been known to see through doors and go through walls. Salt is toxic to a Wraith.", [evidences[0], evidences[3], evidences[5]])

const phantom = new.ghost("Phantom", "A Phantom is a fear-inducing ghost, quickly draining the sanity of those who view it. Taking a picture of it will make it disappear temporarily. Although rumored to possess the living, it has no ability to actually do so. It is said to be commonly summoned by a Ouija Board, although players cannot summon one themselves, nor does a Phantom's presence guarantee that a Ouija Board will spawn.", [evidences[0], evidences[1], evidences[2]])

const poltergeist = new.ghost("Poltergeist", "One of the most famous ghosts, a Poltergeist, also known as a noisy ghost, can manipulate multiple objects around it to spread fear into its victims.", [evidences[2], evidences[3], evidences[5]])

const banshee = new.ghost("Banshee", "Banshees are described as natural hunters. They will attempt to slowly stalk and pick off ghost hunters one by one by selectively targeting one investigator at a time. Banshees fear the Crucifix, increasing its effectiveness against them.", [evidences[0], evidences[1], evidences[5]])

const jinn = new.ghost("Jinn", "A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at high speeds, and will do so while hunting distant paranormal investigators. However, cutting off power via the Fuse Box will limit its speed.", [evidences[1], evidences[2], evidences[3]])

const mare = new.ghost("Mare", "The source of all nightmares, a Mare is a ghost that grows more aggressive in the dark. Keeping the lights on and remaining out of dark areas will limit its aggression. Beware, as it will also attempt to turn the lights off to empower itself.", [evidences[0], evidences[2], evidences[3]])

const revenant = new.ghost("Revenant", "A Revenant is a violent ghost that can attack indiscriminately, as it is capable of switching its current target mid-hunt. Hiding from it will cause it to move slowly, but it will travel faster than any other Ghost in the game if a victim is in its sights.", [evidences[1], evidences[4], evidences[5]])

const shade = new.ghost("Shade", "A Shade is considered to be a shy ghost. While it is harder to find evidence while investigators remain in groups, a Shade is far less likely to attack if there are multiple people nearby.", [evidences[1], evidences[2], evidences[4]])

const demon = new.ghost("Demon", "A Demon is one of the worst ghosts to encounter. Being highly aggressive, it will attack more often than any other Ghost, so a crucifix is recommended to prevent Hunts. However, asking the demon successful questions from the Ouija Board will not drain the player's sanity.", [evidences[0], evidences[3], evidences[4]])

const yurei = new.ghost("Yurei", "A Yurei is a ghost whose ability increases the passive drain of a player's sanity (Although most ghosts drain your sanity rather quickly). Smudging the room a Yurei was found in will prevent it from wandering from the location for a long time.", [evidences[0], evidences[2], evidences[4]])

const oni = new.ghost("Oni", "An Oni is an aggressive ghost who scales its activity level with the number of nearby investigators. This is its greatest weakness, as it will likely reveal itself early in the round. It is also likely to wander around near the Ghost Room.", [evidences[1], evidences[3], evidences[4]])