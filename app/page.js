"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle('');
    setDesc('');
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <div className="text-gray-600 text-lg mt-4">No tasks available. Add some tasks above!</div>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className="bg-indigo-50 p-6 rounded-md shadow-md flex items-center justify-between my-4">
        <div className="w-2/3 flex-row">
          <h5 className="text-black text-3xl font-semibold font-serif">{t.title}</h5>
          <p className="text-black text-lg mt-2">{t.desc}</p>
        </div>
        <button
          onClick={() => {
            deleteHandler(i);
          }}
          className="bg-red-600 text-white px-4 py-2 rounded font-bold">
          Delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-black text-yellow-600 p-5 text-5xl text-center font-bold font-serif">My To-<span   className='text-purple-500'>Do List</span></h1>
      <form onSubmit={submitHandler} className=" text-center mt-8">
        <input
          type="text"
          className="text-2xl border-gray-500 border-2 m-2 px-4 py-2 focus:outline-none focus:border-blue-500 rounded"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-gray-500 border-2 m-2 px-4 py-2 focus:outline-none focus:border-blue-500 rounded"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="bg-black text-white px-4 py-2 text-xl font-bold rounded m-2 hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        >
          ADD TASK
        </button>
      </form>
      <hr className="my-8" />
      <div className="p-8 bg-yellow-100 text-center font-bold">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
