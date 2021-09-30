import React, {useState, useEffect} from 'react';
import Product from './Product';




const Game = () => {
    const [info, setInfo] = useState([]);
     const getGameInfo = async () => {
         try{
            const response = await fetch ('https://mehedi-durjoi.github.io/gameshopjson/game.json');
        
            setInfo(await response.json());
         }catch (error){
             console.log(error);
         }
        
     }

     useEffect(() => {
       getGameInfo();
     }, []);


     
   
    return (
        <>
           <Product info={info}/>
            
        </>
    );
}

export default Game;
