document.addEventListener("DOMContentLoaded", () => {
  // player data with details about each player
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
    // references to the HTML elements
    const cardsContainer = document.getElementById("cardsContainer");
    const staticCard = document.getElementById("staticCard");
    // creates player cards 
    playersData[0].players.forEach(player => {
      const card = document.createElement("div");
      card.className =
          "flex flex-col items-center p-4 bg-black border-2 bg-opacity-65 rounded-3xl shadow-md hover:shadow-xl transition-shadow";
      // tfo
      console.log(player.Position);
      // incase its a goal keeper or not
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
              <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
              <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerSubsDataBtn">Add Player</button>
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
              <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtn">Add Player</button>
               <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerSubsDataBtn">Add Subs Player</button>
  
          `}
      `;
      
        
        cardsContainer.appendChild(card);
        // to add player to the team based on position
        const showPlayerDataBtn = card.querySelector("#showPlayerDataBtn");
        showPlayerDataBtn.addEventListener("click", () => {
            if (player.Position === "CM") {
                const cmSlots = [
                  // checks if slot is full
                    document.getElementById("CM1"),
                    document.getElementById("CM2"),
                ];
                // finds the first empty slot
                const emptySlot = cmSlots.find(slot => slot && !slot.innerHTML.trim());
        
                if (emptySlot) {
                    emptySlot.innerHTML = `
                    <div id="cardPlayerPrince" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
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
                      <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removePlayerPrinc">X</button>
                    </div>
                    `;
                } else {
                    alert('No empty CM slot available!');
                }
                // Check if the player's position is "CB" (Center Back)

            } else if (player.Position === "CB") {
                const cmSlots = [
                    document.getElementById("CB1"),
                    document.getElementById("CB2"),
                ];

                const emptySlot = cmSlots.find(slot => slot && !slot.innerHTML.trim());
        
                if (emptySlot) {
                    emptySlot.innerHTML = `
                    <div id="cardPlayerPrince" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
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
                        <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removePlayerPrinc">X</button>
                    </div>
                    `;
                } else {
                    alert('No empty CM slot available!');
                }
            }
             else {
        const positionSlot = document.getElementById(player.Position);

        if (positionSlot) {
          positionSlot.innerHTML = `
          ${player.Position === "GK" ? `
              <div id="cardPlayerPrince" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
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
                      <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removePlayerPrinc">X</button>

                  </button>
              </div>
          ` : `
              <div id="cardPlayerPrince" class="flex items-center justify-center w-[6rem] h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
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
                      <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removePlayerPrinc">X</button>
                  </button>
              </div>
          `}
      `;
      
        } else {
            alert('Position not found!');
        }
    }
        });

        document.addEventListener("click", (event) => {
          if (event.target && event.target.id === "removePlayerPrinc"){
            const existingSubCard = event.target.closest("#cardPlayerPrince");
            if (existingSubCard) {
              existingSubCard.remove();
            }
          }
        });
  
    const showPlayerSubsDataBtn = card.querySelector("#showPlayerSubsDataBtn");
    // Define mapping between player positions and their corresponding DOM slots
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
      // fin the slot that corresponds to the player's position

      const positionSlot = positionSlots[player.Position];
  
      if (positionSlot) {
        // clears hadak l innerhtml
          positionSlot.innerHTML = "";
  
          const playerCardTemplate = `
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
                  <div class="flex" data-position=${player.Position} data-rating=${player.Rating} data-club=${player.Club} data-photo=${player.Photo} data-name=${player.Name} data-speed=${player.Speed} data-reflexes=${player.Reflexes} data-kicking=${player.Kicking} data-handling=${player.Handling} data-diving=${player.Diving} data-positioning=${player.Positioning}>
                      <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtnSubs">Add</button>
                      <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removeSubsPlayer">X</button>
                  </div>
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
                  <div class="flex" data-position=${player.Position} data-rating=${player.Rating} data-club=${player.Club} data-photo=${player.Photo} data-name=${player.Name} data-pace=${player.Pace} data-shooting=${player.Shooting} data-passing=${player.Passing} data-dribbling=${player.Dribbling} data-defending=${player.Defending} data-physical=${player.Phisical}>
                      <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800" id="showPlayerDataBtnSubs">Add</button>
                      <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removeSubsPlayer">X</button>
                  </div>
              </div>
          `}
          `;
          // insert the generated player card into the appropriate slot

          positionSlot.innerHTML = playerCardTemplate;
      } else {
          console.error("Invalid position or missing slot for player position.");
      }
  });

  document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "removeSubsPlayer"){
      const existingSubCard = event.target.closest("#subCard1");
      if (existingSubCard) {
        existingSubCard.remove();
      }
    }
  });
  
  document.addEventListener("click", (event) => {
      if (event.target && event.target.id === "showPlayerDataBtnSubs") {
          const parentCard = event.target.closest(".flex");
          // incase makanx it closes it
          if (!parentCard) return;
  
          const position = parentCard.dataset.position;
          let playerData = {};
          // obj dial gk
          if (position === "GK") {
              playerData = {
                  Position: parentCard.dataset.position,
                  Rating: parentCard.dataset.rating,
                  Club: parentCard.dataset.club,
                  Photo: parentCard.dataset.photo,
                  Name: parentCard.dataset.name,
                  Speed: parentCard.dataset.speed || "N/A",
                  Reflexes: parentCard.dataset.reflexes || "N/A",
                  Kicking: parentCard.dataset.kicking || "N/A",
                  Handling: parentCard.dataset.handling || "N/A",
                  Diving: parentCard.dataset.diving || "N/A",
                  Positioning: parentCard.dataset.positioning || "N/A",
              };
              // obj for players
          } else {
              playerData = {
                  Position: parentCard.dataset.position,
                  Rating: parentCard.dataset.rating,
                  Club: parentCard.dataset.club,
                  Photo: parentCard.dataset.photo,
                  Name: parentCard.dataset.name,
                  Pace: parentCard.dataset.pace || "N/A",
                  Shooting: parentCard.dataset.shooting || "N/A",
                  Passing: parentCard.dataset.passing || "N/A",
                  Dribbling: parentCard.dataset.dribbling || "N/A",
                  Defending: parentCard.dataset.defending || "N/A",
                  Physical: parentCard.dataset.physical || "N/A",
              };
          }
  
          const playerPosition = playerData.Position;
          // retrieve the corresponding field slot for the player's position
          const fieldSlot = document.getElementById(playerPosition);
  
          if (!fieldSlot) return;
  
          const existingSubCard = event.target.closest("#subCard1");
          
          if (existingSubCard) {
              existingSubCard.remove();
          }
  
          const playerCard = `
              <div id="cardPlayer" class="flex items-center justify-center w-[6rem]  h-[8.8rem] shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                  <button class="h-40" aria-label="Card Button">
                      <img src="CARDft.png" class="w-28 h-40">
                      <div class="text-[#ffffff] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-[2rem] h-40 w-28 mt-2">
                          <div class="">
                              <div class="flex">
                                  <div class="text-sm relative left-1.5 flex flex-col">
                                      <span class="text-[#ffffff] relative top-2 font-bold text-lg mr-4">${playerData.Rating}</span>
                                      <span class="text-[#ffffff] relative bottom-0.5 text-[0.3rem] mr-4">${playerData.Club}</span>
                                  </div>
                                  <div id="photo" class="w-20 relative right-4 bottom-[0.275rem] mr-5">
                                      <img src="${playerData.Photo}" class="w-18" alt="">
                                  </div>
                              </div>
                              <div id="nom" class="h-3 flex items-center justify-center mr-9">
                                  <span class="font-bold text-[0.5rem]">${playerData.Name}</span>
                              </div>
                              <div id="specs" class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                  ${position === "GK" ? `
                                  <div id="specs" class="flex gap-0.5 justify-center items-start text-[0.5] mr-[2.1rem]">
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DIV</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Diving}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">HAN</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Handling}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">KIC</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Kicking}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">REF</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Reflexes}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SPD</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Speed}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">POS</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Positioning}</span></div>
                                      </div>
                                  </div>
                                  ` : `
  
                                  <div class="flex gap-0.5 justify-center items-start mr-[2.1rem]">
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAC</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Pace}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">SHO</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Shooting}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAS</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Passing}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DRI</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Dribbling}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DEF</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Defending}</span></div>
                                      </div>
                                      <div>
                                          <div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PHY</span></div>
                                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${playerData.Physical}</span></div>
                                      </div>
                                  </div>
                                  `}
                              </div>
                          </div>
                      </div>
                  </button>
                  <button class="absolute top-1 right-1 bg-black text-white border-2 rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center" id="removePlayer">X</button>
              </div>
          `;
  
          fieldSlot.innerHTML = playerCard;
      }
  });

  document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "removePlayer"){
      const existingSubCard = event.target.closest("#cardPlayer");
      if (existingSubCard) {
        existingSubCard.remove();
      }
    }
  });
  
  
    });
  // even listener for the "Save Player" button
    document.getElementById("savePlayerbtn").addEventListener("click", function () {
      const name = document.getElementById("rName").value.trim();
      const photo = document.getElementById("Photo").value.trim();
      const position = document.getElementById("Position").value;
      const nationality = document.getElementById("Nationality").value.trim();
      const flag = document.getElementById("Flag").value.trim();
      const club = document.getElementById("Club").value.trim();
      const logo = document.getElementById("Logo").value.trim();
      const rating = parseInt(document.getElementById("Rating").value, 10) || 0;
      const pace = parseInt(document.getElementById("Pace").value, 10) || 0;
      const shooting = parseInt(document.getElementById("Shooting").value, 10) || 0;
      const passing = parseInt(document.getElementById("Passing").value, 10) || 0;
      const dribbling = parseInt(document.getElementById("Dribbling").value, 10) || 0;
      const defending = parseInt(document.getElementById("Defending").value, 10) || 0;
      const physical = parseInt(document.getElementById("Physical").value, 10) || 0;
      // new player object with all the details from the form
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
        Phisical: physical,
      };
      let status =  validatePlayerForm();
      // qdd the new player object to the `playersData` array
      playersData[0].players.push(newPlayer);
    
      console.log("Player added successfully:", newPlayer);
      console.log("Updated players list:", playersData[0].players);
    
      document.getElementById("playerForm").reset();
    // create nez player card for the saved player and add it to the DOM
    if(status) {
      const newCard = createPlayerCard(newPlayer);
      cardsContainer.appendChild(newCard);
      document.getElementById("playerForm").reset();
      closePlayerModal();
    } else {
      alert("Invalid form data. Please fill all required fields correctly.");
    }
    });
    // karkeati data using the player data
    function createPlayerCard(player) {
        const card = document.createElement("div");
        card.className =
          "flex flex-col items-center p-4 bg-black border-2 bg-opacity-65 rounded-3xl shadow-md hover:shadow-xl transition-shadow";
        // set the inner HTML of the card with dynamic player data
        card.innerHTML = `
          <img class="w-24 h-24 rounded-full shadow-md mb-3" src="${player.Photo}" alt="${player.Name}">
          <h3 class="text-lg font-bold text-white">${player.Name}</h3>
          <p class="text-sm text-white">${player.Position} | ${player.Nationality}</p>
          <img class="w-6 h-4 mt-2" src="${player.Flag}" alt="${player.Nationality}">
          <div class="text-center mt-3 text-gray-300">
            <p><strong>Rating:</strong> ${player.Rating}</p>
            <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-white">
              ${
                player.Position === "GK"
                  ? `
                    <div><strong>DIV:</strong> ${player.Diving}</div>
                    <div><strong>HAN:</strong> ${player.Handling}</div>
                    <div><strong>KIC:</strong> ${player.Kicking}</div>
                    <div><strong>REF:</strong> ${player.Reflexes}</div>
                    <div><strong>SPD:</strong> ${player.Speed}</div>
                    <div><strong>POS:</strong> ${player.Positioning}</div>
                  `
                  : `
                    <div><strong>PAC:</strong> ${player.Pace}</div>
                    <div><strong>SHO:</strong> ${player.Shooting}</div>
                    <div><strong>PAS:</strong> ${player.Passing}</div>
                    <div><strong>DRI:</strong> ${player.Dribbling}</div>
                    <div><strong>DEF:</strong> ${player.Defending}</div>
                    <div><strong>PHY:</strong> ${player.Phisical}</div>
                  `
              }
            </div>
          </div>
          <button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800 test" 
            data-player='${JSON.stringify(player)}'>Add Player</button>
          ${
            player.Position !== "GK"
              ? `<button class="mt-4 bg-black text-white border-2 rounded-2xl py-2 px-4 hover:bg-slate-500 transition duration-700 active:bg-slate-800 test-subs" 
                 data-player='${JSON.stringify(player)}'>Add Subs Player</button>`
              : ""
          }
        `;
        return card;
      }
      
      document.getElementById("cardsContainer").addEventListener("click", (e) => {
        if (e.target.classList.contains("test") || e.target.classList.contains("test-subs")) {
          const playerData = JSON.parse(e.target.getAttribute("data-player"));
          const positionSlot = document.getElementById(playerData.Position);
      
          if (!positionSlot) {
            console.error("Position slot not found for:", playerData.Position);
            return;
          }
      
          positionSlot.innerHTML = generateSubCard(playerData, e.target.classList.contains("test"));
        }
      });
      
      function generateSubCard(player, isMain) {
        return `
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
                    ${
                      isMain
                        ? `
                          <div><div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">DIV</span></div>
                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Diving}</span></div></div>
                          <div><div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">HAN</span></div>
                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Handling}</span></div></div>
                          <div><div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">KIC</span></div>
                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Kicking}</span></div></div>
                        `
                        : `
                          <div><div class="h-3 flex items-center"><span class="text-[0.4rem] font-thin">PAC</span></div>
                          <div class="h-2.5 flex items-center justify-center"><span class="text-[0.4rem] font-semibold">${player.Pace}</span></div></div>
                        `
                    }
                  </div>
                </div>
              </div>
            </button>
          </div>
        `;
      }
      
  });
  
  function openPlayerModal() {
    document.getElementById("playerModal").classList.remove("hidden");
  }
  
  function closePlayerModal() {
      console.log("Closing player modal...");
    document.getElementById("playerModal").classList.add("hidden");
  }
  // // Function to validate the player form
  function validatePlayerForm() {
    let isValid = true;
  
    const rName = document.getElementById('rName').value.trim();
    if (!rName || rName.length > 50 || !/^[A-Za-z\s-]+$/.test(rName)) {
      document.getElementById('warning_rName').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('warning_rName').classList.add('hidden');
    }
  
    const photo = document.getElementById('Photo').value.trim();
    if (!photo || !/^https?:\/\/.+/.test(photo)) {
      document.getElementById('warning_Photo').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('warning_Photo').classList.add('hidden');
    }
  
    const nationality = document.getElementById('Nationality').value.trim();
    if (!nationality || !/^[A-Za-z\s]+$/.test(nationality)) {
      document.getElementById('warning_Nationality').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('warning_Nationality').classList.add('hidden');
    }
  
    const flag = document.getElementById('Flag').value.trim();
    if (!flag || !/^https?:\/\/.+/.test(flag)) {
      document.getElementById('warning_Flag').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('warning_Flag').classList.add('hidden');
    }
  
    const club = document.getElementById('Club').value.trim();
    if (!club || club.length < 2) {
      document.getElementById('warning_Club').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('warning_Club').classList.add('hidden');
    }
  
    const logo = document.getElementById('Logo').value.trim();
    if (!logo || !/^https?:\/\/.+/.test(logo)) {
      document.getElementById('warning_Logo').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('warning_Logo').classList.add('hidden');
    }
    return isValid;
  }

  // document.getElementById('savePlayerbtn').addEventListener('click', function () {
  //   console.log(validatePlayerForm());
  //   if (validatePlayerForm()) {
  //     alert('Form is valid!');
  //     closePlayerModal();

  //     document.getElementById("playerForm").reset();
      
  //   } else {
  //     alert('Please fix the highlighted errors.');

  //   }

  // });