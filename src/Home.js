
import Axios from 'axios';
import { useState, useEffect } from "react";
import FavoriteList from './FavoriteList';
import {Headings} from './Styled/About.styled';
import phoneImg from './img/phone.png';


const Home = () =>{
    const [users, SetUsers] = useState([]);
  
    const fetchData = async () =>{
        let result = await Axios.get("https://randomuser.me/api/?results=12");
       // console.log(result);
        SetUsers(result.data.results);
    }
    const favArray=[];
    const addFav = (e)=>{
    const pic = e.currentTarget.getAttribute("data-value1");
    const username = e.currentTarget.getAttribute("data-value2")
    let picture = pic;
    let fname = username;
    let id = Math.random();
    const favUsers = { picture,fname,id};
    favArray.push(favUsers);

    addUsers(favArray); 
    e.currentTarget.classList.add('hide');
    const listFavUsr ='<div class="favbox"> <div><img src ='+picture+' alt="img" className="card-img-top" /><div>'+username+'</div></div>';
       
     
    document.querySelector('#favDiv').insertAdjacentHTML("beforeend", listFavUsr);
    
   } 
    const addUsers = (favArray) => {
    console.log(favArray);
    localStorage.setItem( 'userslist' ,JSON.stringify(favArray));
    }


    useEffect( () => {
        fetchData();
    },[]);
    return(
        <div>
        <Headings fc >Users List</Headings>
        <div className='listUserDiv'>
        <div className="users">
            {
                users.map((myUsers, index) => 
                    <div className='box' key={index}>
                    <div className="card" >
                        <img src={myUsers.picture.medium} alt="img" className="card-img-top" />
                    </div>
                     <div className="card-body">
                        <h4 className="card-title">
                            {myUsers.name.first + " " + myUsers.name.last}
                        </h4>
                        <p className="card-text">
                            <img src={phoneImg} alt="phone"/> {myUsers.phone}
                        </p>
                        <p className="card-text">
                            {myUsers.location.country }
                        </p>
                        <button onClick={addFav} data-value1={myUsers.picture.thumbnail} data-value2 = {myUsers.name.first + " " + myUsers.name.last}>Add to Favorite</button>                   
                    </div>
                 </div>
                
                )
            }
        </div>
        <div className='favorites'>
            <h2>Favorite Users</h2>
                <div id='favDiv'>
                <FavoriteList/>
                </div>   
        </div>
     </div>
</div>
    )
}

export default Home