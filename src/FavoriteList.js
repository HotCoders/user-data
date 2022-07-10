import { useState, useEffect } from "react";

const FavoriteList = () =>{
    const[favList, SetfavList ] = useState([]);
    const localData = () =>{
        let arryLoc = localStorage.getItem('userslist');
        if(arryLoc === null){
            arryLoc = [];  
        }else{
            arryLoc = JSON.parse(arryLoc);
        }
        SetfavList(arryLoc);
    }
    useEffect( () => {
        localData();
    },[]);
 return(
     <div>
         {
          favList.map((fav) =>
          <div className='favbox' key={fav.id}> 
          <div>
          <img src = {fav.picture} alt="img" className="card-img-top" />
          </div>
          <div>
              {fav.fname}
          </div>
          </div>
          )
         }
     </div>
 )

}

export default FavoriteList;
