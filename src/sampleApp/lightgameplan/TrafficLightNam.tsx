import React, { useState, useEffect } from 'react';
import './TrafficLightStyle.css';

interface LightConfig {
    id: number;
    color: string; 
    duration: number;
}

const TRAFFIC_LIGHTS: LightConfig[] = [
    { id: 1, color: 'green',  duration: 5000 },
    { id: 2, color: 'yellow', duration: 4000 },
    { id: 3, color: 'red',    duration: 3000 }
    // { id: 4, color: 'orange', duration: 1000 }
];

const TrafficLightArrayStyle = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const currentLight = TRAFFIC_LIGHTS[activeIndex];

    useEffect(() => {
        const timer = setTimeout(() => {
            
            setActiveIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % TRAFFIC_LIGHTS.length;
                return nextIndex;
            });

        }, currentLight.duration);

        return () => clearTimeout(timer);
        
    }, [activeIndex]);

    return (
        <>
            <div className="traffic-light-container">
            <h1>Sample App: Traffice Light Nam</h1>
                <div className="traffic-light-housing">
                    {TRAFFIC_LIGHTS.map((light, index) => (
                        <div 
                            key={light.id}
                            className={`light light-${light.color} ${index === activeIndex ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
                
                <div className="light-status">
                    Current: {currentLight.color.toUpperCase()} ({currentLight.duration/1000}s)
                </div>
            </div>
        </>
    );
}

export default TrafficLightArrayStyle;