import { User } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import {
  ApiClient,
  CreateProgramRequest,
  DeleteProgramRequest,
  Program,
  UpdateProgramRequest,
} from "./client";
import { db } from "../firebase";

const PROGRAMS_COLLECTION = "programs";

// TODO: Validate data has correct shape
const mapDocument = (id: string, data: DocumentData): Program => ({
  id,
  author_id: data.author_id,
  created_at: data.created_at.toDate(),
  updated_at: data.updated_at.toDate(),
  is_public: data.is_public,
  code: data.code,
});

export class FirestoreApiClient implements ApiClient {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  programRef(id: string) {
    return doc(db, PROGRAMS_COLLECTION, id);
  }

  async createProgram(request: CreateProgramRequest) {
    const id = uuidv4();
    const docRef = this.programRef(id);

    await setDoc(docRef, {
      author_id: this.user.uid,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      is_public: request.is_public,
      code: request.code,
    });

    // NB: Cast will always be safe if setDoc resolves
    return (await this.getProgram(id)) as Program;
  }

  async updateProgram(request: UpdateProgramRequest) {
    await updateDoc(doc(db, PROGRAMS_COLLECTION, request.id), {
      updated_at: serverTimestamp(),
      is_public: request.is_public,
      code: request.code,
    });
  }

  async deleteProgram(request: DeleteProgramRequest) {
    await deleteDoc(this.programRef(request.id));
  }

  async getProgram(id: string) {
    const programSnapshot = await getDoc(this.programRef(id));
    if (!programSnapshot.exists()) {
      return null;
    }

    return mapDocument(id, programSnapshot.data());
  }

  async getUserPrograms() {
    const userProgramsQuery = query(
      collection(db, PROGRAMS_COLLECTION),
      where("author_id", "==", this.user.uid)
    );

    const result = await getDocs(userProgramsQuery);
    return result.docs.map((doc) => mapDocument(doc.id, doc.data()));
  }
}
