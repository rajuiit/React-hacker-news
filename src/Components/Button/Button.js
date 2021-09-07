import React from 'react'
import './Button.css'
import EventList from '../HackerData/EventList'
import { eventsData } from "../HackerData/Data";
const Button = () => {
    return (
        <>
        <div className='btn-top'>
        <a href="#" className='btn-new'>New</a>
            <a href="#" className='btn-past'>Past</a>
        </div>

        <EventList data={eventsData} />

        <div className='btn-bottom'>
        <button type="button" href="#" className='btn-load'>Load More</button>
        </div>
        </>
    )
}

export default Button





 //Develop by Md. Omar Faruk Tutul