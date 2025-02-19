import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "./ui/card.jsx";

function About() {
    return (
            <div className="container">
            <Card className='flex items-center flex-col mx-auto bg-[#141413] border-[#404138] border-[0.5px] py-10'>
                <CardHeader className='flex justify-center items-center mx-auto'>
                    <CardTitle className='text-center px-4 py-2 text-primary border-[0.5px] border-[#404138] bg-secondary font-urbanist rounded-full text-sm tracking-wide font-thin'>Why NeonX ?</CardTitle>
                </CardHeader>
                <CardContent className='flex text-[#CCCCCC] sm:text-lg md:text-xl lg:text-2xl font-urbanist max-w-5xl text-center'>
                    <p>Because we don’t just build we innovate. We bring the bold, the futuristic, the unforgettable.
                       We're just getting started, and if you’re looking for a team that blends creativity with cutthroat efficiency, you’re in the right place
                    </p>
                </CardContent>
            </Card>
            </div>
    );
}

export default About
