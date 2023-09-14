import React from 'react';
import {FaSearch} from 'react-icons/fa';
import "./SearchForm.css"

const SearchForm = () => {
  return (
    <div>
      <form className='search-form'>
        <div className='search-form-element flex flex-sb bg-white'>
          <input type='text' className='form-control' placeholder='Shiva Triology...'/>
          <button type='submit' className='flex flex-c'>
            <FaSearch className='text-purple' size={32}/>
          </button>
        </div>
       
      </form>
    </div>
  )
}

export default SearchForm