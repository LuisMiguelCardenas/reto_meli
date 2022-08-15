import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addInputSearch } from '../../actions/actions'

export const NavBar = () => {

  const dispatch = useDispatch();
  const [inputValue, setfInputValue] = useState('');

  const onAddInputSearch = (search: string) => {
    dispatch(addInputSearch(search));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfInputValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onHandleClick();
  }

  const onHandleClick = () => {
    setfInputValue('')
    onAddInputSearch(inputValue)
  }

  return (
    <>
      <div className="navbar">
        <a className="navLogo" href="/"></a>
        <form onSubmit={e => onSubmit(e)}>
          <input
            className='inputNavBar'
            placeholder='Buscar productos, marcas y más...'
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e)}
          />
          <Link to='/'>
            <button onClick={() => onHandleClick()}>
              <FontAwesomeIcon className='iconSearch' icon={faMagnifyingGlass} />
            </button>
          </Link>
        </form>
      </div>
    </>
  )
}
