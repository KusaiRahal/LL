import mongoose, { Document, Schema } from 'mongoose';

export interface ILeak extends Document {
  title: string;
  content: string;
  source: string;
  date: Date;
  tags: string[];
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const LeakSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  tags: [{
    type: String,
    trim: true
  }],
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model<ILeak>('Leak', LeakSchema); 