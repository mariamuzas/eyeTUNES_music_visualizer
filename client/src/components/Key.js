import styled from 'styled-components';

let Pad = styled.li` 
display: block;
height: 6vh;
width: 8vw;
margin: auto;
border: 2px solid white;
color: white;
font-size: 12pt;
text-align: center;
justify-content: center;
`

const StyledPad = styled(Pad).attrs(props => ({
    style: {
        backgroundColor: (props.isLastPad) ? '#'+props.color : 'black'
    }
}))``
     
const Key = ({individualPad, onKeyClick, isLastPad}) => {

        
    return (
        <div onClick={onKeyClick}>
            <StyledPad color={individualPad.color} isLastPad={isLastPad}> {individualPad.keyPress.toUpperCase()} <br/> {individualPad.note} </StyledPad>
        </div>
    )
}
    
export default Key