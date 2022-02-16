<h1> <img alt="Website Logo" src="https://www.linkpicture.com/q/favicon_20.png" height="30px" width="40px"/> Watch Party </h1>

## Title of the Project: WATCHPARTY <iframe src="https://drive.google.com/file/d/1Ox-rtoeeRkDg9ib_RaxRlQQ7zur86O_Z/preview" width="320" height="240" allow="autoplay"></iframe>
## Team Members:

<p align="center">
<a href="https://github.com/akshat45">
	<img src="https://github.com/akshat45.png" width="60px">
</a>

<a href="https://github.com/jayraikhere">
	<img src="https://github.com/jayraikhere.png" width="60px">
</a>
<a href="https://github.com/ninad-0408/">
	<img src="https://github.com/ninad-0408.png" width="60px">
</a>
</p>
<p align="center">
		<a href="https://github.com/akshat45">Akshat Gupta(2019IMT-011)</a> •
		<a href="https://github.com/jayraikhere">Jay Raikhere(2019IMT-044)</a> •
     <a href="https://github.com/ninad-0408/">Ninad Kalanke(2019IMG-042)</a> 
</p>

## Brief description of the project:
A fully functional Progressive Web App (PWA) in which users can watch synchronized online videos with their friends. This website allows the users to create/join a room and invite their friends by share the link of their room, so that other people can also join the room.

Their can be open rooms, where anyone can join that room. On the other hand, user can also make password protected room, where the host can share the password and link of a particular room and other user can enter the room by the link and correct password.

## Main Features Implemented

- The Platform plays videos in a fully **Synchronized** <img src="https://img.icons8.com/color/15/000000/synchronize--v1.png"/>  manner.
- The Web App is fully **Responsive** <img src="https://img.icons8.com/external-nawicon-flat-nawicon/20/000000/external-responsive-seo-and-marketing-nawicon-flat-nawicon.png"/>. 
- Made it a **Progressive Web App (PWA)** <img src="https://img.icons8.com/cotton/15/000000/web-apps.png"/>. You can install web app in mobile and desktop.
- Implemented a **Caching Policy** <img src="https://img.icons8.com/external-filled-outline-geotatah/15/000000/external-policy-reverse-logistics-filled-outline-filled-outline-geotatah.png"/> for all the images elements.
- Implemented **Code Splitting** <img src="https://img.icons8.com/office/15/000000/code.png"/> and different techniques to optimize various performance metrics of the website. 
- #### User Functionality
  - Authorised users using **JWT Token and Cookies**
  - **Password Recovery** and **Change Password** Feature
  - **Joining, Creating and Deleting Room**
- #### Room Functionality
  - Integrated **YouTube search** with **Voice Recognition**
  - **Real-time text** and **Voice Chat**
  - **Private Room** secured with password
  - **Request Video Syncronization**
  - **Share/Invite** via social media and email
  - **Emoji Palette** for text chat
- #### Host Privilages
  - **Make others admin and Remove members from room**
  - **Lock** room, **Close** room and **Delete** room
- #### Admin Privilages
	- **Change video url**

## Tech stack and concepts used:
- #### Frontend
	- React.js
	- Material UI
	- Socket.io Client
  - React-Player
  - Firebase Deployment  
<img title="Reactjs" src="https://img.icons8.com/color/40/000000/react-native.png"/> 
<img title="Material-UI" src="https://img.icons8.com/color/40/000000/material-ui.png"/> 
<img title="Socket.io Client" height='40px' src="https://socket.io/images/logo-dark.svg"/> 
<img title="Firebase Deployment" src="https://img.icons8.com/color/40/000000/firebase.png"/>
<img title="Javascript" src="https://img.icons8.com/color/40/000000/javascript.png"/> 
<img title="HTML 5" src="https://img.icons8.com/color/40/000000/html-5--v1.png"/> 
<img title="CSS 3" src="https://img.icons8.com/color/40/000000/css3.png"/> 
- #### Backend
  - Nodejs
  - Expressjs
  - MongoDB Atlas
  - Socket.io
  - Heroku Deployment  
<img title="Nodejs" src="https://img.icons8.com/color/50/000000/nodejs.png"/> 
<img title="Expressjs" src="https://avatars.githubusercontent.com/u/5658226?s=40"/> 
<img title="MongoDB Atlas" src="https://img.icons8.com/color/40/000000/mongodb.png"/> 
<img title="Socket.io" height='40px' src="https://socket.io/images/logo-dark.svg"/> 
<img title="Heroku deployment" src="https://img.icons8.com/color/40/000000/heroku.png"/> 

## Thought behind the project:
This Project helps to connect people to each other even if they are at different locations.
## Instructions for local setup:

Clone this repo using
```bash
git clone https://github.com/ninad-0408/watchparty_frontend.git
cd watchparty_frontend
```
For installing all Modules and Packages
```bash
npm install
```

Install node modules.

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

<!-- ## Terminology:

The creater of the room is host and admin and other users in a room are members. The activity in a room is controlled by admins. The admin can make any members to admin and also have right to remove any member. The host can lock/unlock the room.

## Working:

- First, the user can login/signup to the website.
- Then he can create or join the room, a user can't join more than one room.
- Any of the admin can either paste the video link in the searchbar and send to all members.
- The admins have also facility to search YouTube videos by audio assistant or by writting some text in the searchbar.
- The users in a room can watch same online video syncronisely, and they can chat in the room.
- Any of the user can send audio message to all members.
- The host have access to close and delete the room. -->

