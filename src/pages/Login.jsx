import { useState } from "react";

const Login = () => {
    // 1. 상태변수 아이디, 암호
    const [id, setId] = useState('아이디');
    const [pw, setPw] = useState('암호');

    // 5. 화면에 입력하는 항목 2개와 버튼을 만듦

    return (
        <div>
            <input value={id} onChange={(e) => setId(e.target.value)} />
            <input value={pw} onChange={(e) => setPw(e.target.value)} />
            <button>입력</button>
        </div>
    )
}

export default Login;