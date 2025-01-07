import { ReactNode, useState } from 'react';

interface ContainerProps {
  children: ReactNode;
}

function ContainerMain({ children }: ContainerProps) {

  return (
    <div className="pt-10 sm:pt-24 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContainerMain;
