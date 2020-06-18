import styled, { css } from 'styled-components'

export const BestlistHeading = styled.div`
  text-align: center;
  font-weight: 400;
  font-family: 'mine-sweeper';
  letter-spacing: .1rem;
  cursor: context-menu;
  max-width: 100vw;
  padding-bottom: 5px;
  letter-spacing: .3rem;
  margin: 0 auto;
  color: white;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  margin-top: 10rem;

  @media only screen and (min-width: 700px) {
    font-size: 3.5rem;
    margin-bottom: 5rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 4.5rem;
    margin-bottom: 5rem;
  }
`

export const BestlistSurvivors = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 50rem;
  margin-left: 20px;

  ${props => props.survivorsExist === false && css`
    overflow-y: hidden;
  `}

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px white; 
  }

  ::-webkit-scrollbar-thumb {
    background: white; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white; 
  }

  @media only screen and (min-width: 700px) {
    max-width: 80vw;
    max-height: 60rem;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 60vw;
    max-height: 60rem;
  }

  @media only screen and (min-width: 1500px) {
    max-width: 40vw;
    max-height: 60rem;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ToggleModalButton = styled.button`
  font-weight: 600;
  font-family: 'mine-sweeper';
  padding: 5px 5px;
  letter-spacing: .2rem;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  color: #c71010;

  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
    margin-right: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    margin-right: 3rem;
    margin-top: 3rem;
  }
`

export const BestlistSubmitHeading = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  font-family: 'mine-sweeper';
  letter-spacing: .1rem;
  cursor: context-menu;
  max-width: 100vw;
  padding-bottom: 5px;
  letter-spacing: .3rem;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
` 

export const BestlistSubmitFormwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RecordholderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  min-height: 50px;
`

export const RecordholderTime = styled.div`
  font-family: 'mine-sweeper';
  font-size: 1.5rem;
  letter-spacing: .2rem;
  color: #c71010;

  @media only screen and (min-width: 700px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`

export const RecordholderTimeSign = styled.span`
  font-size: .75rem; 
  margin-left: 2px; 

  @media only screen and (min-width: 700px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

export const RecordholderRank = styled.div`
  font-weight: 900;
  font-family: 'mine-sweeper';
  font-size: 1.5rem;
  letter-spacing: .2rem;
  color: #00b600;

  @media only screen and (min-width: 700px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`

export const RecordholderUsername = styled.div`
  margin-bottom: 0;
  font-weight: 900;
  font-family: 'mine-sweeper';
  font-size: 1.5rem;
  letter-spacing: .2rem;
  color: white;

  @media only screen and (min-width: 700px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`

export const NoRecordholderWrapper = styled.div`
  font-family: 'mine-sweeper';
  font-size: 1rem;
  letter-spacing: .1rem;
  text-align: center;
  color: #00b600;

  @media only screen and (min-width: 700px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`

export const SelectMenueWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;

  * {
    margin: .75rem 0;
  }

  svg {
    font-size: 2.5rem;
    line-height: 1;
    margin: 0;
  }

  @media only screen and (min-width: 700px) {
    margin-bottom: 5rem;

    * {
      margin: 1.5rem 1rem;
    }

    svg {
      font-size: 4rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    margin-bottom: 10rem;

    svg {
      font-size: 3rem;
    }
  }
`

export const SelectButton = styled.button`
  font-family: 'mine-sweeper';
  letter-spacing: .3rem;
  font-size: 1.25em;
  color: white;
  background-color: transparent;
  border: none;
  width: fit-content;
  padding: 0;
  text-align: center;
  transition-duration: 200ms;

  :hover {
    color: rgb(199, 16, 16);
    cursor: pointer;
  }

  ${props => props.selected && css`
    color: #00b600;
  `}

  @media only screen and (min-width: 700px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

export const Sidewrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin-left: auto;
  margin-bottom: 10rem;
  margin-right: auto;

  @media only screen and (min-width: 700px) {
    max-width: 70vw;
    margin-right: 5rem;
    margin-left: 5rem;

    ${props => props.submit && css`
      margin-top: -3rem;
    `}
  }

  @media only screen and (min-width: 1200px) {
    max-width: 90vw;
    margin: 0 auto;
    margin-bottom: 10rem;

    ${props => props.submit && css`
      margin-top: -5rem;
    `}
  }
`

export const SubmitForm = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  width: fit-content;
  
  textarea {
    width: 100%;
    padding: 0;
    border: none;
    resize: none;
    font-size: 2rem;
  }
`

export const SubmitFormButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const SubmitButton = styled.button`
  font-weight: 600;
  font-family: 'mine-sweeper';
  background-color: rgb(192, 192, 192);
  border-top: 4px solid white;
  border-left: 4px solid white;
  border-bottom: 4px solid grey;
  border-right: 4px solid grey;
  padding: 5px 15px;

  :last-child {
    margin-left: 10px;
  }
`