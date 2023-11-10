import { styled } from "styled-components";

export const VolumeProgressLine = styled.div`
width: 109px;
`
export const VolumeProgressLineInput = styled.input`
width: 109px;
`

export default function VolumeProgressBlock({ volume, onVolumeChange }) {
  const handleVolumeChange = (event) => {
    const shiftVolume = event.target.value;
    onVolumeChange(shiftVolume);
  };

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
  );
}



//   let volumeIcon;
//   if (volume >= 30 && volume < 50) {
//     volumeIcon = <img src="icon1.png" alt="Volume icon 1" />;
//   } else if (volume >= 50 && volume < 100) {
//     volumeIcon = <img src="icon2.png" alt="Volume icon 2" />;
//   } else if (volume === 100) {
//     volumeIcon = <img src="icon3.png" alt="Volume icon 3" />;
//   }


