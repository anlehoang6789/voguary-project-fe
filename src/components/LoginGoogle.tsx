import { Button } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from 'slice/authLoginGoogleSlice';
import app from 'utils/firebase';

export default function LoginGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const { uid, displayName, email, photoURL } = result.user;
      console.log('result.user', result.user);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const accessToken = credential?.accessToken || ''; // Use empty string if accessToken is undefined
      // const accessToken = result.user.stsTokenManager.accessToken || '';

      // Retrieve the ID token
      const accessToken = await result.user.getIdToken();

      const user = {
        uid: uid || '',
        name: displayName || '', // Handle potential undefined values
        email: email || '',
        photoURL: photoURL || '',
        accessToken
      };

      // Dispatch login action
      dispatch(loginGoogle(user));

      // Save user to localStorage
      localStorage.setItem('userLoginGoogle', JSON.stringify(user));

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      icon={<FcGoogle style={{ fontSize: '32px' }} />}
      size='large'
      className='rounded-xl w-full mt-4 text-xl flex items-center justify-center font-[Roboto] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      onClick={handleLoginWithGoogle}
    >
      Google
    </Button>
  );
}
