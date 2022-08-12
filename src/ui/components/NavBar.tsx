import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NotesState } from '../../reducers/notesReducer'
import { addNote } from '../../actions'

export const NavBar = () => {
let funciona = false
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  const [inputValue, setfInputValue] = useState('');

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
    onAddNote(inputValue)
  }
  
  // if ( inputValue.trim().length > 11 && inputValue.includes('MLA') && inputValue.startsWith('MLA')) {
  //   console.log('FUNCIONA')
  //   funciona = true
  // }
console.log(notes)
  return (
    <>
    {/* {
      notes[notes.length - 1].startsWith('MLA') && <Navigate to={`/item/${inputValue}`} replace={true} />
    } */}
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
      {/* <div className='productListContanier'>
        {
          category.length > 0 ? <Breadcrumb text={category}/> : null
  
        }
        
        {
          products.length > 0 ?
          products.map( (product:any) => (

            <ProductCard 
            key={product.id}
            {...product}
            />

          ))
        :
        <p>Inice una busqueda</p>
        }
      </div> */}
    </>
  )
}
