export interface GetNotiResponse {
  notificationId: number;
  userId: number;
  notificationMessage: string;
  dateSent: string;
  notificationType: string;
  seen: boolean;
}
