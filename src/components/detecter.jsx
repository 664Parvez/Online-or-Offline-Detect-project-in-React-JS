import React, { useState } from 'react'

const Online_offline_detect = () => {

    const mes_one = 'You are in Online'
    const mes_two = 'You are in Offline'

    const [detect, setDetect] = useState(mes_one)
    const [bgColor, setBgColor] = useState ('#0083ff')
    const [show, setShow] = useState ('none')

    if (window.addEventListener('offline', () => {
        setDetect (mes_two)
        setBgColor('#ff3200')
        setShow('block')
        setInterval (() => {
            setShow ('none')
        }, 5000)
    })) {

    }
    else if (window.addEventListener ('online', () => {
        setDetect(mes_one)
        setBgColor ('#0083ff')
        setShow('block')
        setInterval (() => {
            setShow ('none')
        }, 5000)
    })) {
        
    }

    return(
        <>
            <div id='result' style={{background: bgColor, display: show}}><h2> { detect } </h2></div>
        </>
    )
}

export default Online_offline_detect
