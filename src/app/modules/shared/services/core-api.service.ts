import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StringHelper } from '../../controllers/helpers/string.helper';
import { IUser } from '../interface/user';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CoreApiService {

  constructor(private http: HttpClient) {}

  rootServiceUrl = 'http://localhost:4500/';


  // getDashboardMetrics() {
  //   return this.http.get<{
  //     data: DashboardSummary;
  //     success: boolean;
  //     message: string;
  //     error: string | null;
  //   }>(`${this.rootServiceUrl}api/dashboard/summary`);
  // }

  getProfile() {
    return this.http.get<{
      data: IUser;
      success: boolean;
      message: string;
      error: string | null;
    }>(`${this.rootServiceUrl}api/users/get-profile`);
  }

  updateUsername(username: string) {
    return this.http.patch<{
      data: IUser;
      success: boolean;
      message: string;
      error: string | null;
    }>(`${this.rootServiceUrl}api/users/update-profile`, { username });
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.http.post<ApiResponse>(`${this.rootServiceUrl}api/auth/change-password`, {
      currentPassword,
      newPassword,
    });
  }
  createShipment(request:any) {
    return this.http.post<ApiResponse>(`${this.rootServiceUrl}api/shipments/create-shipment`, request);
  }
  trackShipment(request:any) {
    return this.http.post<ApiResponse>(`${this.rootServiceUrl}api/shipments/track-shipment`, request);
  }
  getDashboardMetrics() {
    return this.http.get<ApiResponse>(`${this.rootServiceUrl}api/shipments/dashboard-metrics`);
  }
}
