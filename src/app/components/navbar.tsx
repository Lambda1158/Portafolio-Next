import React from 'react';
import Modo from './modo';
const item: string[] = ['About me', 'Experiencia', 'Project', 'Contact me'];
function ItemLista({ title }: { title: string }) {
  return (
    <li className=" p-2 text-text dark:text-dtext cursor-pointer rounded-md hover:scale-125 duration-300 hover:underline ">
      {title}
    </li>
  );
}

export default function Navbar() {
  return (
<nav className="p-2 my-4 sticky top-0 z-50 bg-primary dark:bg-dprimary">
  <div className="grid grid-cols-[95%__5%]">
    <ul className="mx-auto flex  gap-6">
      {item.map((element, index) => {
        return <ItemLista key={index} title={element} />;
      })}
    </ul>
    <Modo />
  </div>
</nav>
  );
}
