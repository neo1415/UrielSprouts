import React from 'react'
import { useState, useEffect } from 'react';
import './Gallery.scss'
import { collection } from 'firebase/firestore';
import { db, storage } from '../../Components/firebaseConfig';
import { deleteDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Delete, Download, MoreVert } from '@mui/icons-material';
import { motion } from 'framer-motion';

import { Avatar, Tooltip, Typography } from '@mui/material';

const Gallery = ({setSelectedImg}) => {
    const [images, setImage] = useState('')
 


    useEffect(()=> {
        const dataRef = collection(db, 'gallery')
        const q = query(dataRef, orderBy('createdAt', 'desc'));
        onSnapshot(q,(snapshot) => {
          const images = snapshot.docs.map((doc) => ({
            id:doc.id,
            ...doc.data(),
          }))
          setImage(images);
         
        })
      },[])

      function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }


  return (
    <div className='gallery-admin'>
<ImageList
  sx={{ width: 500, height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={121}
>
  {images && images.map((image, index) => (
    <ImageListItem key={image.img} 
              
            cols={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].cols
            }
            rows={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].rows
            }
            sx={{
              opacity: '.7',
              transition: 'opacity .3s linear',
              cursor: 'pointer',
              '&:hover': { opacity: 1 },
            }}
    >
      <img
        {...srcset(image.img, 121, image.rows, image.cols)}
        alt={Image.title}
        loading="lazy"
        onClick={()=> setSelectedImg(image.img)}
        
      /> 
    </ImageListItem>
  ))}
</ImageList>

    </div>


  )
}

const pattern = [
  {
    rows: 3,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 3,
    cols: 2,
  },
  {
    rows: 3,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
];

export default Gallery