import { Button, Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'

function SudokuTable({ sudokuData, sudokuSolveData, handleSolve }) {
  return (
    <>
      <WrappedSudokuTable>
          <h2>Sudoku Solver Detection</h2>
          {
            !sudokuSolveData ? (
              <>
                {
                  sudokuData.map((row, rowIndex) => {
                    return (
                      <>
                        <Row wrap="false" key={rowIndex} className='sudoku-row'>
                          {
                            row.map((col, colIndex) => {
                              return (
                                <Col flex={1} key={colIndex} className="sudoku-cell">{col != 0 ? col : ""}</Col>
                              )
                            })
                          }
                        </Row>
                      </>
                    )
                  })
                }
              </>
            ) : (
              <>
                {
                  sudokuSolveData.map((row, rowIndex) => {
                    return (
                      <>
                        <Row wrap="false" key={rowIndex} className='sudoku-row'>
                          {
                            row.map((col, colIndex) => {
                              return (
                                <Col flex={1} key={colIndex} className={`sudoku-cell ${sudokuSolveData[rowIndex][colIndex] == sudokuData[rowIndex][colIndex] ? "primary" : ""}`}>{col != 0 ? col : ""}</Col>
                              )
                            })
                          }
                        </Row>
                      </>
                    )
                  })
                }
              </>
            )
          }
          <Button type='primary' onClick={() => handleSolve()}>Solve</Button>
        </WrappedSudokuTable>
    </>
  )
}

export default SudokuTable

const WrappedSudokuTable = styled.div`
  font-family: 'Zen Dots', cursive;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 450px; */

  .sudoku-row:nth-of-type(3), .sudoku-row:nth-of-type(6){
    margin-bottom: 4px;
  }

  .sudoku-cell{
    font-family: 'Zen Dots', cursive;
    background-color: #07FF8A;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    margin: 1px;
    color: #002234;
  }
  .sudoku-cell.primary{
    background-color: #002234;
    color: white
  }
  .sudoku-cell:nth-of-type(3), .sudoku-cell:nth-of-type(6){
    margin-right: 4px;
  }
`