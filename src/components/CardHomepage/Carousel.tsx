import Slider from 'react-slick';

export default function CustomCarousel() {
  return (
    <Slider autoplay dots>
      <div>
        <img
          src='https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/448749977_122114863820327879_5976207896387936120_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGj8enHAfechtjXs5IPBsjnlhIXoD8IFXOWEhegPwgVc4H6Y5DS5EFCaCtSAVQSGDJkB0vB6Wv7icDe78yidPpS&_nc_ohc=C6KxC6ZmwZAQ7kNvgHNmz69&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYAkDLQyMp6H2RLWNXhMqL2Pr_sxps1XkHkMV4Czy5jQHg&oe=667C9AC6'
          alt='Slide 1'
          className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80'
        />
      </div>
      <div>
        <img
          src='https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/448653275_122114522996327879_3144253116482339838_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHHVuv6ihgsBQyG_xaqFSAiyT004xTyqGLJPTTjFPKoWbmdUDZTSddc7jkfkNSrG9k__q0pZFpQ--ffErWTPit&_nc_ohc=NgF_NiOq3pQQ7kNvgFko4PW&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYD1ZVCPl4_668o-e2HOM67NOj2Ti8leOwms73CIunWCtQ&oe=667C91F5'
          alt='Slide 2'
          className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80'
        />
      </div>
      <div>
        <img
          src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/447855712_122110828136327879_1479968347455933902_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE9LEslRYR5Rk3DrOjmT9BMiKegcLq1m_WIp6BwurWb9dY3ifp3axTXsi3Zo7wKqeutDcIpS1XU1hVTeUsrVBwC&_nc_ohc=Sgg2UyN8_aIQ7kNvgHRNtjD&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYAIDzRMqnlYFY-zMC5_IlkAucwhkn9bLy4i9NmU7erQ2Q&oe=667C7EDD'
          alt='Slide 3'
          className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80'
        />
      </div>
      <div>
        <img
          src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/448812515_122115251762327879_3606431316895751068_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHYjhrFlAWkNKATnL9mfdla2AWibNw1_NrYBaJs3DX822o79nlYUks0dyw3D4UX9xPwOUYnlhWVJL4gOFkTYTY&_nc_ohc=9M2MsXKx-s4Q7kNvgHdb922&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYC2y5OtOKYphO7NV7wyB1JpkoTE0gHSoDT1zuqKpAhSPw&oe=667C9B8A'
          alt='Slide 4'
          className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80'
        />
      </div>
    </Slider>
  );
}
