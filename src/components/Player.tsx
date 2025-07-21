import {useState, type ChangeEvent } from 'react';
import type { PlayerId } from '../types/types';

type PlayerProps = {
  name: string
  symbol: PlayerId
  isActive: boolean
  onChangeName: (symbol: PlayerId, newName:string) => void
};

export default function Player({name, symbol, isActive, onChangeName}: PlayerProps ) {
  const [ isEditing, setIsEditing] = useState(false);
  const [ editedName, setEditName ] = useState(name);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setEditName(event.target.value);
  }

  function toggleEditing() {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, editedName);
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {isEditing ? (
          <input
            type='text'
            required
            value={editedName}
            onChange={handleNameChange}
            className='player-name'
          />
        ) : (
          <span className='player-name'>{editedName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={toggleEditing}>
        {isEditing ? 'Save': 'Edit'}
      </button>
    </li>
  )
}
