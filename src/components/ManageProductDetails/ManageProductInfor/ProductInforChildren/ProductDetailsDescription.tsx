export default function ProductDetailsDescription() {
  return (
    <div className='flex items-center justify-center'>
      {/* Phần bên trái chiếm 60% */}
      <div className='w-3/5 p-4'>
        <h1 className='text-2xl font-bold mb-4 uppercase'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi non aliquid
        </h1>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque temporibus pariatur illum quae,
          eveniet non adipisci impedit maiores dolor sit molestias voluptatibus reiciendis! Earum ex magni architecto
          autem voluptatem.
        </p>
      </div>

      {/* Phần bên phải chiếm 40% */}
      <div className='w-2/5 p-4'>
        <img src='https://via.placeholder.com/600x600' alt='Mô tả sản phẩm' className='w-full h-auto' />
      </div>
    </div>
  );
}
