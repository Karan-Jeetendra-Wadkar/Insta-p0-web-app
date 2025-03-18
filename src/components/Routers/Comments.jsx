import react,{useEffect, useState} from 'react';
import "./Comments.css";
import { Link } from 'react-router-dom';
import { addDoc ,getDoc,getDocs,query, Timestamp, where } from 'firebase/firestore';
import swal from 'sweetalert';
import { commentRef } from '../Firebase/Firebase';
import { useParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';


const Comments = () => {

  const navigate = useNavigate()
  

  const {id} = useParams()

  const [loading , setloading] =useState(false)

  const[data, setData] =useState([])

  const [form, setForm] = useState("")

  const addComments = async () =>{
    setloading(true)

    await addDoc(commentRef ,{
      comment:form,
      name:"Karan Wadkar",
      postid:id,
      timestamp:new Date().getTime(),


    });

  
    swal({
      title: "Successfully Added",
      text: "Comment Added Successfully!",
      icon: "success",
      button: "OK",
      timer:"3000",
    });
    setForm("")
    setloading(false)
    navigate("/")
  }
  useEffect(()=>{
    async function getData(){
      setloading(true)

      let qur = query(commentRef, where("postid", "==" ,id))
      const snapShot = await getDocs(qur)

      snapShot.forEach((doc)=>{
        setData((prev)=> [...prev, doc.data()])
      })
      setloading(false)
    }
    getData();
  },[])
  console.log({...data})



  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  
  

  return (
    <div className='mainComments'>
      <div>
        <Link className="cancelBtn" to={"/"}><button>Cancel</button></Link>
      </div>
   <div className="alignBox">
    {loading ? (
    <div> <ThreeCircles height={40} /></div>)
    :(
       <div>
        {data.map((e, i)=>{
          return(
            <div className="commentBox" key={i}>
              <h4>{e.comment}</h4>
              <p>{new Date(e.timestamp).toLocaleString()}</p>

            </div>
            
          )
        })}
      </div>
    )
}
      <form onSubmit={handleSubmit}>
                <div className="addComment"><input
                 value={form}
                  onChange={(e)=>setForm(e.target.value)} 
                  className="Acomment" 
                  type="text"
                  placeholder="Add a comment..." />
                  <button onClick={addComments}>Post</button>
                  </div>
              </form>
   </div>
    </div>
  )
}

export default Comments
