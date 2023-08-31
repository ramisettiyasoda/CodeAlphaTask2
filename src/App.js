
import react,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {ArrowRepeat,ArrowDownCircle} from "react-bootstrap-icons";


function App() {
  const [user,setUser]=useState({username:""});
  const [cperror,setCperror]=useState(false);
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [collegeid,setCollegeid]=useState('')
  const [mailId,setMailId]=useState('')
  const [dateofarrival,setDateofarrival]=useState('')
  const [error,setError]=useState(false)
  const [cerror,setCerror]=useState(false)
  const [merror,setMerror]=useState(false)
  const [isSubmit, setIsSubmit]=useState(false)
  const [registerStatus, setRegisterStatus] = useState("");

    
     
  const characters='abc123';

  const randFunc=(length)=>{
    var result='';
    const charactersLength= characters.length;
    for(var i=0;i<length;i++){
      result+=characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
  }
  const [captcha,setCaptcha]=useState(randFunc(6));
  let handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    user[name]=value;
    setUser(user);
    console.log(user)

  }
  const handleRegen=()=>{
    setCaptcha(randFunc(6));
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      
      if(firstName.length==0||lastName.length==0){
          setError(true)
      }
      const rgExp = /^[RSON]{1}[0-9]{6}/
      if(collegeid.length==0 ){
        setCerror("cant be empty")
      }
     else if(!rgExp.test(collegeid)) {
        setCerror("college Id is invalid")
      }
      else if(collegeid.length>=8) {
        setCerror("college Id is invalid")
      }
     else{
      setCerror(" ");
     }
     const mailExp = /^[rson0-9._%+-]+@rgukt[a-z]{3,4}\.ac\.in$/;
      if(mailId.length==0) {
        setMerror("cant be empty");
       }
       else if(!mailExp.test(mailId)) {
        setMerror("MailId is invalid");
      }
      else{
        setMerror(" ");
      }

    if(user.user===captcha){
      setCperror("");
      alert("captcha matched");
    }
    else{
      setCperror("not Matched");
    }
   
  }

  
  

  return (
    <div align="center">
      <form className="form container my-3" >
      <h1>Registration</h1>
      <label className="form-label"  htmlFor="">First Name:<input type="text" className="form-control" name="fname" id="fname" placeholder="enter your firstname" onChange={e=>setFirstName(e.target.value)}/></label><br/>
      {error&&firstName.length<=0?
               <label  className="error text-danger">First Name can't be Empty</label>:""}<br/>
      <label class="form-label">Last Name:<input type="text" name="lname" className="form-control" id="lname"  placeholder="enter your lastname"onChange={e=>setLastName(e.target.value)} /></label><br/>
      {error&&lastName.length<=0?
               <label  className="error text-danger" >Last Name can't be Empty</label>:""}<br/>
      <label class="form-label">College ID:<input type="text" name="id" className="form-control" id="id"  placeholder="enter your ID" value={collegeid} onChange={e=>setCollegeid(e.target.value)}/></label><br/>
      <label className="error text-danger"  htmlFor="">{cerror}</label><br/>
      <label class="form-label" >Email:<input type="email" name="mail" className="form-control" id="mail" placeholder="enter your mailid" value={mailId} onChange={e=>setMailId(e.target.value)}/></label><br/>
      <label  className="error text-danger">{merror}</label><br/>
      <label class="form-label">Day of arriaval:<input type="date" className="form-control"name="date" id="date" value={dateofarrival} min={new Date().toISOString().split('T')[0]} onChange={e=>setDateofarrival(e.target.value)}required/></label><br/>
      <label className="form-label">Captcha:</label>
      <span align="center"className="captcha">{captcha}
      <button className="btn btn-warning"onClick={handleRegen}><ArrowRepeat className="msg-icons"/></button></span><br/>
      <label  className="form-label">enter the above text<input type="text" className="form-control" name="user" onChange={handleChange}placeholder="enter the above text"/></label><br/>
        <span name="cperror" className="text-danger">{cperror}</span><br/>
        
      <input className="btn btn-primary" type="submit" onClick={handleSubmit} value="Register" />
        
      </form>
    </div>
    
  );
}

export default App;
