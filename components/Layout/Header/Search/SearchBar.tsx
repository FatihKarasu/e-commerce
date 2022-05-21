import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
import Link from "next/link";
let timeout: ReturnType<typeof setTimeout>;
let BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_URI as string;
type SearchResult = {
  id: string;
  title: string;
};

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(BASE_API_URI + "/products/search/" + input);
    const data: SearchResult[] = await response.json();
    setSearchResults(data);
  };

  useEffect(() => {
    if (input.length < 3) {
      setSearchResults([]);
      return;
    }
    if (searchResults.length === 0) setIsLoading(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchProducts();
      setIsLoading(false);
    }, 1000);
  }, [input]);
  console.log(searchResults);
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
        ) : searchResults.length !== 0 ? (
          <div className="search-suggestions">
            {searchResults.map((result) => (
              <Link href={`/products/${result.id}`}>
                <a className="item">{result.title}</a>
              </Link>
            ))}
          </div>
        ) : (
          <div>Nothing Found</div>
        )}
      </div>
    </div>
  );
}
