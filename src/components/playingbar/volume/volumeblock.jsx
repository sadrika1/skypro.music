import { styled } from 'styled-components'

export const VolumeProgressLine = styled.div`
  width: 109px;
`
export const VolumeProgressLineInput = styled.input.attrs({type: 'range'})`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 10px;
  background: ${(props) => 
  `linear-gradient(to right, 
    #fff,
    #fff ${props.value}%,
    #000 ${props.value}%,
    #000 100%)`};
    border-radius: 5px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 24px;
      height: 24px;
      background-image: radial-gradient(circle, #000 50%, #fff 45%);
      border-radius: 50%;
    }
`

export default function VolumeProgressBlock({ volume, onVolumeChange }) {
  const handleVolumeChange = (event) => {
    const shiftVolume = event.target.value
    onVolumeChange(shiftVolume)
  }

  return (
    <VolumeProgressLine>
      <VolumeProgressLineInput
        type="range"
        name="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        $progress={volume}
      />
    </VolumeProgressLine>
  )
}

//   let volumeIcon;
//   if (volume >= 30 && volume < 50) {
//     volumeIcon = <img src="icon1.png" alt="Volume icon 1" />;
//   } else if (volume >= 50 && volume < 100) {
//     volumeIcon = <img src="icon2.png" alt="Volume icon 2" />;
//   } else if (volume === 100) {
//     volumeIcon = <img src="icon3.png" alt="Volume icon 3" />;
//   }
