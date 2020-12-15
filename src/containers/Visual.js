import anime from 'animejs';
import './Visual.css';
// import styled from 'styled-components';


const Visual =() => {


    const animation = anime({
        targets: 'div.box',
        translateX:[
            {value: 200, duration: 500},
            {value: 0, duration: 800}
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },
        autoplay: true,
        loop: true
    })

    return(
        <>
            <div className='box' ></div>
            <h2>Visuals</h2>
        </>
    )
}

export default Visual;