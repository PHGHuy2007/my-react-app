import './Header.css'
import {useEffect, useState} from "react";

const Header = () => {

    const [name] = useState('T2512E');
    const [age] = useState(0);
    const [email] = useState('phanhoanggiahuy2007@gmail.com');
    const [text, setText] = useState("");

    useEffect(() => {
        document.title = text || 'T2512E';
    })
    return (
        <>
            <header>Hello {name}</header>
            <div>Hello {age}</div>
            <div>Hello {email}</div>
            <div>
                <input
                    type="text"
                    placeholder="Nhập tiêu đề trang..."
                    onChange={(e) => setText(e.target.value)}
                />
                <p>Giá trị hiện tại: {text}</p>
            </div>
        </>
    )
}

export default Header