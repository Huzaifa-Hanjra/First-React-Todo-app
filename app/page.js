"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,2)
    setMainTask(copytask)
  }

  let renderTask = <h2 className='bg-black text-white text-2xl font-bold'>No task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li className='flex items-center justify-between' key={i}>
        <div className='flex justify-evenly mb-8 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
        </div>
        <button onClick={deleteHandler} className='bg-red-500 rounded p-2 font-bold text-white text-2xl mb-50'>Delete</button>
      </li>
    ));
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>MY TODO APP</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-black border-5 m-8 px-4 py-3 rounded'
          placeholder='Enter text here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          className='text-2xl border-black border-5 m-8 px-4 py-3 rounded'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" className='bg-black p-3 text-white rounded text-2xl m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-600'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
