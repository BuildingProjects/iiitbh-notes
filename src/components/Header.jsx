import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import { HiHome } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { FaNoteSticky } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";
function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "About",
      icon: CiCircleInfo,
    },
    {
      name: "Contact",
      icon: IoMdContact,
    },
    {
      name: "Notes",
      icon: FaNoteSticky,
    },
    {
      name: "Coding",
      icon: FaCode,
    },
    {
      name: "PYQ",
      icon: MdStickyNote2,
    },
  ];
  return (
    <div className={`bg-[#6366F1] flex items-center justify-between p-5`}>
      <div className='text-white flex gap-2 hover:'>
        <PiBooksDuotone className='size-12 h-[4rem]' />
        <h1 className='text-white font-bold text-[25px]'>IIITBH NOTES</h1>
      </div>
      <div className='hidden md:flex gap-8'>
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      {/* responsive */}
      <div className='flex md:hidden items-center gap-5 mt-[9px]'>
        {menu.map(
          (item, index) =>
            index < 1 && <HeaderItem name={""} Icon={item.icon} />
        )}
        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          <HeaderItem name='' Icon={HiDotsVertical} />
          {toggle ? (
            <div className='absolute mt-3 bg-indigo-800 border-[1px] px-5 py-4 left-[15.5rem]'>
              {menu.map(
                (item, index) =>
                  index > 1 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
