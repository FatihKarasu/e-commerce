import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
let timeout: ReturnType<typeof setTimeout>;

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  
  useEffect(() => {
    if (input.length < 3) return;
    setIsLoading(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [input]);


  return (
    <div className="search-container">
      <div className="search-input">
        <input
          ref={inputEl}
          type="text"
          name=""
          id=""
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div className="search-menu">
        {input.length < 3 ? (
          <div className="search-suggestions">
            <div className="d-flex justify-content-between px-3 py-2 ">
              <h6 className="m-0">Last Searchs</h6>
              <small className="remove ">Remove All</small>
            </div>
            <hr />
            <a className="item">
              1 <FontAwesomeIcon className="remove" icon={faTimes} />
            </a>
            <hr />
            <a className="item">
              2 <FontAwesomeIcon className="remove" icon={faTimes} />
            </a>
            <hr />
            <a className="item">
              3 <FontAwesomeIcon className="remove" icon={faTimes} />
            </a>
            <hr />
            <a className="item">
              4 <FontAwesomeIcon className="remove" icon={faTimes} />
            </a>
          </div>
        ) : isLoading ? (
          <div className="d-flex justify-content-center py-3">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="search-suggestions">
            <a className="item">Item 1</a>
            <a className="item">Item 2</a>
            <a className="item">Item 3</a>
            <a className="item">Item 4</a>
          </div>
        )}
      </div>
    </div>
  );
}
