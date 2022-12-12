import React from 'react'
import styled from 'styled-components';
const WrappedSampleSudokuImage = styled.div`
  background-color: red;
  height: 200px;
  width: 100%;
  overflow-x: scroll;
`

function SampleSudokuImage() {
  return (
    <WrappedSampleSudokuImage>
      123
    </WrappedSampleSudokuImage>
  )
}

export default SampleSudokuImage

