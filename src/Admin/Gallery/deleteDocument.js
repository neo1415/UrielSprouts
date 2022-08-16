import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Components/firebaseConfig';
const deleteDocument = (collectionName, documentId) => {
  return deleteDoc(doc(db, collectionName, documentId));
};

export default deleteDocument;