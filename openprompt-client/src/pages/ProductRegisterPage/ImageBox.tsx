import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import palette from '@/styles/mui/palette';
interface IImageBoxProps {
  name: string;
  onChange: any;
}
const ImageBox = ({ name, onChange }: IImageBoxProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        width: 416,
        height: 416,
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundColor: '#D9D9D9',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!imageSrc && (
        <Box
          component="label"
          sx={{
            display: 'flex',
            flexDirection: 'column', // 아이콘과 텍스트를 수직 정렬하기 위해 설정
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
        >
          <DriveFolderUploadIcon
            sx={{
              color: palette.grey[300],
              fontSize: '83px',
              marginBottom: '10px',
            }} // 마진을 추가하여 아이콘과 텍스트 사이에 간격을 줍니다.
          />
          <Typography variant="body5" sx={{ color: 'gray' }}>
            Please upload a image
          </Typography>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              handleFileChange(e);

              const file = e.target.files?.[0];
              if (file) {
                onChange({
                  target: {
                    name: name,
                    value: file,
                  },
                });
              }
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ImageBox;
