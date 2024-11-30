document.addEventListener("DOMContentLoaded", () => {
    const playersData = [
        {
            "players": [
              {
                Name: "Lionel Messi",
                Photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
                Position: "RW",
                Nationality: "Argentina",
                Flag: "https://cdn.sofifa.net/flags/ar.png",
                Club: "Inter Miami",
                Logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
                Rating: 93,
                Pace: 85,
                Shooting: 92,
                Passing: 91,
                Dribbling: 95,
                Defending: 35,
                Phisical: 65
              },
              {
                Name: "Cristiano Ronaldo",
                Photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
                Position: "ST",
                Nationality: "Portugal",
                Flag: "https://cdn.sofifa.net/flags/pt.png",
                Club: "Al Nassr",
                Logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
                Rating: 91,
                Pace: 84,
                Shooting: 94,
                Passing: 82,
                Dribbling: 87,
                Defending: 34,
                Phisical: 77
              },
              {
                Name: "Kevin De Bruyne",
                Photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
                Position: "CM",
                Nationality: "Belgium",
                Flag: "https://cdn.sofifa.net/flags/be.png",
                Club: "Manchester City",
                Logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
                Rating: 91,
                Pace: 74,
                Shooting: 86,
                Passing: 93,
                Dribbling: 88,
                Defending: 64,
                Phisical: 78
              },
              {
                Name: "Kylian Mbappé",
                Photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
                Position: "ST",
                Nationality: "France",
                Flag: "https://cdn.sofifa.net/flags/fr.png",
                Club: "Real Madrid",
                Logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
                Rating: 92,
                Pace: 97,
                Shooting: 89,
                Passing: 80,
                Dribbling: 92,
                Defending: 39,
                Phisical: 77
              },
              {
                Name: "Virgil van Dijk",
                Photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
                Position: "CB",
                Nationality: "Netherlands",
                Flag: "https://cdn.sofifa.net/flags/nl.png",
                Club: "Liverpool",
                Logo: "https://cdn.sofifa.net/meta/team/8/120.png",
                Rating: 90,
                Pace: 75,
                Shooting: 60,
                Passing: 70,
                Dribbling: 72,
                Defending: 92,
                Phisical: 86
              },
              {
                Name: "Antonio Rudiger",
                Photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
                Position: "CB",
                Nationality: "Germany",
                Flag: "https://cdn.sofifa.net/flags/de.png",
                Club: "Real Madrid",
                Logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
                Rating: 88,
                Pace: 82,
                Shooting: 55,
                Passing: 73,
                Dribbling: 70,
                Defending: 86,
                Phisical: 86
              },
              {
                Name: "Neymar Jr",
                Photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
                Position: "LW",
                Nationality: "Brazil",
                Flag: "https://cdn.sofifa.net/flags/br.png",
                Club: "Al-Hilal",
                Logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
                Rating: 90,
                Pace: 91,
                Shooting: 83,
                Passing: 86,
                Dribbling: 94,
                Defending: 37,
                Phisical: 61
              },
              {
                Name: "Mohamed Salah",
                Photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
                Position: "RW",
                Nationality: "Egypt",
                Flag: "https://cdn.sofifa.net/flags/eg.png",
                Club: "Liverpool",
                Logo: "https://cdn.sofifa.net/meta/team/8/120.png",
                Rating: 89,
                Pace: 93,
                Shooting: 87,
                Passing: 81,
                Dribbling: 90,
                Defending: 45,
                Phisical: 75
              },
              {
                Name: "Joshua Kimmich",
                Photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
                Position: "CM",
                Nationality: "Germany",
                Flag: "https://cdn.sofifa.net/flags/de.png",
                Club: "Bayern Munich",
                Logo: "https://cdn.sofifa.net/meta/team/503/120.png",
                Rating: 89,
                Pace: 70,
                Shooting: 75,
                Passing: 88,
                Dribbling: 84,
                Defending: 84,
                Phisical: 81
              },
              {
                Name: "Jan Oblak",
                Photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
                Position: "GK",
                Nationality: "Slovenia",
                Flag: "https://cdn.sofifa.net/flags/si.png",
                Club: "Atletico Madrid",
                Logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
                Rating: 91,
                Diving: 89,
                Handling: 90,
                Kicking: 78,
                Reflexes: 92,
                Speed: 50,
                Positioning: 88
              },
              {
                Name: "Luka Modrić",
                Photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
                Position: "CM",
                Nationality: "Croatia",
                Flag: "https://cdn.sofifa.net/flags/hr.png",
                Club: "Real Madrid",
                Logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
                Rating: 88,
                Pace: 74,
                Shooting: 78,
                Passing: 89,
                Dribbling: 90,
                Defending: 72,
                Phisical: 65
              },
              {
                Name: "Vinicius Junior",
                Photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
                Position: "LW",
                Nationality: "Brazil",
                Flag: "https://cdn.sofifa.net/flags/br.png",
                Club: "Real Madrid",
                Logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
                Rating: 89,
                Pace: 91,
                Shooting: 88,
                Passing: 85,
                Dribbling: 94,
                Defending: 39,
                Phisical: 61
              },
              {
                Name: "Brahim Diáz",
                Photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
                Position: "LW",
                Nationality: "Morocco",
                Flag: "https://cdn.sofifa.net/flags/ma.png",
                Club: "Real Madrid",
                Logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
                Rating: 82,
                Pace: 85,
                Shooting: 74,
                Passing: 78,
                Dribbling: 85,
                Defending: 31,
                Phisical: 56
              },
              {
                Name: "Karim Benzema",
                Photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
                Position: "ST",
                Nationality: "France",
                Flag: "https://cdn.sofifa.net/flags/fr.png",
                Club: "Al-Ittihad",
                Logo :"https://cdn.sofifa.net/meta/team/476/120.png",
                Rating: 90,
                Pace: 77,
                Shooting: 90,
                Passing: 83,
                Dribbling: 88,
                Defending: 40,
                Phisical: 78
              },
              {
                Name: "Erling Haaland",
                Photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
                Position: "ST",
                Nationality: "Norway",
                Flag: "https://cdn.sofifa.net/flags/no.png",
                Club: "Manchester City",
                Logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
                Rating: 91,
                Pace: 89,
                Shooting: 94,
                Passing: 65,
                Dribbling: 80,
                Defending: 45,
                Phisical: 88
              },
              {
                Name: "N'Golo Kanté",
                Photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
                Position: "CDM",
                Nationality: "France",
                Flag: "https://cdn.sofifa.net/flags/fr.png",
                Club: "Al-Ittihad",
                Logo: "https://cdn.sofifa.net/meta/team/476/120.png",
                Rating: 87,
                Pace: 77,
                Shooting: 66,
                Passing: 75,
                Dribbling: 82,
                Defending: 88,
                Phisical: 82
              },
              {
                Name: "Alphonso Davies",
                Photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
                Position: "LB",
                Nationality: "Canada",
                Flag: "https://cdn.sofifa.net/flags/ca.png",
                Club: "Bayern Munich",
                Logo: "https://cdn.sofifa.net/meta/team/503/120.png",
                Rating: 84,
                Pace: 96,
                Shooting: 68,
                Passing: 77,
                Dribbling: 82,
                Defending: 76,
                Phisical: 77
              },
              {
                Name: "Yassine Bounou",
                Photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
                Position: "GK",
                Nationality: "Morocco",
                Flag: "https://cdn.sofifa.net/flags/ma.png",
                Club: "Al-Hilal",
                Logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
                Rating: 84,
                Diving: 81,
                Handling: 82,
                Kicking: 77,
                Reflexes: 86,
                Speed: 38,
                Positioning: 83
              },
              {
                Name: "Bruno Fernandes",
                Photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
                Position: "CM",
                Nationality: "Portugal",
                Flag: "https://cdn.sofifa.net/flags/pt.png",
                Club: "Manchester United",
                Logo: "https://cdn.sofifa.net/meta/team/14/120.png",
                Rating: 88,
                Pace: 75,
                Shooting: 85,
                Passing: 89,
                Dribbling: 84,
                Defending: 69,
                Phisical: 77
              },
              {
                Name: "Jadon Sancho",
                Photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
                Position: "LW",
                Nationality: "England",
                Flag: "https://cdn.sofifa.net/flags/gb-eng.png",
                Club: "Manchester United",
                Logo: "https://cdn.sofifa.net/meta/team/14/120.png",
                Rating: 84,
                Pace: 85,
                Shooting: 74,
                Passing: 78,
                Dribbling: 88,
                Defending: 34,
                Phisical: 63
              },
              {
                Name: "Trent Alexander-Arnold",
                Photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
                Position: "RB",
                Nationality: "England",
                Flag: "https://cdn.sofifa.net/flags/gb-eng.png",
                Club: "Liverpool",
                Rating: 87,
                Pace: 76,
                Shooting: 66,
                Passing: 89,
                Dribbling: 80,
                Defending: 79,
                Phisical: 71
              },
              {
                Name: "Achraf Hakimi",
                Photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
                Position: "RB",
                Nationality: "Morocco",
                Flag: "https://cdn.sofifa.net/flags/ma.png",
                Club: "Paris Saint-Germain",
                Logo: "https://cdn.sofifa.net/meta/team/591/120.png",
                Rating: 84,
                Pace: 91,
                Shooting: 76,
                Passing: 80,
                Dribbling: 80,
                Defending: 75,
                Phisical: 78
              },
              {
                Name: "Youssef En-Nesyri",
                Photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
                Position: "ST",
                Nationality: "Morocco",
                Flag: "https://cdn.sofifa.net/flags/ma.png",
                Club: "Fenerbahçe",
                Logo: "https://cdn.sofifa.net/meta/team/88/120.png",
                Rating: 83,
                Pace: 82,
                Shooting: 82,
                Passing: 63,
                Dribbling: 77,
                Defending: 36,
                Phisical: 80
              },
              {
                Name: "Noussair Mazraoui",
                Photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
                Position: "LB",
                Nationality: "Morocco",
                Flag: "https://cdn.sofifa.net/flags/ma.png",
                Club: "Manchester United",
                Logo: "https://cdn.sofifa.net/meta/team/14/120.png",
                Rating: 81,
                Pace: 78,
                Shooting: 66,
                Passing: 77,
                Dribbling: 83,
                Defending: 77,
                Phisical: 71
              },
              {
                Name: "Ismael Saibari",
                Photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
                Position: "CM",
                Nationality: "Morocco",
                Flag: "https://cdn.sofifa.net/flags/ma.png",
                Club: "PSV",
                Logo: "https://cdn.sofifa.net/meta/team/682/120.png",
                Rating: 83,
                Pace: 89,
                Shooting: 78,
                Passing: 80,
                Dribbling: 86,
                Defending: 55,
                Phisical: 84
              },
              {
                Name: "Gianluigi Donnarumma",
                Photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
                Position: "GK",
                Nationality: "Italy",
                Flag: "https://cdn.sofifa.net/flags/it.png",
                Club: "Paris Saint-Germain",
                Logo: "https://cdn.sofifa.net/meta/team/591/120.png",
                Rating: 89,
                Diving: 88,
                Handling: 84,
                Kicking: 75,
                Reflexes: 90,
                Speed: 50,
                Positioning: 85
              }
            ]        
          }

    ];

function closePlayerModal() {
    document.getElementById('playerModal').classList.add('hidden');
}

let playersArray = [
    { players: [] }
  ];
  console.log(playersArray);
  
  
  function savePlayerModal() {
    console.log("Button clicked");
    const name = document.getElementById("playerName").value;
    const photo = document.getElementById("playerPhoto").value;
    const position = document.getElementById("playerPosition").value;
    const nationality = document.getElementById("playerNationality").value;
    const flag = document.getElementById("playerFlag").value;
    const club = document.getElementById("playerClub").value;
    const logo = document.getElementById("playerLogo").value;
    const rating = document.getElementById("playerRating").value;
    const pace = document.getElementById("playerPace").value;
    const shooting = document.getElementById("playerShooting").value;
    const passing = document.getElementById("playerPassing").value;
    const dribbling = document.getElementById("playerDribbling").value;
    const defending = document.getElementById("playerDefending").value;
    const physical = document.getElementById("playerPhysical").value;
  
    const newPlayer = {
      Name: name,
      Photo: photo,
      Position: position,
      Nationality: nationality,
      Flag: flag,
      Club: club,
      Logo: logo,
      Rating: rating,
      Pace: pace,
      Shooting: shooting,
      Passing: passing,
      Dribbling: dribbling,
      Defending: defending,
      Phisical: physical
    };
  
    playersArray[0].players.push(newPlayer);
  
    addPlayerCard(newPlayer);

    console.log(playersArray);
    
  
    document.getElementById("playerForm").reset();
    closePlayerModal();
  }

  document.getElementById('save').addEventListener('click', savePlayerModal); 


console.log(playersArray);

  
  function addPlayerCard(player) {
    const addedCardsContainer = document.getElementById("addedCardsContainer");
    const cardAdded = document.createElement("div");
    cardAdded.className =
      "flex flex-col items-center p-4 bg-black border-2 bg-opacity-65 rounded-3xl shadow-md hover:shadow-xl transition-shadow";
  
    cardAdded.innerHTML = `
      <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${player.Photo}" alt="${player.Name}">
      <h3 class="text-lg font-bold text-white">${player.Name}</h3>
      <p class="text-sm text-white">${player.Position} | ${player.Nationality}</p>
      <img class="w-6 h-4 mt-2" src="${player.Flag}" alt="${player.Nationality}">
      <div class="text-center mt-3 text-gray-300">
        <p><strong>Rating:</strong> ${player.Rating}</p>
        <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-white">
          <div><strong>PAC:</strong> ${player.Pace}</div>
          <div><strong>SHO:</strong> ${player.Shooting}</div>
          <div><strong>PAS:</strong> ${player.Passing}</div>
          <div><strong>DRI:</strong> ${player.Dribbling}</div>
          <div><strong>DEF:</strong> ${player.Defending}</div>
          <div><strong>PHY:</strong> ${player.Phisical}</div>
        </div>
      </div>
    `;
  
    addedCardsContainer.appendChild(cardAdded);
  }
  
  // Close the modal function
  function closePlayerModal() {
    document.getElementById("playerModal").classList.add("hidden");
  }
  
    

    const cardsContainer = document.getElementById("cardsContainer");
    const staticCard = document.getElementById("staticCard");
    // 1
    playersData[0].players.forEach(player => {
        const card = document.createElement("div");
        card.className =
            "flex flex-col items-center p-4 bg-black border-2 bg-opacity-65 rounded-3xl shadow-md hover:shadow-xl transition-shadow";
        
        console.log(player.Position);
        
        card.innerHTML = `
            ${player.Position === "GK" ? `
                <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${player.Photo}" alt="${player.Name}">
                <h3 class="text-lg font-bold text-white">${player.Name}</h3>
                <p class="text-sm text-white">${player.Position} | ${player.Nationality}</p>
                <img class="w-6 h-4 mt-2" src="${player.Flag}" alt="${player.Nationality}">
                <div class="text-center mt-3 text-gray-300">
                    <p><strong>Rating:</strong> ${player.Rating}</p>
                    <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-white">
                        <div><strong>DIV:</strong> ${player.Diving}</div>
                        <div><strong>HAN:</strong> ${player.Handling}</div>
                        <div><strong>KIC:</strong> ${player.Kicking}</div>
                        <div><strong>REF:</strong> ${player.Reflexes}</div>
                        <div><strong>SPD:</strong> ${player.Speed}</div>
                        <div><strong>POS:</strong> ${player.Positioning}</div>
                    </div>
                </div>
                <div class="flex h-20 gap-1">
                <button class="mt-4 bg-black text-white border-2 rounded-md py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
                <button class="mt-4 bg-black text-white border-2 rounded-md py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerSubsDataBtn">Add reserves</button>
                </div>
            ` : `
                <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${player.Photo}" alt="${player.Name}">
                <h3 class="text-lg font-bold text-white">${player.Name}</h3>
                <p class="text-sm text-white">${player.Position} | ${player.Nationality}</p>
                <img class="w-6 h-4 mt-2" src="${player.Flag}" alt="${player.Nationality}">
                <div class="text-center mt-3 text-gray-300">
                    <p><strong>Rating:</strong> ${player.Rating}</p>
                    <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-white">
                        <div><strong>PAC:</strong> ${player.Pace}</div>
                        <div><strong>SHO:</strong> ${player.Shooting}</div>
                        <div><strong>PAS:</strong> ${player.Passing}</div>
                        <div><strong>DRI:</strong> ${player.Dribbling}</div>
                        <div><strong>DEF:</strong> ${player.Defending}</div>
                        <div><strong>PHY:</strong> ${player.Phisical}</div>
                    </div>
                </div>
         <div class="flex h-20 gap-1">
                <button class="mt-4 bg-black text-white border-2 rounded-md py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
                <button class="mt-4 bg-black text-white border-2 rounded-md py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerSubsDataBtn">Add reserves</button>
                </div>
            `}
        `;
        
          
          cardsContainer.appendChild(card);
          const showPlayerDataBtn = card.querySelector("#showPlayerDataBtn");
      showPlayerDataBtn.addEventListener("click", () => {
  
          const positionSlot = document.getElementById(player.Position); 
  
          if (positionSlot) {
            positionSlot.innerHTML = `
            ${player.Position === "GK" ? `
                <div id="subCard1" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                    <button class="h-40" aria-label="Card Button">
                        <img src="CARDft.png" class="w-28 h-40">
                        <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28 mt-2">
                            <div class="">
                                <div class="flex">
                                    <div class="text-sm relative left-1.5 flex flex-col">
                                        <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${player.Rating}</span>
                                        <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${player.Club}</span>
                                    </div>
                                    <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                        <img src="${player.Photo}" class="w-18" alt="">
                                    </div>
                                </div>
                                <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                    <span class="font-bold text-[0.5rem]">${player.Name}</span>
                                </div>
                                <div id="specs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DIV</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Diving}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">HAN</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Handling}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">KIC</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Kicking}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">REF</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Reflexes}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SPD</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Speed}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">POS</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Positioning}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            ` : `
                <div id="subCard1" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                    <button class="h-40" aria-label="Card Button">
                        <img src="CARDft.png" class="w-28 h-40">
                        <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28 mt-2">
                            <div class="">
                                <div class="flex">
                                    <div class="text-sm relative left-1.5 flex flex-col">
                                        <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${player.Rating}</span>
                                        <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${player.Club}</span>
                                    </div>
                                    <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                        <img src="${player.Photo}" class="w-18" alt="">
                                    </div>
                                </div>
                                <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                    <span class="font-bold text-[0.5rem]">${player.Name}</span>
                                </div>
                                <div id="specs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAC</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Pace}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SHO</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Shooting}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAS</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Passing}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DRI</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Dribbling}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DEF</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Defending}</span></div>
                                    </div>
                                    <div>
                                        <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PHY</span></div>
                                        <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Phisical}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            `}
        `;
        
          } else {
              alert('Position not found!');
          }
      });
  
      const showPlayerSubsDataBtn = card.querySelector("#showPlayerSubsDataBtn");
      showPlayerSubsDataBtn.addEventListener("click", () => {
        const positionSlots = {
            "LW": document.getElementById("attackPositions"),
            "ST": document.getElementById("attackPositions"),
            "RW": document.getElementById("attackPositions"),
            "CM": document.getElementById("defensivePositions"),
            "GK": document.getElementById("goalPositions"),
            "CB": document.getElementById("BackPositions"),
            "LB": document.getElementById("BackPositions"),
            "RB": document.getElementById("BackPositions")
        };
    
        const positionSlot = positionSlots[player.Position];
  
  if (positionSlot) {
      positionSlot.innerHTML = "";
  
      let playerCardTemplate;
  
      if (player.Position === "GK") {
          // Template for Goalkeeper
          playerCardTemplate = `
              <div id="subCard-${player.Position}" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                  <button class="h-40" aria-label="GK Card Button">
                      <img src="CARDft.png" class="w-28 h-40">
                      <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28 mt-2">
                          <div>
                              <div class="flex">
                                  <div class="text-sm relative left-1.5 flex flex-col">
                                      <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${player.Rating}</span>
                                      <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${player.Club}</span>
                                  </div>
                                  <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                      <img src="${player.Photo}" class="w-18" alt="">
                                  </div>
                              </div>
                              <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                  <span class="font-bold text-[0.5rem]">${player.Name}</span>
                              </div>
                              <div id="gkSpecs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DIV</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Diving}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">HAN</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Handling}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">KIC</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Kicking}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">REF</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Reflexes}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SPD</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Speed}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">POS</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Positioning}</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </button>
                  <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
              </div>
          `;
      } else {
          // Template for Other Positions
          playerCardTemplate = `
              <div id="subCard-${player.Position}" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                  <button class="h-40" aria-label="Card Button">
                      <img src="CARDft.png" class="w-28 h-40">
                      <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28 mt-2">
                          <div>
                              <div class="flex">
                                  <div class="text-sm relative left-1.5 flex flex-col">
                                      <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${player.Rating}</span>
                                      <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${player.Club}</span>
                                  </div>
                                  <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                      <img src="${player.Photo}" class="w-18" alt="">
                                  </div>
                              </div>
                              <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                  <span class="font-bold text-[0.5rem]">${player.Name}</span>
                              </div>
                              <div id="specs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAC</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Pace}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SHO</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Shooting}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAS</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Passing}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DRI</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Dribbling}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DEF</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Defending}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PHY</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Phisical}</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </button>
                  <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
              </div>
          `;
      }
            positionSlot.innerHTML = playerCardTemplate;
        } else {
            console.error("Invalid position or missing slot for player position.");
        }
    });
      
  
      });

