// # frontend/src/pages/Detail.jsx
import React, {useEffect, useState} from "react"
import axios from 'axios';
import { useNavigate, useLocation, Link } from "react-router-dom";

const Detail = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id; // 상세보기하려는 게시글의 id값
    console.log('Detail/id: ', id);
    const handleDeleteBtnClick = async (e) => {
        e.preventDefault();
        if(window.confirm("게시글을 삭제하시겠습니까?")){
            const request_data = {id: id};
            let response = await axios({
                method: 'delete',
                url: '/api/delete-board',
                headers: {'Content-Type': 'application/json'},
                data: JSON.stringify(request_data)
            });
            console.log('Detail/handleDeleteBtnClick/response: ', response);
            if(response.status == 204){
                alert("게시글 삭제완료!")
                navigate("/", { });
            }
            else {
                alert("게시글 삭제실패ㅠ")
            }

        } else {
            return
        }

    };

    useEffect(() => {
        const getDetailBoard = async () => {
            let response = await axios.get(`/api/board-detail/${id}`);
            console.log('Detail/response: ', response);
            console.log('Detail/response.data: ', response.data);
            console.log('Detail/response.data.data: ', response.data.data);
            setTitle(response.data.data.title);
            setContent(response.data.data.content);
        }
        getDetailBoard();
    }, [])
    return (
        <>
            <h1> {title} </h1>
            <h3> {content} </h3>
            <Link
                to = {"/update-board"}
                state = {{
                    id: id,
                    title: title,
                    content: content,
                }}
            > 수정 하기 | </Link>
            <input type="button" onClick={handleDeleteBtnClick} value="삭제 하기"/>
            <Link
                to = {"/"}
                state = {{ }}
            > | 목록 보기 </Link>
        </>
    )
}

export default Detail;