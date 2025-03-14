'use client'

import React from 'react'
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import UnderText from './UnderText';

const UsernameForm = () => {
    console.log('Username form is rendering')


    return (
        <div className="w-[350px]">
            <div className="pb-10">
            <Label htmlFor="username" className="pb-4">Username</Label>
            <Input suppressHydrationWarning={true} id="username" placeholder="This will be your display name" onChange={(event) => { console.log(event.target.value) }} />
            </div>
            <Button className="hover:bg-gray-800 hover:cursor-pointer">Submit</Button>

            <div className='mt-10'>
                <UnderText />

            </div>
        </div>
    )
}

export default UsernameForm