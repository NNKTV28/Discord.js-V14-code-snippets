/*
* @author NNKtv28
* This code can be added to your index.js or bot.js file, whatever file you use to start the bot when you have handlers
*
Structure:
┗ DiscordBotFolder (main folder where all your bot files are)
  ┗ src
    ┗ handlers (folder)
      ┗ commandHandlers (example)
        ┣ handler1.js (example)
        ┣ handler2.js (example)
        ┣ handler3.js (example)
        ┗ handler4.js (example)
      ┗ eventHandlers (example)
        ┣ handler1.js (example)
        ┣ handler2.js (example)
        ┣ handler3.js (example)
        ┗ handler4.js (example)
    ┗ index.js (or bot.js)
*/

// Version 1 - most common way to use it
// Load handlers
fs.readdirSync('./src/handlers').forEach((dir) => { //  ./src/handlers must be the path to your handlers folder
    fs.readdirSync(`./src/handlers/${dir}`).forEach((handler) => { // ./src/handlers/${dir} reads the folders inside the handlers folder
        require(`./handlers/${dir}/${handler}`)(client); // ./handlers/${dir}/${handler} reads each file inside each handler subfolder using the handler in .forEach((handler) 
    });
});

// Version 2 - defined Handlers folder
const handlersFolder = "./src/handlers" // define the handlers folder so in case it changes you dont need to change it everywhere
// Load handlers
fs.readdirSync(handlersFolder).forEach((dir) => { //  ./src/handlers must be the path to your handlers folder
    fs.readdirSync(`${handlersFolder}/${dir}`).forEach((handler) => { // ./src/handlers/${dir} reads the folders inside the handlers folder
        require(`./handlers/${dir}/${handler}`)(client); // ./handlers/${dir}/${handler} reads each file inside each handler subfolder using the handler in .forEach((handler) 
    });
});

// Version 3 - With error handling
// Load handlers
try{
  fs.readdirSync('./src/handlers').forEach((dir) => { //  ./src/handlers must be the path to your handlers folder
    fs.readdirSync(`./src/handlers/${dir}`).forEach((handler) => { // ./src/handlers/${dir} reads the folders inside the handlers folder
        require(`./handlers/${dir}/${handler}`)(client); // ./handlers/${dir}/${handler} reads each file inside each handler subfolder using the handler in .forEach((handler) 
    });
  });
}catch (err){
  console.log(err);
}


