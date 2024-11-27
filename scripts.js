// Rearrange player slots for upside-down layout
const positions = [
    ["LW", "ST", "RW"], // Forwards
    ["CM1", "CM2", "CM3"], // Midfielders
    ["LB", "CB1", "CB2", "RB"], // Defenders
    ["GK"], // Goalkeeper
];

positions.forEach((row, index) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = `player-row flex justify-center ${index === positions.length - 1 ? 'items-center' : ''} mb-4`;

    row.forEach((position) => {
        const slot = document.createElement("div");
        slot.id = position;
        slot.className = "player-slot bg-black text-center text-sm font-bold p-4 rounded-lg cursor-pointer w-20 h-20";
        slot.innerHTML = position;
        slot.onclick = () => addPlayerToSlot(position);

        rowDiv.appendChild(slot);
    });

    field.appendChild(rowDiv);
});

// Add player to a slot
function addPlayerToSlot(slotId) {
    const slot = document.getElementById(slotId);
    const player = players.find((p) => p.position === slotId);

    if (player) {
        slot.innerHTML = `
            <div class="card flex flex-col items-center p-2 rounded-lg bg-yellow-300">
                <img src="${player.photo}" alt="${player.name}" class="w-20 h-28 rounded">
                <div class="text-center mt-2">
                    <h3 class="font-bold">${player.name}</h3>
                    <p class="text-sm">Rating: ${player.rating}</p>
                </div>
            </div>
        `;
        totalPlayers++;
        updatePlayerCount();

        // Show player modal with detailed info
        showPlayerDetails(player);
    } else {
        alert("No player available for this position!");
    }
}

// Show player details in a modal
function showPlayerDetails(player) {
    // Populate modal content
    playerDetails.innerHTML = `
        <div class="flex flex-col items-center">
            <img src="${player.photo}" alt="${player.name}" class="w-24 h-32 rounded mb-4">
            <h3 class="font-bold text-lg">${player.name}</h3>
            <p>Club: <img src="${player.logo}" alt="${player.club}" class="inline w-6 h-6"> ${player.club}</p>
            <p>Nationality: <img src="${player.flag}" alt="${player.nationality}" class="inline w-6 h-6"> ${player.nationality}</p>
            <p>Rating: ${player.rating}</p>
            ${player.position === 'GK' ? `
                <p>Diving: ${player.diving}</p>
                <p>Handling: ${player.handling}</p>
                <p>Kicking: ${player.kicking}</p>
                <p>Reflexes: ${player.reflexes}</p>
                <p>Speed: ${player.speed}</p>
                <p>Positioning: ${player.positioning}</p>
            ` : `
                <p>Pace: ${player.pace}</p>
                <p>Shooting: ${player.shooting}</p>
                <p>Passing: ${player.passing}</p>
                <p>Dribbling: ${player.dribbling}</p>
                <p>Defending: ${player.defending}</p>
                <p>Physical: ${player.physical}</p>
            `}
        </div>
    `;
    // Make modal visible
    playerModal.classList.remove("hidden");
}

// Close the modal
function closePlayerModal() {
    // Hide the modal
    playerModal.classList.add("hidden");
}

// Add event listener for debugging
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
});
