import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const resumeUrl = '/images/background.jpg';
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Example.jpg';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className="download-btn bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

export default DownloadButton;