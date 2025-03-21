import React, { useState } from "react";
import "./Box1.css";
import HomeIcon from "@mui/icons-material/Home";
import InstaGram from "../assets/InstaGram.jpeg";
import profilePic from "../assets/profilePic.jpg";
import threads from "../assets/threads.png";
import hamB from "../assets/hamB.jpeg";
import instaReel from "../assets/instaReel.png";
import explore from "../assets/explore.jpeg";
import Fbmsg from "../assets/Fbmsg.png";
import AIlogo from "../assets/AIlogo.png";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Explore from "./Routers/Explore";
import Reel from "./Routers/Reel";
import Create from "./Routers/Create";
import Home from "../Home";

import { Routes, Route , Link } from "react-router-dom";
import Messages from "./Routers/Messages";
import Notification from "./Routers/Notification";
import Profile from "./Routers/Profile";
import { styled } from "@mui/material";




const Box1 = () => {

  return (
<>
<Routes>
  <Route path="/explore" element={<Explore />} />
  <Route path="/reel" element={<Reel />} />
  <Route path="/messages" element={<Messages />} />
  <Route path="/notification" element={<Notification />} />
  <Route path="/create" element={<Create />} />
  <Route path="/profile" element={<Profile />} />
</Routes>
    <div className="firstBox">

      <div className="Ilogo">
        <img className="Ilogoimg" src={InstaGram} alt="Instagram" />
      </div>

      <Link  className="text" to={"/"}>
      <div className="Home">
        <div className="Icon">
        <HomeIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}} />
        <div className="Name">
          Home
        </div> 
        </div>
     
      </div>
      </Link>
      <div className="Icon">
          <SearchIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}} />
        <div className="Name">
          Search
        </div> 
      </div>
      <Link className="text" to={"/explore"}>
      <div className="Icon">
          <img className="profilePic" alt="Explore" src={explore}/>
        <div className="Name">
          Explore
        </div> 
      </div>
      </Link>
    
      <Link className="text" to={"/reel"}>
      <div className="Icon">
          <img className="profilePic" alt="Reel" src={instaReel}/>
        <div className="Name">
          Reel
        </div> 
      </div>
      </Link>
      <Link className="text" to={"/messages"}>
      <div className="Icon">
          <img className="profilePic" alt="Messages" src={Fbmsg}/>
        <div className="Name">
          Messages
        </div> 
      </div>
      </Link>

      <Link className="text" to={"/notification"}>
      <div className="Icon">
          <FavoriteBorderIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}} />
        <div className="Name">
          Notification
        </div> 
      </div>
      </Link>
      <Link  className="text" to={"/create"}>
      <div className="Icon">
          <AddBoxOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}} />
        <div className="Name">
          Create
        </div> 
      </div>
      </Link>

      <Link className="text" to={"/profile"}>
      <div className="Icon">
          <img className="profilePic" alt="profilePic" src={profilePic}/>
        <div className="Name">
          Profile
        </div> 
      </div>
      </Link>
      <div className="bottomNav">
      <div className="Icon">
      <img className="profilePic" src={threads}/>   
           <div className="Name">
          Threads
        </div> 
      </div>
      <div className="Icon">
      <img className="profilePic" src={AIlogo}/>   
          <div className="Name">
          AI Studio
        </div> 
      </div>
      <div className="Icon">
      <img className="profilePic" src={hamB}/>   
          <div className="Name">
          More
        </div> 
      </div>
      </div>
    </div>

    
  </>
  );
};

export default Box1;
