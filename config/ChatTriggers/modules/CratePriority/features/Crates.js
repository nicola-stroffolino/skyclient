import config from "../config.js";

const COLOR = '&d&l'
const base = '&d'






// Finding what pre
register("chat", () => {
  const x = Player.getX()
  const y = Player.getY()
  const z = Player.getZ()
  if(config().crates == true) {
    if (z > -100){
      if(x > -90){
        pre = 'EQUALS';
      }
      if(x < -90){
        pre = 'SLASH';
      }
    }
    if ( z < -100){
      if ( x > -90){
        pre = 'TRI';
      }
      if ( x < -90){
        pre = 'X';
      }
        
    }
    ChatLib.chat(`&5&l[&r&dGarbAddons&5&l]&r&c PRE = ${ pre }`)
    Client.showTitle(`${COLOR}PRE = ${pre}`, "", 0, 40, 0,)
  }
}).setCriteria("[NPC] Elle: Head over to the main platform, I will join you when I get a bite!")

// Finding what is missing and notify
register("chat", (player, crate) => {
  
  if(config().crates == true) {
    if (config().pro == false) { 
      let missing = crate
      // Shop Missing
      if (missing == 'Shop'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO X Cannon`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X Cannon`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      // Tri Missing
      if (missing == 'Triangle'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}PULL SQUARE`, `${base}NEXT: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      //Equals Missing
      if (missing == 'Equals'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}PULL SQUARE`, `${base}NEXT: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      // Slash Missing
      if (missing == 'Slash'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}PULL SQUARE`, `${base}Next: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
      }
      // Square Missing
      if (missing == 'Square'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
      }
      // X Cannon Missing
      if (missing == 'X Cannon'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre =='SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      // X Missing
      if (missing == 'X'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}PULL SQUARE`, `${base}Next: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      ChatLib.chat(`&5&l[&r&dGarbAddons&5&l]&r&c MISSING = ${ missing }`)
    }
    if (config().pro == true) { 
      let missing = crate
      // Shop Missing
      if (missing == 'Shop'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO X Cannon`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X Cannon`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      // Tri Missing
      if (missing == 'Triangle'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}PULL SQUARE AND X CANNON`, `${base}NEXT: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE AND X CANNON \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      //Equals Missing
      if (missing == 'Equals'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}PULL SQUARE AND X CANNON`, `${base}NEXT: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE AND X CANNON \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      // Slash Missing
      if (missing == 'Slash'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}PULL SQUARE AND X CANNON`, `${base}Next: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE AND X CANNON \n${COLOR}NEXT: GRAB SHOP`)
        }
      }
      // Square Missing
      if (missing == 'Square'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
      }
      // X Cannon Missing
      if (missing == 'X Cannon'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      // X Missing
      if (missing == 'X'){
        if (pre == 'TRI'){
          Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
          Client.showTitle(`${COLOR}PULL SQUARE AND X CANNON`, `${base}Next: GRAB SHOP`, 0, 80, 0,)
          ChatLib.chat(`${COLOR}PULL SQUARE AND X CANNON \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'EQUALS'){
          Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
          Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
          ChatLib.chat(`${COLOR}GO SQUARE`)
        }
      }
      ChatLib.chat(`&5&l[&r&dGarbAddons&5&l]&r&c MISSING = ${ missing }`)
    }
  }
}).setCriteria('Party > ${player}: No ${crate}!')

// /ct simulate [NPC] Elle: Head over to the main platform, I will join you when I get a bite!
// /ct simulate Party > the_garbageman09: No Slash!