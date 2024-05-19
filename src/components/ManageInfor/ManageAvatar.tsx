import { InboxOutlined } from '@ant-design/icons';
import { Button, Divider, Typography, Upload } from 'antd';
import { useState } from 'react';
import { RcFile } from 'antd/es/upload';
import CustomGradientButton from 'components/CustomGradientButton';

export default function ManageAvatar() {
  const { Dragger } = Upload;

  const defaultAvatar =
    'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_preview_default.png?alt=media&token=0bbfe019-baaa-4bce-ba00-c9f08f868a1c';

  const allowImageTypes = ['jpg', 'jpeg', 'png'];
  const [previewImage, setPreviewImage] = useState(defaultAvatar);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isImageFile, setIsImageFile] = useState(false);

  //hàm check xem cái file upload có phải là ảnh không
  const checkBeforeUpload = (file: RcFile) => {
    const allowedFile = file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2);
    const isAllowed = allowImageTypes.includes(allowedFile.toLocaleLowerCase());
    setIsImageFile(isAllowed);
    return false;
  };

  return (
    <div>
      <Typography.Title level={3} className='text-center mt-4'>
        Ảnh đại diện
      </Typography.Title>
      <Divider />
      <div className='mx-auto flex max-w-[500px] flex-col gap-6 mb-12'>
        <div className=' border-[1px] border-[#2d2f31] p-4'>
          <div className='bg-[#f7f9fa] '>
            <img
              className='m-auto h-[200px] w-[200px] object-cover rounded-full'
              src={previewImage ? previewImage : defaultAvatar}
              alt='ảnh xem trước'
            />
          </div>
        </div>
        <div>
          <Dragger beforeUpload={checkBeforeUpload}>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>Ấn hoặc kéo thả ảnh vào để upload</p>
            <p className='ant-upload-hint'>Hỗ trợ định dạng: .jpg .jpeg .png</p>
          </Dragger>
        </div>
        <CustomGradientButton>
          <Button type='primary' size='large'>
            Lưu thay đổi
          </Button>
        </CustomGradientButton>
      </div>
    </div>
  );
}
