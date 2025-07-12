import mongoose from 'mongoose';

const helperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true, enum: ['Nurse', 'Driver', 'Maid', 'Plumber', 'Laundry', 'Newspaper'] },
  employeeId: { type: String, required: true },
  mobileNo: { type: String, required: true },
  gender: { type: String },
  language: { type: [String], default: ['English'] },
  email: { type: String },
  kycDocument: { type: String },
  organization: { type: String, default: 'ASBL' },
  joinedOn: { type: Date, default: Date.now }
});

const Helper = mongoose.model('Helper', helperSchema);
export default Helper;