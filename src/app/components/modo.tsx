'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
export default function Modo() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className=" block "
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <MdOutlineDarkMode className="text-2xl hover:scale-110 duration-300" />
      ) : (
        <MdDarkMode className="text-2xl hover:scale-110 duration-300" />
      )}
    </button>
  );
}
