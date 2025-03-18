import React, { useState } from "react";
import "./Create.css";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { postRef } from "../Firebase/Firebase";
import swal from "sweetalert";


const Create = () => {
  const [form, setForm] = useState({
    image: "",
    name: "",
  });

  const [loading, setLoading] =useState(false);

  const addPost = async () =>{
    setLoading(true)

    await addDoc(postRef ,form);
    swal({
      title: "Successfully Added",
      text: "Post Added Successfully!",
      icon: "success",
      button: "OK",
      timer:"3000",
    });
    setForm({
      image:"",
      name:"",
    })
  
  setLoading(false)
  }

  return (
    <div className="create">
      <div className="Cpost">
        <h2> Create A Post</h2>
      </div>
      <div className="createBox">
        <input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="createInputs"
          type="text"
          required
          placeholder="image URL"
        />
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="createInputs"
          type="text"
          required
          placeholder="Name"
        />
      </div>
      <div className="btns">
        <Link to={"/"}>
          <button className="cancelBtn">Cancel</button>
        </Link>
        <button onClick={addPost} className="shareBtn">{loading ? <TailSpin color="white" height={25}/> : "Post"}</button>
      </div>
    </div>
  );
};

export default Create;
