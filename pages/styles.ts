import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0.5px 0.9px 3px rgba(0, 0, 0, 0.024), 1.5px 2.5px 8.3px rgba(0, 0, 0, 0.035),
    3.6px 6px 19.9px rgba(0, 0, 0, 0.046), 12px 20px 66px rgba(0, 0, 0, 0.07);
  border-radius: 4px;

  position: relative;
  display: inline-block;
  opacity: 0.9;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  font-size: 0; // bit.ly/39tUQqi

  cursor: pointer;

  :hover {
    transform: scale(1.05, 1.05);
    opacity: 1;
  }

  img {
    border-radius: 4px;
  }
`

export const MediaListSection = styled.section`
  margin-bottom: 40px;
`

export const HorizontalMediaList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ListTitle = styled.h3`
  color: #4c566a;
  margin-top: 0;
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`

export const MediaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 172px;
  height: auto;
`

export const MediaTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
`
