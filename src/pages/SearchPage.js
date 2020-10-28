import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "./UseGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // mock API
  // const data = Response;
  // live api call
  const { data } = UseGoogleSearch(term);

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_Logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt=""
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_Options">
            <div className="searchPage_OptionLeft">
              <div className="searchPage_Option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_Option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage_Option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage_Option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage_Option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage_Option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage_OptionRight">
              <div className="searchPage_Option">
                <Link to="/all">Settings</Link>
              </div>
              <div className="searchPage_Option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({" "}
            {data?.searchInformation.formattedSearchTime} ) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultsSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
