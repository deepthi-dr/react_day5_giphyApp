import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const handleSave = (imageUrl) => {
        let savedGifs = [];
        let gifString = localStorage.getItem("savedGifs");
        if (gifString) {
            savedGifs = gifString.split(",");
        }
        savedGifs = [...savedGifs, imageUrl]
        localStorage.setItem("savedGifs", savedGifs);
    }

    const [gifArray,setGifs] = useState([]);

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/trending?rating=g&api_key=ZzosyRfvvdgyHPwQw32LpGWHTsBmr1de`)
        .then((res) => res.json())
        .then((data) => {
          setGifs(data.data);
        })
        .catch((error) => {
          console.log(error)
        });
    },[]);

    return(
        <div>
            <h1>Home</h1>
            <div>
            {gifArray.map((gifElement, index) => {
                return (
                    <div key={index}>
                        <img src={gifElement.images.original.url} key={index} alt="Trending Gif" />
                        <button className="btn btn-primary" onClick={() => { handleSave(gifElement.images.original.url) }}> Save</button>
                    </div>
                )
            })}
            </div>
        </div>
    ) 
  };
  
  export default Home;