import { collection, query, getDocs, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Image } from "../models/Image";

class ImageService {
  constructor() {
    this.collection = "images";
  }

  async createImage(image) { 
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, image.toJson());

    image.id = docRef.id;
    return image;
  }

  async fetchImages() {
    const collectionRef = collection(db, this.collection);

    const querySnapshot = await getDocs(query(collectionRef));

    const images = [];
    querySnapshot.forEach((doc) => {
      images.push(Image.fromFirebase(doc));
    });

    return images;
  }
}

const service = new ImageService();
export default service;
