import { useEffect, useState } from "react";

const Search = () => {
    const [gifs, setGifs] = useState([]);
    let [searchKey, setSearchKey] = useState("");

    const handleInput = (e) => {
        setSearchKey(e.target.value);
      }

      const performSearch = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?rating=g&api_key=8OSzgThUclH7ZZYI5fJiW8ZhQF1Qwdlu&q=${searchKey}`)
        
        .then((res) => res.json())
        .then((data) => {
         
          setGifs(data.data);
        })
        .catch((error) => {
          console.log(error)
        });
      }

    return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search</h1>
      <div style={{textAlign:"center"}}>
        <input type="text" name="searchKey" placeholder="Type your search here" value={searchKey} onChange={handleInput}></input>
        <div>
          <button type="button" style={{textAlign:"center"}} onClick={() => { performSearch() }}>Search Gif</button>
        </div>
        {gifs.map((gifElement, index) => {
                return (
                    <div key={index}>
                        <img src={gifElement.images.original.url} key={index} alt="Trending Gif" />
                        
                    </div>
                )
            })}
      </div>
    </div>
  );
  };
  
  export default Search;