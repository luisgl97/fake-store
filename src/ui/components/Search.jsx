import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";

export const Search = () => {

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.search)
    const { q= ""} = queryString.parse(location.search)

    const {searchText, onInputChange} = useForm({
      searchText: q
    })

    const onSearchSubmit = (event) => {
      event.preventDefault();
      navigate(`search?q=${searchText.toLowerCase().trim()}`);
    };

    return (
      <form onSubmit={onSearchSubmit} className="d-flex">
          <input name="searchText" onChange={onInputChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    )
  }
  