class Player{
    constructor(){
       this.index = null;
       this.answer = null;
       this.name = null; 
    }
    getCount(){
        var gm = database.ref('playerCount')
        gm.on("value",function(data){
          playerCount = data.val()
        })
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            answer:this.answer
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    getPlayerInfo(){
        var players1 = database.ref('players')
        players1.on("value",function(data) {
            allPlayers = data.val()
        })
    }
}