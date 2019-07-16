import React from 'react'
import avatar from '../static/avatar.jpg';

function Profile() {
  return (
    <div className="profile md:mr-auto md:ml-auto relative w-2xl bg-white shadow h-auto rounded">
      <div className="wrapper py-4">
        <div className="profile--user">
          <div className="profile--image text-center">
            <img src={avatar} alt="AvatarImage"  className="w-32 h-32 mt-4 mr-auto ml-auto rounded-full"/>
            <p className="font-bold text-4xl mt-4 username">CED</p>
            <p className="font-bold text-base userrole">Designer / Developer</p>
          </div>
          <div className="flex justify-center items-center text-center mt-4 mb-4">
            <p className="font-semibold text-lg break-all w-3/5">Software Dev. 丨 Designer | iOS Developer | Available for hire 丨 Email: ced@ced.com </p>
          </div>
          <a href="#!" className="badge absolute uppercase font-bold px-2 py-1">Pro</a>
          <div className="buttons flex justify-center items-center mt-8 mb-8">
            <a href="#!" className="px-8 py-3 mr-4 font-black text-center rounded text-lg hire">Hire me</a>
            <a href="#!" className="px-8 py-3 mr-4 font-black text-center rounded text-lg follow">Follow</a>
          </div>
        </div>
        <div className="platforms p-8">
          <h2 className="font-bold text-2xl uppercase">Elsewhere</h2>
          <p className="text-lg font-bold pb-2 pt-4">Github: <a className="text-yellow-500 hover:text-yellow-600 underline ml-4" href="https://github.com/theghostyced"> Check out my repos</a></p>
          <p className="text-lg font-bold">Twitter: <a className="text-yellow-500 hover:text-yellow-600 underline ml-4" href="https://twitter.com/theghostyced"> Follow me here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
