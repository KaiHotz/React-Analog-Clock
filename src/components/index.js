import styled from 'styled-components'

const getAngle = (fraction, factor) => (270 + (fraction * factor))

const BaseHand = styled.div`
  position: absolute;
	top: 50%;
`

export const ClockBase = styled.div`
  position: relative;
  border: 10px solid orange;
  width: 50vw;
  height: 50vw;
  margin: 0 auto;
  background-color: black;
  border-radius: 100%;
`

export const Center = styled.div`
  position: absolute;
	top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	width: 12px;
	height: 12px;
	border: 2px solid #fff;
	background-color: orange;
	border-radius: 100%;
	z-index: 100;
`

export const SecondHand = styled(BaseHand)`
	left: 40%;
	outline: 2px solid orange;
	width: 59%;
  transform-origin: 17%;
  transform: rotate(${props => getAngle(props.fraction, 6)}deg);
  transition: ${props => props.fraction > 0 && 'transform 0.5s ease-in-out'}
`

export const MinuteHand = styled(BaseHand)`
  left: 45%;
	outline: 2px solid #fff;
	width: 45%;
  transform-origin: 11%;
  transform: rotate(${props => getAngle(props.fraction, 6)}deg)
`

export const HourHand = styled(BaseHand)`
	left: 45%;
  outline: 2px solid #fff;
	width: 35%;
  transform-origin: 14%;
  transform: rotate(${props => getAngle(props.fraction, 30)}deg)
`
