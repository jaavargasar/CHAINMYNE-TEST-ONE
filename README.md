This application was built with React Native
node version: v20.15.1
npm version: 10.7.0

To be able to run the application, first you need to install the dependencies:

npm install

Then you can run the application with the following command:

npm start

After it run with success you can check the functionality with the following way:

-   After npm start has finished, you can type the letter w and wait for the browser to be open and shows the application running
-   Please download the application in the PlayStore or in the apple store called: "Expo", inside there is an option to scan
    a QR code. After npm start finished, it will show a QR which it can be scanned and then the application will run locally in your
    personal cellphone

This mobile app will call Coin Gecko API to retrieve the latest coin market data. For this inside the component List I am calling the api doing a GET request to the following endpoint

https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&per_page=5&precision=2&order=market_cap_desc

As default the outcome values will be shown in canadian dollars. Just up to 5 values will be shown and It will pick the most popular crypto coins that have a good market cap, because it will select the coins in descending order from the highest to the minimun.

I try to put the minor comments inside the code, 'Cause I believe the code should talk by itself and be ready to be understood by anyone, so it can readable and organized.
