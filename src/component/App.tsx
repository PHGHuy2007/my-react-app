import { useState, useEffect } from 'react';

// Bước 1: Định nghĩa kiểu dữ liệu (Interface) cho dữ liệu từ API
interface User {
    id: number;
    name: string;
    email: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const fetchUsers = () => {
        setIsLoading(true);
        setError(null);
        const xhr = new XMLHttpRequest();

        // 2. Cấu hình yêu cầu: Phương thức GET và URL
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    setUsers(data);
                    setError(null);
                } catch (e) {
                    setError("Lỗi định dạng dữ liệu từ seever");
                }
            } else {
                setError("Lỗi kết nối mạng, ko thể gọi API");
            }
            setIsLoading(false);
        }
        xhr.send();
    }


    // Bước 4: Dùng useEffect để tự động gọi hàm fetchUsers khi component render lần đầu
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Danh sách người dùng (React + TS)</h1>
            {isLoading && <p>Đang tải dữ liệu...</p>}
            {error && <p style={{ color: 'red' }}>Lỗi: {error}</p>}
            {!isLoading && !error && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users.map((user) => (
                        <li
                            key={user.id}
                            style={{
                                border: '1px solid #ccc',
                                margin: '10px 0',
                                padding: '10px',
                                borderRadius: '8px'
                            }}
                        >
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;