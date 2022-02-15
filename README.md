<h1> <img alt="Website Logo" src="https://www.linkpicture.com/q/favicon_20.png" height="30px" width="40px"/> Watch Party </h1>

## Title of the Project: WATCHPARTY
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

### Frontend

- #### User Functionality
  - Authorised users using **JWT Token and Cookies**
  - **Password Recovery** Feature
  - **Joining, Creating and Deleting Room**
  - **Request Video Syncronization**
- #### Room Functionality
  - Integrated **YouTube search** with **Voice Recognition**
  - **Real-time text** and **Voice Chat**
  - **Private Room** secured with password
  - **Share/Invite** via social media and email
  - **Emoji Palette** for text chat
- #### Host Privilages
  - **Make others admin and Remove members from room**
  - **Lock** room, **Close** room and **Delete** room
- #### Admin Privilages
	- **Change video url**



### Backend

## Tech stack and concepts used:
- MongoDB
- React.js
- Node.js
- Express.js
- Socket.io
- Material UI

## Thought behind the project:

## Instructions for local setup:

```javascript
npm install
```

Install node modules.\

```javascript
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```javascript
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

