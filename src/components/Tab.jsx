import React from 'react'

function Tab() {
  return (
    <div className="tab w-full flex justify-center items-center font-bold text-lg md:text-xl subpixel-antialiased h-16">
      <ul className="inline-block py-2 tab--list">
        <li className="inline-block pr-4 md:pr-8"><a href="#!">Shots <span className="font-normal">30</span></a></li>
        <li className="pr-4 md:pr-8 hidden sm:hidden md:inline-block"><a href="#!">For Sale <span className="font-normal">10</span></a></li>
        <li className="pr-4 md:pr-8 hidden sm:hidden md:inline-block"><a href="#!">Followers <span className="font-normal">5,000</span></a></li>
        <li className="pr-4 md:pr-8 hidden sm:hidden md:inline-block"><a href="#!">Projects <span className="font-normal">70</span></a></li>
        <li className="inline-block pr-4 md:pr-8"><a href="#!">More <span className="caret text-sm">&#8744;</span></a></li>
      </ul>
    </div>
  )
}

export default Tab;
