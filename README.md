

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Code Challenge</h3>

  <p align="center">
    Weather App 
    <br>
    <a href="https://drive.google.com/file/d/1TqUkDrpct7N_qnjIKbbjQ20jUD8xtBGc/view?usp=drive_link">Download apk</a>
  </p>
</div>




<!-- ABOUT THE PROJECT -->
## About The Project
<div style="display:flex; justify-content:center">
<img src="https://res.cloudinary.com/dhgfid3ej/image/upload/v1708973321/CodeChallenge/e431qru45gmk5zhrmjhg.gif"
width="200" heigth="600">

<img src="https://res.cloudinary.com/dhgfid3ej/image/upload/v1708973323/CodeChallenge/dlozuvedw4h7cmymkdal.gif"
width="200" heigth="600">
</div>



### dependencies
* lottie-react-native 
* axios
* @gorhum/BottomSheet
* react-native-svg




<!-- GETTING STARTED -->
## Getting Started

To run the application locally, the next steps must be followed:

### Prerequisites

**Only iOS**:
To run the application in the IOS simulator, you need to change the Bundle identifier in  the general tab in xcode.




### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/codeCallenge.git
   ```
2. Install NPM o YARN packages 
    ```bash
    # using npm
   $ npm install
   
   # Or using Yarn
   $ yarn
   ```
3. ***IOS only** your terminal
    ```sh
    $ cd ios/
    $ pod install
    $ cd ..
    ```
4. Enter your URLs and API_KEY in `.env`
    ```sh
    # root project in terminal
    $ touch .env
    
    # into .env 
    API_LOCATION = https://search.reservamos.mx/api/v2
    API_WEATHER = https://api.openweathermap.org/data/2.5
    API_KEY = ****
    ```

### Getting Started
1. Star the metro
    ```bash
    # using npm
    npm start
    
    # OR using Yarn
    yarn start
    ```
2. Star your Application
- For Android

    ```bash
    # using npm
    npm run android
    
    # OR using Yarn
    yarn android
    ```

- For iOS

    ```bash
    # using npm
    npm run ios
    
    # OR using Yarn
    yarn ios
    ```
<!-- USAGE EXAMPLES -->
## Usage
You can write in the input any city, and it will search it and a list of the weather for the following 7 days in that place will be shown 