//2 
const addedCardsContainer = document.getElementById("addedCardsContainer");

    playersArray[0].players.forEach(player => {
        const cardAdded = document.createElement("div");
        cardAdded.className =
            "flex flex-col items-center p-4 bg-black border-2 bg-opacity-65 rounded-3xl shadow-md hover:shadow-xl transition-shadow";
        
        console.log(player.Position);
        
        cardAdded.innerHTML = `
            ${player.Position === "GK" ? `
                <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${player.photo}" alt="${player.Name}">
                <h3 class="text-lg font-bold text-white">${player.Name}</h3>
                <p class="text-sm text-white">${player.Position} | ${player.Nationality}</p>
                <img class="w-6 h-4 mt-2" src="${player.Flag}" alt="${player.Nationality}">
                <div class="text-center mt-3 text-gray-300">
                    <p><strong>Rating:</strong> ${player.Rating}</p>
                    <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-white">
                        <div><strong>DIV:</strong> ${player.Diving}</div>
                        <div><strong>HAN:</strong> ${player.Handling}</div>
                        <div><strong>KIC:</strong> ${player.Kicking}</div>
                        <div><strong>REF:</strong> ${player.Reflexes}</div>
                        <div><strong>SPD:</strong> ${player.Speed}</div>
                        <div><strong>POS:</strong> ${player.Positioning}</div>
                    </div>
                </div>
                <div class="flex h-20 gap-1">
                
                </div>
            ` : `
                <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${player.Photo}" alt="${player.Name}">
                <h3 class="text-lg font-bold text-white">${player.Name}</h3>
                <p class="text-sm text-white">${player.Position} | ${player.Nationality}</p>
                <img class="w-6 h-4 mt-2" src="${player.Flag}" alt="${player.Nationality}">
                <div class="text-center mt-3 text-gray-300">
                    <p><strong>Rating:</strong> ${player.Rating}</p>
                    <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-white">
                        <div><strong>PAC:</strong> ${player.Pace}</div>
                        <div><strong>SHO:</strong> ${player.Shooting}</div>
                        <div><strong>PAS:</strong> ${player.Passing}</div>
                        <div><strong>DRI:</strong> ${player.Dribbling}</div>
                        <div><strong>DEF:</strong> ${player.Defending}</div>
                        <div><strong>PHY:</strong> ${player.Phisical}</div>
                    </div>
                </div>
         <div class="flex h-20 gap-1">

                </div>
            `}
        `;
        
          
        addedCardsContainer.appendChild(cardAdded);
  
        const positionSlots = {
            "LW": document.getElementById("attackPositions"),
            "ST": document.getElementById("attackPositions"),
            "RW": document.getElementById("attackPositions"),
            "CM": document.getElementById("defensivePositions"),
            "GK": document.getElementById("goalPositions"),
            "CB": document.getElementById("BackPositions"),
            "LB": document.getElementById("BackPositions"),
            "RB": document.getElementById("BackPositions")
        };
    
        const positionSlot = positionSlots[player.Position];
  
  if (positionSlot) {
      positionSlot.innerHTML = "";
  
      let playerCardTemplate;
  
      if (player.Position === "GK") {
          // Template for Goalkeeper
          playerCardTemplate = `
              <div id="subCard-${player.Position}" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                  <button class="h-40" aria-label="GK Card Button">
                      <img src="CARDft.png" class="w-28 h-40">
                      <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28 mt-2">
                          <div>
                              <div class="flex">
                                  <div class="text-sm relative left-1.5 flex flex-col">
                                      <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${player.Rating}</span>
                                      <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${player.Club}</span>
                                  </div>
                                  <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                      <img src="${player.Photo}" class="w-18" alt="">
                                  </div>
                              </div>
                              <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                  <span class="font-bold text-[0.5rem]">${player.Name}</span>
                              </div>
                              <div id="gkSpecs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DIV</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Diving}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">HAN</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Handling}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">KIC</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Kicking}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">REF</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Reflexes}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SPD</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Speed}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">POS</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Positioning}</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </button>
                  <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
              </div>
          `;
      } else {
          // Template for Other Positions
          playerCardTemplate = `
              <div id="subCard-${player.Position}" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                  <button class="h-40" aria-label="Card Button">
                      <img src="CARDft.png" class="w-28 h-40">
                      <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28 mt-2">
                          <div>
                              <div class="flex">
                                  <div class="text-sm relative left-1.5 flex flex-col">
                                      <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${player.Rating}</span>
                                      <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${player.Club}</span>
                                  </div>
                                  <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                      <img src="${player.Photo}" class="w-18" alt="">
                                  </div>
                              </div>
                              <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                  <span class="font-bold text-[0.5rem]">${player.Name}</span>
                              </div>
                              <div id="specs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAC</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Pace}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SHO</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Shooting}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAS</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Passing}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DRI</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Dribbling}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DEF</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Defending}</span></div>
                                  </div>
                                  <div>
                                      <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PHY</span></div>
                                      <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Phisical}</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </button>
                  <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
              </div>
          `;
      }
            positionSlot.innerHTML = playerCardTemplate;
        } else {
            console.error("Invalid position or missing slot for player position.");
        }
    });
      });

    function updatePlayerData(position) {
      const player = players[position];
      const display = document.getElementById("playerDisplay");

      display.innerHTML = `
          <div class="flex justify-center p-4">
              <img src="${player.Photo}" alt="${player.Name}" class="w-[6rem] h-[8rem] rounded-lg shadow-md" />
          </div>
          <div class="text-center">
              <h3 class="text-xl font-semibold">${player.Name}</h3>
              <p>Position: ${player.Position}</p>
              <p>Club: ${player.Club}</p>
              <p>Rating: ${player.Rating}</p>
          </div>
      `;
  }

  document.getElementById("LWButton").addEventListener("click", () => updatePlayerData("LW"));
  document.getElementById("STButton").addEventListener("click", () => updatePlayerData("ST"));
  document.getElementById("RWButton").addEventListener("click", () => updatePlayerData("RW"));
  document.getElementById("CM1Button").addEventListener("click", () => updatePlayerData("CM1"));
  document.getElementById("CM2Button").addEventListener("click", () => updatePlayerData("CM2"));
  document.getElementById("CM3Button").addEventListener("click", () => updatePlayerData("CM3"));
  document.getElementById("LBButton").addEventListener("click", () => updatePlayerData("LB"));
  document.getElementById("CB1Button").addEventListener("click", () => updatePlayerData("CB1"));
  document.getElementById("CB2Button").addEventListener("click", () => updatePlayerData("CB2"));
  document.getElementById("RBButton").addEventListener("click", () => updatePlayerData("RB"));
  document.getElementById("GKButton").addEventListener("click", () => updatePlayerData("GK"));


    playerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const playerData = {
          Name: playerForm.querySelector("input[name='name']").value,
          Photo: playerForm.querySelector("input[name='photo']").value,
          Position: playerForm.querySelector("input[name='position']").value,
          Nationality: playerForm.querySelector("input[name='nationality']").value,
          Flag: playerForm.querySelector("input[name='flag']").value || "", 
          Rating: playerForm.querySelector("input[name='rating']").value || "N/A",
          Pace: playerForm.querySelector("input[name='pace']").value || 0,
          Shooting: playerForm.querySelector("input[name='shooting']").value || 0,
          Passing: playerForm.querySelector("input[name='passing']").value || 0,
          Dribbling: playerForm.querySelector("input[name='dribbling']").value || 0,
          Defending: playerForm.querySelector("input[name='defending']").value || 0,
          Phisical: playerForm.querySelector("input[name='phisical']").value || 0,
      };
  
      if (playerData.Name && playerData.Photo && playerData.Position && playerData.Nationality) {
          playersData[0].players.push(playerData);
  
          const card = document.createElement("div");
          card.className = "flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow";
          card.innerHTML = `
              <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${playerData.Photo}" alt="${playerData.Name}">
              <h3 class="text-lg font-bold">${playerData.Name}</h3>
              <p class="text-sm text-gray-400">${playerData.Position} | ${playerData.Nationality}</p>
              <img class="w-6 h-4 mt-2" src="${playerData.Flag}" alt="${playerData.Nationality}">
              <div class="text-center mt-3">
                  <p><strong>Rating:</strong> ${playerData.Rating}</p>
                  <div class="grid grid-cols-2 gap-2 mt-2 text-xs">
                      <div><strong>PAC:</strong> ${playerData.Pace}</div>
                      <div><strong>SHO:</strong> ${playerData.Shooting}</div>
                      <div><strong>PAS:</strong> ${playerData.Passing}</div>
                      <div><strong>DRI:</strong> ${playerData.Dribbling}</div>
                      <div><strong>DEF:</strong> ${playerData.Defending}</div>
                      <div><strong>PHY:</strong> ${playerData.Phisical}</div>
                  </div>
              </div>  
          `;
          cardsContainer.appendChild(card);
  
          modal.classList.add("hidden");
      } else {
          alert("Please fill in all the required fields.");
      }
  });
  

    const addPlayerButton = document.querySelector("button[onclick='']");
    const modal = document.getElementById("playerModal");
    const cancelModalButton = document.getElementById("cancelPlayerModal");
    const playerForm = document.getElementById("playerForm");

    addPlayerButton.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.style.opacity = 0;
        modal.style.transform = "translateY(-20px)";
        modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        requestAnimationFrame(() => {
            modal.style.opacity = 1;
            modal.style.transform = "translateY(0)";
        });
    });

    cancelModalButton.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    playerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const playerData = {
            name: playerForm.querySelector("input[name='name']").value,
            photo: playerForm.querySelector("input[name='photo']").value,
            position: playerForm.querySelector("input[name='position']").value,
            nationality: playerForm.querySelector("input[name='nationality']").value,
            club: playerForm.querySelector("input[name='club']").value,
        };

        if (
            playerData.name &&
            playerData.photo &&
            playerData.position &&
            playerData.nationality &&
            playerData.club
        ) {
            playersData.push(playerData); 
            modal.classList.add("hidden");
            console.log("Player added:", playerData);
        }
    });
document.getElementById('navToggle').addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('hidden');
  });
  

function openPlayerModal() {
    document.getElementById("playerModal").classList.remove("hidden");
}

function closePlayerModal() {
    document.getElementById("playerModal").classList.add("hidden");
}

function savePlayer() {
    closePlayerModal();
}
