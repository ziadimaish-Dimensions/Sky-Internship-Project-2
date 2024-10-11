export interface VacationHistory {
  id: number;
  employeeId: number;
  startDate: Date;
  endDate: Date;
  status: 'approved' | 'declined';
}
