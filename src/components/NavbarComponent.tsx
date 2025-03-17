'use client'

import React from 'react'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu'
import Link from 'next/link'
import { useAppContext } from '@/context/context';

const NavbarComponent = () => {
    const { username } = useAppContext();

  return (
    <NavigationMenu>
        <NavigationMenuList>
            <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Set Name
                </NavigationMenuLink>
            </Link>

            <Link href={`/dashboard/${username}`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    API
                </NavigationMenuLink>
            </Link>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavbarComponent