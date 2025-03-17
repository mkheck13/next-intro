import NavbarComponent from '@/components/NavbarComponent';
import React from 'react'

const NavigationLayout = ({ children }: { children: React.ReactNode }) => {
    console.log('Nav layout is rendering');
  return (
    <div>
        <NavbarComponent />
        {children}
    </div>
  )
}

export default NavigationLayout