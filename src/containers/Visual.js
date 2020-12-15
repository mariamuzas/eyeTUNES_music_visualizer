import anime from 'animejs';
import './Visual.css';
import KeyVisual from '../components/KeyVisual'
import {useState, useEffect} from 'react'
import styled from 'styled-components';


const Visual =({lastKey, pads}) => {

    const keyVisuals = Object.values(pads).map(pad => (
        <KeyVisual color={pad.color} playState={pad.keyPress === lastKey} padKey={pad.keyPress}/>
    ))


    return(
        <>
            <h2>Visuals</h2>
            { keyVisuals }
        </>
    )
}

export default Visual;