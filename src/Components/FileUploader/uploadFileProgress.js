import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

const uploadFileProgress = (file, subFolder, imageName, setProgress) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, file.name);
    const upload = uploadBytesResumable(storageRef, file.name);
    upload.on(
      'state_change',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        reject(error);
      },
      async () => {
        try {
          const url = await getDownloadURL(storageRef);
          resolve(url);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};

export default uploadFileProgress;
