import React from 'react'

function Card({userName, btnText= "Visit Me"}) {
  console.log({userName})
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
        <img
          src="https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/229114/COLDPLAY-LIVE_OS-ARTWORK_OCT-28%2029.jpg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-green-400"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card