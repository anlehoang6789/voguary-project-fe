export interface LoginGoogleResponse {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  accessToken: string;
}
export interface User {
  userId: number;
  userName: string;
  fullName: string;
  password: string;
  phone: string;
  gender: number;
  dateOfBirth: string;
  email: string;
  profileImage: any;
  accountStatus: string;
  addresses: any[];
  carts: any[];
  deposits: any[];
  feedbacks: any[];
  memberships: any[];
  notifications: any[];
  payments: any[];
  ratings: any[];
  rentalOrders: any[];
  roles: any[];
}

export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  userID: number;
  userName: string;
  fullName: string;
  phone: string;
  gender: number;
  dateOfBirth: string;
  email: string;
  image: string;
  status: string;
}

export interface UserRegister {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  fullName: string;
}
