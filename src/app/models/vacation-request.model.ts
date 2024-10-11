export interface VacationRequest {
  id: number;
  employeeId: number;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'approved' | 'declined';
}
