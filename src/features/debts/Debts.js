import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ReactComponent as DeleteSVG } from "./icons/delete.svg";
import { ReactComponent as MoveSVG } from "./icons/move.svg";

import {
  addDebt,
  deleteDebt,
  changeDebt,
  moveDebt,
  selectDebts,
} from './debtsSlice';

export function Debts() {
  
  const debts = useSelector(selectDebts);
  const dispatch = useDispatch();

  // Create our list of debt elements, wrapped as Draggables for easy drag and dropping
  const draggableDebts = debts.map(({uid, owed, apr, monthly}, index) => {

    // Creates functions to handle dispatching changes to debt input boxes
    const handleChange = (key) => (e) => dispatch(changeDebt({uid, key, value: e.target.value}))

    return (
      <Draggable draggableId={uid} index={index} key={uid}>
        {provided => (
          <div className="debt-grid-column" id={uid} key={uid} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <input type="number" placeholder="Owed" onChange={handleChange('owed')} value={owed} />
            <input type="number" placeholder="APR" onChange={handleChange('apr')} value={apr} />
            <input type="number" placeholder="Monthly" onChange={handleChange('monthly')} value={monthly} />
            <div className="debt-actions">
              <div className="button" {...provided.dragHandleProps}>
                <MoveSVG />
              </div>
              <button className="button delete-button" onClick={() => dispatch(deleteDebt({uid}))}>
                <DeleteSVG />
              </button>
            </div>
          </div>
        )}
      </Draggable>
    )

  })

  // Handle when a drag event ends by dispatching a moveDebt command if needed
  const onDragEnd = (result) => {
    if (!result.destination || result.destination.index === result.source.index) { return; }
    dispatch(moveDebt({source: result.source.index, destination: result.destination.index}))
  }

  // Calculate the total owed for displaying below
  const totalOwed = debts.reduce((total, debt) => total + Number(debt.owed), 0)

  return (
    <div>
      <div className="debts-container">
        <div className="debt-grid-column">
          <div className="debt-grid-header">{`Owed`}</div>
          <div className="debt-grid-header">{`APR`}</div>
          <div className="debt-grid-header">{`Monthly`}</div>
          <div className="debt-grid-header"></div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {draggableDebts}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button className="button add-button" onClick={() => dispatch(addDebt())}>
          Add More Debt
        </button>
      </div>
      <p className="total">
        <span>
          {'Total owed:'}
        </span>
        <span>
          {`$${totalOwed.toFixed(2)}`}
        </span>
      </p>
    </div>
  )

}
