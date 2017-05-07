import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: 'String', required: true },
  url: { type: 'String', required: true },
  fecha: { type: 'Date', default: Date.now, required: true },
  categorias: [String]
});

export default mongoose.model('Video', videoSchema);
