import React, { useEffect, useState } from 'react';
import Parkrologo from '../assets/Parkrologo.png';
import faq1 from '../assets/faq1.png';
import faq2 from '../assets/faq2.png';
import carlogin from '../assets/carlogin.png';
import Instagram from '../assets/Instagram.png';
import Facebook from '../assets/Facebook.png';
import LinkedIn from '../assets/LinkedIn.png';
import YouTube from '../assets/YouTube.png';
import img from '../assets/img.png';
import profilei from '../assets/profilei.png';
import Line5  from '../assets/Line5.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FAQ = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [City, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [queries, setQueries] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newQuery, setNewQuery] = useState('');

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const resp = await axios.get('http://localhost:3200/getQuery');
        setQueries(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQueries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@gmail\.com$/.test(email)) {
      setErrorMessage("Email must be a Gmail account (example@gmail.com)");
      return;
    }
    if (MobileNo.length !== 10) {
      setErrorMessage("Mobile number must be exactly 10 digits long");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3200/query', {
        fullname,
        email,
        MobileNo,
        City,
        query
      });
      setQueries([...queries, response.data]);
      setSuccessMessage('Query Submitted successfully!');
      setErrorMessage('');
      setFullname('');
      setEmail('');
      setMobileNo('');
      setCity('');
      setQuery('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Failed to submit your query');
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3200/getQuery/delete/${id}`);
      setQueries(queries.filter((q) => q._id !== id));
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to delete the query');
    }
  };

  const handleEdit = (id, currentQuery) => {
    setEditingId(id);
    setNewQuery(currentQuery);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3200/getQuery/update/${id}`, {
        query: newQuery
      });
      setQueries(queries.map((q) => (q._id === id ? response.data : q)));
      setEditingId(null);
      setNewQuery('');
      setSuccessMessage('Query updated successfully!');
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to update the query');
    }
  };

  return (
    <div>
      <div className='Navbar'>
        <ul>
          <Link to='/'>
            <li><img src={Parkrologo} className='logo' alt="logo"></img></li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <li>Popular</li>
          <li><Link to='/about'>About Us</Link></li>
          <li>FAQ</li>
          <li className='logins'><Link to='/login'>Login</Link></li>
          <Link to='/profiles'>
            <img src={profilei} className='profilei' alt="profile"></img>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className='faq'>FAQ’s</h1>
        <hr className='faqline'></hr>
      </div>
      <div>
        <h3 className='que1'>Q.What is ParkrO ?</h3>
        <div>
          <div className='bans1'>
            <h3 className='ans1'>"ParKrO: A web-based platform 
              <br></br>leveraging QR code technology to
              <br></br> revolutionize parking 
              <br></br>management, ensuring privacy, 
              <br></br>seamless space reservation, and 
              <br></br>effective resolution of parking 
              <br></br>issues."</h3>
          </div>
        </div>
      </div>
      <div>
        <img src={faq1} className='faq1' alt='faq1'></img>
      </div>
      
      <div>
        <h3 className='que2'>Q.  What are the main features of ParKro ?</h3>
        <div>
          <div className='bans2'>
            <h3 className='ans2'>Unique QR Code Generation for each 
            <br></br>registered vehicle.
            <br></br>Parking-related issue reporting via QR 
            <br></br>code scanning for prompt resolutions.</h3>
          </div>
        </div>
      </div>
      <div>
        <img src={faq2} className='faq2'></img>
      </div>

      <div className='querries'>
      {queries.map((item) => (
          <div key={item._id} className='question'>
            {editingId === item._id ? (
              <div>
                <input
                  type="text" className='updatequery'
                  value={newQuery}
                  onChange={(e) => setNewQuery(e.target.value)}
                />
                <button onClick={() => handleUpdate(item._id)} className='update'>Update</button>
                <button onClick={() => setEditingId(null)} className='cancel'>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{item.query}</p>
                <button onClick={() => handleEdit(item._id, item.query)} className='edit'>Edit</button>
                <button onClick={() => handleDelete(item._id)} className='delete'>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className='query'>
        
      <h3 className='got'>Got a ParKrO Query  ?</h3>
      <div>
        <img src={carlogin} className='faq3'></img>
      </div>
      <div className='querbox'>
       <div><img src={Parkrologo} className='faq4'></img></div>
       <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Your Full Name' value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
        <input type='text' placeholder='Your Email address ' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='text' placeholder='Your Mobile Number' value={MobileNo} onChange={(e)=>setMobileNo(e.target.value)}></input>
        <input type='text' placeholder='Your City' value={City} onChange={(e)=>setCity(e.target.value)}></input>
        <input type='text' placeholder='Your Query' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        <button type='submit' className='sendbtn'>Send</button>
        </form>
        {successMessage && <div className="successMessage">{successMessage}</div>}
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      </div>
      </div>
      <div className='footer'>
      <h1 className='phrase'>Streamline your parking experience  
      <br></br>with our innovative solutions.</h1>
      <div className='contactusfooter'>
      <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><button className='footerbtn2'>Contact Us </button></Link>
      </div>
      <img src={Line5} className='line5'></img>
      <div className='Company'>
      <h1>Company</h1><br></br>
      {/* <ul className='companyul'> */}
        <li>About us</li>
        <li>Careers/Jobs</li>
        <li>Contact Us</li>
        <li>Contact Details</li>
        <li>Sitemap</li>
        <li>How to</li>
      {/* </ul> */}
      </div>
      <div className='legal'>
        <h1>Legal</h1><br></br>
      {/* <ul> */}
        <li>Link policy</li>
        <li>Advertising</li>
        <li>Disclaimer</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>My privacy</li>
      {/* </ul> */}
      </div>
      <div className='icons'>
       <Link to='https://www.youtube.com'><img src={YouTube} className='ico4'></img></Link><Link to='https://www.youtube.com'><h1>Youtube</h1></Link>
       <Link to='https://www.instagram.com/tusharshekhar_/'><img src={Instagram} className='ico1'></img></Link><Link to='https://www.instagram.com/tusharshekhar_/'><h1>Instagram</h1></Link>
       <Link to='https://www.facebook.com'><img src={Facebook} className='ico2'></img></Link><Link to='https://www.facebook.com'><h1>Facebook</h1></Link>
       <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><img src={LinkedIn} className='ico3'></img></Link><Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><h1>Linkedin</h1></Link>
      </div>
      <h4 className='copyright'>© [ParKrO] [2024]</h4>
      <h4 className='gmail'>parkro@gmail.com</h4>
     </div>
    </div>
  )
}

export default FAQ
