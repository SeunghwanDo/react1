import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Board from "./pages/Board";
import BoardWrite from "./pages/BoardWrite";
import Join from "./pages/Join";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Link to="/"><button>홈</button></Link>
      <Link to="/board"><button>게시판</button></Link>
      <Link to="/boardwrite"><button>글쓰기</button></Link>
      <Link to="/login"><button>로그인</button></Link>
      <Link to="/register"><button>회원가입</button></Link>
      <Link to="/join"><button>Join</button></Link>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/boardwrite" element={<BoardWrite />} />
        <Route path="/register" element={<Register />} />
        <Route path="/join" element={<Join />} />
      </Routes>

      <hr />
      <div>footer</div>
    </div>
  )
}

export default App;