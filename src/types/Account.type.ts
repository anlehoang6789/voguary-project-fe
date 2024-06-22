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
  profileImage: string;
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
  token: string;
  refreshToken: string;
  expired: string;
}

export interface UserRegister {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  fullName: string;
}
export interface UserRegisterResponse {
  userId: number;
}

export interface verifyCodeRequest {
  userId: number;
  code: string;
}

export interface UserProfileResponse {
  userId: number;
  userName: string;
  fullName: string;
  phone: string;
  gender: number;
  dateOfBirth: string;
  email: string;
  address: string;
  profileImage: string;
  accountStatus: string;
  roles: string;
  membershipTypeName: any;
}

export interface ChangePasswordRequest {
  userId: number;
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  userId: number;
  userName: string;
  fullName: string;
  password: string;
  phone: string;
  gender: number;
  dateOfBirth: string;
  email: string;
  profileImage: any;
  userStatus: string;
  address: string;
  carts: any[];
  conversationUser1s: any[];
  conversationUser2s: any[];
  deposits: any[];
  feedbacks: any[];
  memberships: any[];
  messages: any[];
  notifications: any[];
  payments: any[];
  ratings: any[];
  rentalOrders: any[];
  tokens: any[];
  verifyCodes: any[];
  roles: any[];
}
export interface UpdateAvatarRequest {
  userId: number;
  profileImage: string;
}

export interface UpdateAvatarResponse {
  userId: number;
  profileImage: string;
}

export interface AdminGetListUser {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  items: AdminGetListUserChildrenResponse[];
}
export interface AdminGetListUserChildrenResponse {
  userId: number;
  userName: string;
  fullName: string;
  password: string;
  phone: string;
  gender: number;
  dateOfBirth: string;
  email: string;
  profileImage: string;
  accountStatus: string;
  membershipTypeName: any;
}
