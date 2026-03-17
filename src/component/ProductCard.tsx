export interface Product {
    id: number;
    name: string;
    price: number;
    isLiked: boolean;
}
interface ProductCardProps {
    product: Product;
    onToggleLike: (id : number) => void;
}
const ProductCard = ({ product, onToggleLike }: ProductCardProps) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '15px',
            margin: '10px',
            borderRadius: '8px',
            backgroundColor: product.isLiked ? '#fff0f0' : '#fff',
        }}>
             <h3>{product.name}</h3>
            <p>Gia: {product.price.toLocaleString()} VND</p>
            <button onClick={() => onToggleLike(product.id)}>
                {product.isLiked ? '❤️ Đã thích' : '🤍 Yêu thích'}
            </button>
        </div>
    )
}
export default ProductCard;
