import { useState } from "react";

const Register = () => {
    // 1. 상태변수 (아이디, 암호, 이름, 이메일)
    const [id, setId] = useState('아이디');
    const [pw, setPw] = useState('암호');
    const [name, setName] = useState('이름');
    const [email, setEmail] = useState('이메일');

    // 2. 함수

    // 5. 화면표시
    return (
        <div>
            <h3>회원가입</h3>
            <input value={id} onChange={(e) => setId(e.target.value)} /><br />
            <input value={pw} onChange={(e) => setPw(e.target.value)} /><br />
            <input value={name} onChange={(e) => setName(e.target.value)} /><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <button>회원가입</button>
        </div>
    )
}

export default Register;

