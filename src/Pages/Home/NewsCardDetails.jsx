import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { useLocation, useParams } from 'react-router-dom';

export default function NewsCardDetails() {
    const { id } = useParams(); 
    const xyz = useLocation();
    console.log(xyz);
    


    return (
        <div>
            <NavigationBar />
            <h1>Dragons News</h1>
            <p>{id}</p> 
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    {/* Content for the 3-column span */}
                </div>
                <div className="col-span-1">
                    {/* Content for the 1-column span */}
                </div>
            </div>
        </div>
    );
}
