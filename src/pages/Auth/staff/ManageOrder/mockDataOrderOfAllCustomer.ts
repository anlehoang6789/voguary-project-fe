export interface Order {
  orderId: number;
  orderCode: string;
  customerName: string;
  email: string;
  phone: string;
  totalPrice: number;
  transactionDate: string;
  status: string;
}

const mockOrderData: Order[] = [
  {
    orderId: 1,
    orderCode: 'ORD001',
    customerName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    totalPrice: 1000000,
    transactionDate: '2024-01-01',
    status: 'Chờ xác nhận'
  },
  {
    orderId: 2,
    orderCode: 'ORD002',
    customerName: 'Le Thi B',
    email: 'lethib@example.com',
    phone: '0987654321',
    totalPrice: 2000000,
    transactionDate: '2024-01-02',
    status: 'Chờ giao hàng'
  },
  {
    orderId: 3,
    orderCode: 'ORD003',
    customerName: 'Tran Van C',
    email: 'tranvanc@example.com',
    phone: '0934567890',
    totalPrice: 1500000,
    transactionDate: '2024-01-03',
    status: 'Đang vận chuyển'
  },
  {
    orderId: 4,
    orderCode: 'ORD004',
    customerName: 'Pham Thi D',
    email: 'phamthid@example.com',
    phone: '0909876543',
    totalPrice: 2500000,
    transactionDate: '2024-01-04',
    status: 'Đã hoàn thành'
  },
  {
    orderId: 5,
    orderCode: 'ORD005',
    customerName: 'Hoang Van E',
    email: 'hoangvane@example.com',
    phone: '0912345678',
    totalPrice: 3000000,
    transactionDate: '2024-01-05',
    status: 'Đã hủy'
  }
];

export default mockOrderData;
