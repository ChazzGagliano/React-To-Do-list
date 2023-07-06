import { useState } from "react"


export default function App() {
    useState()
  return (
    <>
      <form className="form-item-new">
      <div className="form-row">
        <label htmlFor="item">New Activity</label>
        <input type="text" id="item"  />
      </div>
      <button className="btn">Add</button>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        <li>
            <label>
                <input type="checkbox" />
               Task 1
            </label>
            <button className="btn btn-danger">Delete</button>
        </li>
        <li>
            <label>
                <input type="checkbox" />
               Task 2
            </label>
            <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}

