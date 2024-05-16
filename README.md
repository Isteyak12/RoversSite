# Expense-Tracker-App

Step 1:
creating a register.html webpage that will take in data and save it to some local json, also save it to a remote db, then redirect it to login.html

Step 2:
login.html witll check data by comparing it with json file and allow redirection to index.html also compare it to a remote db

Step 3:
An interactive home page with all the details

:::about.html::: for the about webpage i downloaded the images folder from a repo using this website: ~https://kinolien.github.io/gitzip/
~https://download-directory.github.io/

so according to this workflow by using flask framework:
app.py-> templates:: index.html->login.html
#problem of not being able to execute outside templates directory which is the ddefault directory #for flask web app/engine/jinja
hence,

    solution1: just using cmd based exec py code style rather than frame work style since it is py
               file after all
    solution2: bringing all the files or folders within templates directory as homepage(home.html) webapp
               is connected to other files as well
               (which seemed to be a problem as the server was specific for flask app but not for other files)

               according to the following syntax, as home.html is being read from py file so it somehow is executable even if it is not in the template directory::
               @app.route('/home')
               def home():
                with open('home.html', 'r') as f:
                home_content = f.read()
                return home_content

    issue w/ solution1: during deployment
             solution2: all cluttered up not sure yet if that is a problem

    WHY py framework?
        -to handle more complex tasks with data in terms of common server side services



:::border animation blueprint:::

    solution:/* Define the keyframe animation for the border */

@keyframes animated-border {
0% {
border-color: blue;
}

25% {
border-color: red;
}

50% {
border-color: yellow;
}

75% {
border-color: green;
}

100% {
border-color: blue;
}
}

/_ Apply the animation to the pseudo-elements for left and right borders _/
body::before,
body::after {
content: '';
position: absolute;
top: 0;
bottom: 0;
width: 5px; /_ Adjust the width of the border as needed _/
border: 5px solid transparent;
z-index: -1;
animation: animated-border 8s infinite linear;
}

body::before {
left: 0;
}

body::after {
right: 0;
}

/_ Rest of your CSS styles... _/



-in the db.py file I have created the blueprint of database w/ the help of gpt based on a php blueprint   
 that i had
--------------------------------
database connection via xampp and globalprotectVPN uwindsor based server connection into mysql localhost 
--problem: need to find how it can be connected online instead or rather having a proper way for           
  deployment 


  sample idea (solution-like): 
    Certainly! Here are a few examples of public APIs that provide access to financial data and might be relevant for your fintech web application:

Plaid API: Plaid offers APIs for accessing banking and financial data, including transactions, account balances, and income verification. It's commonly used by fintech applications for integrating with banks and financial institutions.
Website: Plaid API
Open Banking APIs: Many banks and financial institutions offer open banking APIs that provide access to customer account information, transactions, and other financial data. These APIs comply with regulatory standards such as PSD2 in Europe.
Example: Open Banking UK
Alpha Vantage API: Alpha Vantage provides APIs for accessing stock market data, including real-time and historical stock prices, technical indicators, and more.
Website: Alpha Vantage
CoinGecko API: CoinGecko offers APIs for accessing cryptocurrency data, including market prices, trading volume, historical data, and more.
Website: CoinGecko API
Yahoo Finance API: Yahoo Finance provides APIs for accessing financial market data, including stock prices, company information, market news, and more.
Website: Yahoo Finance API

Certainly! Here are a few free and open APIs that you can access without login:

1. **Alpha Vantage API:** Alpha Vantage provides free APIs for accessing stock market data, including real-time and historical stock prices, technical indicators, and more. The free tier allows for a limited number of API requests per minute.
   - Website: [Alpha Vantage](https://www.alphavantage.co/)

2. **CoinGecko API:** CoinGecko offers free APIs for accessing cryptocurrency data, including market prices, trading volume, historical data, and more. The API provides data on thousands of cryptocurrencies and tokens.
   - Website: [CoinGecko API](https://coingecko.com/en/api)

3. **Open Exchange Rates API:** Open Exchange Rates provides free APIs for accessing foreign exchange rates and currency conversion data. The free tier offers limited access to exchange rate data for over 170 currencies.
   - Website: [Open Exchange Rates](https://openexchangerates.org/)

4. **IEX Cloud API:** IEX Cloud offers free APIs for accessing stock market data, including real-time and historical stock prices, market statistics, and more. The free tier has limitations on the number of API requests per month.
   - Website: [IEX Cloud API](https://iexcloud.io/)

5. **Financial Modeling Prep API:** Financial Modeling Prep provides free APIs for accessing financial data, including stock market data, company financials, economic indicators, and more. The free tier offers limited access to data and requires an API key.
   - Website: [Financial Modeling Prep](https://financialmodelingprep.com/developer/docs/)

These APIs provide a range of financial data and are available for free without requiring login or authentication. However, make sure to review the documentation and terms of use for each API to understand its limitations and usage policies.


So when i tried to access an API it will be some separate unrelated data from the login credentials so its like i would have to have API from the login part

--issue: brand new user needs to have a history 
so better to use preexisting data, or a random generator to cause data simulation once login occurs  