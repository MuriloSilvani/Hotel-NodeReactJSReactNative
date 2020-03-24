# Hotel API - NodeJS
Aplicação teste: service api desenvolvido em NodeJS.

## How to run Application
git clone [git@github.com:MuriloSilvani/Hotel-ServerNodeJS.git](git@github.com:MuriloSilvani/Hotel-ServerNodeJS.git)

cd Hotel-ServerNodeJS

npm install

yarn start

Now, if all its right the application will be running.
In other case, you can send me a mail to help on murilo.silvani@gmail.com 


### Projeto consumindo a api(mobile em React Native): [here](https://github.com/MuriloSilvani/Hotel-ClientReactNative)

### Projeto consumindo a api(web em ReactJS): [here](https://github.com/MuriloSilvani/Hotel-ClientReactJS)

# Available Rotes 
### User
post: /newUser<br/>

### Place
post: /newPlace<br/>
get: /listPlace<br/>

### DashBoard
get: /listPlacesByUser<br/>

### Booking
post: /place/:place_id/booking<br/>

# Rotes to be developed 
### User
put: /updateUser/:id<br/>
delete /deleteUser/:id<br/>
get /listUser<br/>
get /listUser/:id<br/>

### Place
put: /updatePlace/:id<br/>
delete: /deletePlace/:id<br/>
get: /listPlace/:id<br/>
