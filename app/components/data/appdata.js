angular.module("data.appData", [])

// dummy data for our application
.value("productData", {
	usedGames : [{
			name : "Madden NFL 15",
			productId : "madden_nfl_15",
			summary : "Madden NFL 15 has an all-new broadcast-style presentation, authentic NFL jumbotrons, Player Spotlight Montages, as well as new pregame and halftime shows.",
			url : "app/images/madden15.png",
			price : 54.95
		},
		{
			name : "Far Cry 4",
			productId : "far_cray_4",
			summary : "Building on its award-winning predecessor, Far Cry 4 delivers its best experience ever! Experience an entirely new integrated co-op play in the incredibly open worled of Kyrat.",
			url : "app/images/farcry.png",
			price : 59.96
		},
		{
			name : "Assassin's Creed Unity",
			productId : "acreed_unity",
			summary : "Experience the cobblestone streets of Paris in 1789 during the French revolution. Rise up with the commoners against an oppressive aristocracy. In this heroic journey, Arno tries to find out who's really behind the Revolution. His pursuit leads him into a struggle for the fate of a nation - one that will transform him into a true Master Assassin.",
			url : "app/images/creed.png",
			price : 53.83
		},
		{
			name : "Call of Duty Advanced Warfare",
			productId : "cod_adv_war",
			summary : "Join the battle of the future in a new era of combat for the Call of Duty franchise. Academy Award winning actor Kevin Spacey stars as Jonathan Irons who's bent on reshaping future of war.",
			url : "app/images/callOfDuty.png",
			price : 59.00
		},
		{
			name : "Middle Earth: Shadow of Mordor",
			productId : "mid_earth_shadow_mordor",
			summary : "As Talion, a Ranger of the Black Gate, you'll travel through brutal combos while mastering powerful new skills and weaponry in an attempt to become the most feared force in Mordor in this latest Lord of the Rings saga.",
			url : "app/images/mordor.png",
			price : 49.78
		}]
});

