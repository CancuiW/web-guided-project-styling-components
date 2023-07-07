import React from 'react'
import styled from 'styled-components'

/*
.friend {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
*/
const FriendsStyle=styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    border-bottom:2px solid white;
    color:${props=>props.theme.black};
    background-color:${props => props.theme.primaryColor};
    transition:all 0.2s ease-in-out;
    &:hover{
      transition:all 0.2s ease-in-out;
      background-color:${props => props.theme.secondaryColor};
      
    }
    
    &::before{
      content:"${props=>props.besty?"love":"normal"}";
    }
    button{
      background-color:${props => props.theme.tertiaryColor};
    }




`

export default function Friend({ info, action ,besty}) {
  return (
    <FriendsStyle besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </FriendsStyle>
  )
}
