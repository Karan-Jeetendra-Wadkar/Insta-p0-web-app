import react, {  useEffect, useState } from "react";
import "./Box2.css";
import InstaGram from "../assets/InstaGram.jpeg"
import heartImg from "../assets/heartImg.webp";
import sharebtn from "../assets/sharebtn.jpeg";
import savebtn from "../assets/savebtn.webp";
import commentbtn from "../assets/commentbtn.png";
import { getDocs } from "firebase/firestore";
import { postRef } from "./Firebase/Firebase";
import { Link, Routes, Route } from "react-router-dom";
import Comments from "./Routers/Comments";
import { useParams } from "react-router-dom";



const Box2 = () => {

const {id} =useParams()
  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData() {
      const _data = await getDocs(postRef, id);
      _data.forEach((item) => {
        setData((prv) => [...prv, item.data()]);
      });
    }
    getData();
  }, []);



  return (
    <>
    <Routes>
      <Route path="/comments/:id" element={<Comments id={id}/>}/>
    </Routes>
      <div  className="main">
        <div className="mobileScreen">
          <img className="mobileLogo" src={InstaGram} alt="Instagram" />
        </div>
        <div className="statusBox">
          {data.map((item , index) => {
            return (
              <div key={index} className="individualStory">
                <div className="statusImg">
                  <img className="Simg" src={item.image} alt="posts" />
                </div>
                <div className="profileName">{item.name}</div>
              </div>
            );
          })}
        </div>

        <div className="postBox">
          {data.map((items,index) => {
            return (
              <>
              <div key={index} className="borderBox">
              <div className="postInfo">
                  <div className="postIcon">
                    <img
                      className="postIconImg"
                      src={items.image}
                      alt="Kakarot"
                    />
                  </div>
                  <div className="postName">{items.name}</div>
                  <div className="postTime">.25min</div>
                </div>
                <div className="postDetails">
                  <div className="postImgBox">
                    <img className="postImg" src={items.image} alt="Kakarot" />
                  </div>
                </div>
                <div className="iconBox">
                  <div className="iconBtn">
                    <img className="Btn" src={heartImg} alt="like" />
                    <img className="Btn" src={commentbtn} alt="comment" />
                    <img className="Btn" src={sharebtn} alt="share" />
                  </div>
                  <div className="savebtn">
                    <img className="Btn" src={savebtn} alt="save" />
                  </div>
                </div>
                <div className="likeDetailBox">
                  <img
                    className="likeIcon"
                    src="https://th.bing.com/th/id/OIP.pY8GeeLUoKmDgxLHDDTktQHaJ4?rs=1&pid=ImgDetMain"
                    alt="likeIcon"
                  />
                  <img
                    className="likeIcon2"
                    src="https://th.bing.com/th/id/OIP.pY8GeeLUoKmDgxLHDDTktQHaJ4?rs=1&pid=ImgDetMain"
                    alt="likeIcon"
                  />
                  <div className="likeCount">48,300 Likes</div>
                </div>
                <div className="aboutPost">
                  <div className="postName">{items.name +"Official"}</div>
                  <div className="comment">
                   { "Happy Birthday "+ items.name + " ...  "}<b>More</b>
                  </div>
                </div>
                <div className="viewComment">
                <Link className="commentCSS" to={`/comments/${id}`}> <div>View All Comments...</div>
                <div>Add Comments...</div></Link>
                 
                </div>
          
              </div>
              </>
            );
          })}
        </div>
      </div>

     
    </>
  );
};

export default Box2;

