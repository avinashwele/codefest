import mongoose, { Schema, model, models } from 'mongoose';

export interface IRegistration {
  name: string;
  email: string;
  college_name: string;
  branch: string;
  year: string;
  mobile_no: string;
}

const RegistrationSchema = new Schema<IRegistration>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    college_name: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    mobile_no: { type: String, required: true },
  },
  { timestamps: true }
);

const Registration = models.Registration || model<IRegistration>('Registration', RegistrationSchema);

export default Registration;
