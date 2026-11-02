import { useState } from "react";

const Board = () => {

    //1. 상태변수
    const [title, setTitle] = useState('제목');
    const [content, setContent] = useState('내용');
    const [author, setAuthor] = useState('작성자');


    // 2. 함수


    // 5. 화면표시
    return (
        <div>
            <h3>게시판글쓰기</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input value={content} onChange={(e) => setContent(e.target.value)}/>
            <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <button>글쓰기</button>
        </div>
    )
}

export default Board;