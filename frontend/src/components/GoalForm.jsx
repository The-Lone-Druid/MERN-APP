import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

const GoalForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createGoal({text}))
        setText('')
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Goal</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Ex. Learn react" className="form-control" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">
                        Add Goal
                    </button>
                </div>
            </form>
        </section>
    )
}

export default GoalForm