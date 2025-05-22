export interface IApplicationBase {
  id: string;
  createdAt: Date;
  appliedAt: Date;
  updatedAt?: Date | null;
  companyName: string;
  jobTitle: string;
}
