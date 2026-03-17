// 1. Định nghĩa kiểu dữ liệu cho các Props nhận vào
interface UserDisplayProps {
    displayName: string;    // Kiểu chuỗi (String)
    clickCount: number;     // Kiểu số (Number)
    onUpdateClick: () => void; // Hàm xử lý khi nhấn nút (không trả về giá trị)
}

const UserDisplay = ({ displayName, clickCount, onUpdateClick }: UserDisplayProps) => {
    return (
        <>
            <div>User Display</div>
            <div>Fullname: {displayName}</div>
            <div>View: {clickCount}</div>
            <button onClick={onUpdateClick}>
                Nhấn để tăng số lần thao tác
            </button>
        </>
    );
};

export default UserDisplay;