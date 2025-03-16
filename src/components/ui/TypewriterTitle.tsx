"use client"
// import { Type } from 'lucide-react';
import React from 'react'
import Typewriter from 'typewriter-effect';

type Props = {}; 

const TypewriterTitle = (props: Props) => {
 
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(" 🚀 Supercharged productivity")
          .pauseFor(1000)
          .deleteAll()
          .typeString(" 🗓️ A todo assistant to rely on")
          .start();
      }}
    />
  );
};
export default TypewriterTitle;