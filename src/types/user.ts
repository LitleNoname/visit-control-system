export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  login: string;
  fullName: string;
  role: UserRole;
  groupId?: number; // только у студентов
}

export interface DbTeacher {
  id: string; login: string; password: string; fullName: string;
}
export interface DbStudent {
  id: string; login: string; password: string; fullName: string; groupId: number;
}