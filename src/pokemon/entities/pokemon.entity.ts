import { Document } from "mongoose";


@Schema()
export class Pokemon extends Document {
  // id: string // Me lo da mongo

  name: string;
  no: number;



}
