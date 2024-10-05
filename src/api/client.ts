export type BaseProgram = {
  author_id: string;
  created_at: Date;
  updated_at: Date;
  is_public: boolean;
  code: string;
};

export type Program = BaseProgram & {
  id: string;
};

export type CreateProgramRequest = {
  is_public: boolean;
  code: string;
};

export type UpdateProgramRequest = {
  id: string;
  is_public: boolean;
  code: string;
};

export type DeleteProgramRequest = {
  id: string;
};

export interface ApiClient {
  createProgram(request: CreateProgramRequest): Promise<Program>;
  updateProgram(request: UpdateProgramRequest): Promise<void>;
  deleteProgram(request: DeleteProgramRequest): Promise<void>;
  getProgram(id: string): Promise<Program | null>;
  getUserPrograms(): Promise<Program[]>;
}
