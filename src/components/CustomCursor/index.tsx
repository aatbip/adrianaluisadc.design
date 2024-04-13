'use client'

//@ts-ignore
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { ReactNode } from 'react';

export const AppCursor = ({ children }: { children: ReactNode; }) => {
  return (
    <>
      <CustomCursor
        targets={['.link']}
        customClass='cursor-circle'
        dimensions={30}
        fill='#ffffff'
        smoothness={{
          movement: 0.07,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={1}
        opacity={1}
      />
      {children}
    </>
  )
}
