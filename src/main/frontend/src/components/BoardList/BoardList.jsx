// # main/frontend/src/componets/BoardList/BoardList.jsx

import React from "react";
import BoardBox from "../BoardBox/BoardBox";


const BoardList = (props) => {
   console.log('boerdList/props: ', props);
   console.log('boerdList/props.data: ', props.data);
  return (
    <>
       {Array.isArray(props.data) && props.data.length !== 0 ?
        props.data.map((i) => (
            <BoardBox
                key = {i.id}
                id = {i.id}
                title = {i.title}
                content = {i.content}
            />
        ))
        : <p>게시글이 존재하지 않습니다</p>}
    </>
  );
};
export default BoardList;