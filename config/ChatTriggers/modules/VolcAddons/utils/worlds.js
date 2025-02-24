import { setPlayer } from "../features/combat/HealthAlert"; // Importing function for setting player's health
import { delay } from "./thread"; // Importing delay function for asynchronous operations
import { setRegisters } from "./variables"; // Importing setRegisters function from the variables file


let world = undefined; // Variable to store the current world
export function getWorld() { return world }; // Exported function to get the current world
let tier = 0; // Variable to store the current tier (used for Kuudra and Dungeons)
export function getTier() { return tier }; // Exported function to get the current tier
let noFind = 0; // Counter to prevent infinite loops when trying to find the world

// Function to find the current zone (e.g., Hub, Dungeon, Kuudra)
export function findZone() {
    let zoneLine = Scoreboard.getLines().find((line) => line.getName().includes("⏣"));
    // Rift has a different symbol
    if (zoneLine === undefined) zoneLine = Scoreboard.getLines().find((line) => line.getName().includes("ф"));
    return zoneLine === undefined ? "None" : zoneLine.getName().removeFormatting();
}

// Function to find the current world and register/unregister features based on the world
function findWorld() {
    // Infinite loop prevention
    if (noFind === 10) return;
    noFind++;

    // Get world from tab list
    world = TabList.getNames().find(tab => tab.includes("Area"));
    if (world === undefined) {
        // If the world is not found, try again after a delay
        delay(() => findWorld(), 1000);
    } else {
        // Get world formatted
        world = world.removeFormatting();
        world = world.substring(world.indexOf(': ') + 2);

        // Get tier (for Kuudra and Dungeons)
        if (world === "Kuudra") {
            delay(() => {
                const zone = findZone();
                tier = parseInt(zone.charAt(zone.length - 2));
            }, 1000);
        }

        // Register/unregister features for the current world
        setRegisters();
        setPlayer();
    }
}

// Registering the "worldLoad" event to trigger finding the current world
register("worldLoad", () => {
    noFind = 0; // Resetting the counter when the world loads
    findWorld(); // Finding the current world and its features
});
