import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {startEditService, removeService, clearForm} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(clearForm());
    dispatch(removeService(id));
  };

  const handleEdit = id => {
    dispatch(startEditService(items.find(item=>item.id===id)));
  };

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>✏️</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
