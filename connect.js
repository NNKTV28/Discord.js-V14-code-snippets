/*
* @author NNKtv28
* This code is to connect to your MongoDB database
* to use this, in your index.js file add the following line between the `client.login` and `const client` lines
* // Connect to database
* require("./database/connect")(); // path to your database folder (based on the file structure mentioned below)
*
File structure:
┗ DiscordBotFolder (main folder where all your bot files are)
  ┗ src
    ┗ database (folder)
      ┗ models (here will go all your schemas or modules)
        ┣ model1.js (example)
        ┣ model2.js (example)
        ┣ model3.js (example)
        ┗ model4.js (example)
      ┗ connect.js (required to connect to the MongoDb Database)
    ┣ .env (required for the `process.env.MONGO_TOKEN`) example: MONGO_TOKEN = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER_NAME.YOUR_CLUSTER_ID.mongodb.net/?retryWrites=true&w=majority"
    ┗ index.js (or bot.js)
*/

const mongoose = require('mongoose'); // mongoose module, can install with npm i mongoose (required to access mongoDB databases)
const chalk = require('chalk'); // chalk module, can install with npm i chalk (required to get the funny console colors when doing console.log)
const mongo_url = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER_NAME.YOUR_CLUSTER_ID.mongodb.net/?retryWrites=true&w=majority"; // here goes the url to your mongoDB database
// connect function
async function connect() {
    mongoose.set('strictQuery', false);
    try {
        console.log(chalk.blue(chalk.bold(`Database`)), (chalk.white(`>>`)), chalk.red(`MongoDB`), chalk.green(`is connecting...`))
        await mongoose.connect(process.env.MONGO_TOKEN || mongo_url, { // if not using the dotenv module, the connection string will need to be specifyed in the mongo_url
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.log(chalk.red(`[ERROR]`), chalk.white(`>>`), chalk.red(`MongoDB`), chalk.white(`>>`), chalk.red(`Failed to connect to MongoDB!`), chalk.white(`>>`), chalk.red(`Error: ${err}`))
        console.log(chalk.red("Exiting..."))
        process.exit(1)
    }


    mongoose.connection.once("open", () => {
        console.log(chalk.blue(chalk.bold(`Database`)), (chalk.white(`>>`)), chalk.red(`MongoDB`), chalk.green(`is ready!`))
    });

    mongoose.connection.on("error", (err) => {
        console.log(chalk.red(`[ERROR]`), chalk.white(`>>`), chalk.red(`Database`), chalk.white(`>>`), chalk.red(`Failed to connect to MongoDB!`), chalk.white(`>>`), chalk.red(`Error: ${err}`))
        console.log(chalk.red("Exiting..."))
        process.exit(1)
    });
    return;
}

module.exports = connect
