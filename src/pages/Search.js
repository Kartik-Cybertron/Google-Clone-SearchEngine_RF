import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider"
import { actionTypes } from "../reducer"

function Search({ hideButtons = false }) {
  const [{}, dispatch]=useStateValue();
  const [input, setInput] = useState(""); //input to store value
  const history = useHistory();

  const search = (e) => {
    e.preventDefault(); //to search data from the google API
    console.log("You hit search button >>", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    // comeback and fix
    history.push("/search");
  };
  return (
    //   form for search bar section
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" /> {/*for search icon*/}
        {/*to take input from the user in the searchbar*/}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/*setInput to set value to the screen*/}
        <MicIcon /> {/*for mic icon*/}
      </div>
      {!hideButtons ? (
        // Button section
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        //  Button section 
        <div className="search_buttons">
          <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
