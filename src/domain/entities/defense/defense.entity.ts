export class DefenseEntity {
  constructor (
    public readonly id: string,
    public readonly phase: string,
    public readonly project: string,
    public readonly student: string,
    public readonly calification: string,
    public readonly courtMember: string,
    public readonly observation: string,
  ) {}
}