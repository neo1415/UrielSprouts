import React from 'react'

const HandleDownload = async () => {
    try {
        const response = await fetch(id);
        const data = await response.blob();
        const blob = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = blob;
        link.download = id;
        link.click();
        URL.revokeObjectURL(blob);
        link.remove();
      } catch (error) {
        console.log({
          isAlert: true,
          severity: 'error',
          message: error.message,
          timeout: 8000,
          location: 'main',
        });
        console.log(error);
      }
}

export default HandleDownload