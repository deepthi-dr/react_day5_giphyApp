import { useEffect, useState } from "react";

const Saved = () => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        let savedGifs = [];
        let inLocStorage = localStorage.getItem("savedGifs");
        
        if (inLocStorage) {
          savedGifs = inLocStorage.split(",");
          setGifs(savedGifs);
          }
      }, [])

      const handleClear = () => {
        localStorage.removeItem("savedGifs");
        setGifs([]);
      }
    
      const handleRemove = (imageIndex) => {
        let tmpGifs = [...gifs];
        tmpGifs.splice(imageIndex,1);
        setGifs(tmpGifs);
        localStorage.setItem("savedGifs", tmpGifs);
      }

    return (
    <div>
      <h1 style={{ textAlign: "center" }}>Saved page</h1>
      <br></br><br></br>
      <div style={{textAlign:"center"}}>
        <div><button type="button" onClick={() => { handleClear() }}> Clear</button></div>
        <br></br>
        {
          gifs.map((gifUrl, index) => {
            return (
              <div className="my-5">
                <img key={index} alt="Trending Gif" src={gifUrl} />
                <button className="btn btn-outline-secondary mx-5" type="button" onClick={() => { handleRemove(index) }}> Remove</button>
              </div>
            )
          })}
      </div>

    </div>
  );
  };
  
  export default Saved;