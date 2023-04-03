import { useContext, useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Context} from "../context/Context";


export default function Sidebar() {
  const [cat,setCats] = useState([]);
  const {user} = useContext(Context);

  useEffect(() => {
    const getCats =async () => {
      const res = await axios.get("/categories");
      setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className='sidebar'>
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iste, enim fugiat voluptatem optio maiores.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cat.map((c) => {
          return (
            <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>
    </div>
</div>        
  )
}
