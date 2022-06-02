import Image from 'next/image';
import styles from './userButton.module.css';

interface UserButtonProps {
  image: string;
}

const UserButton = ({image}:UserButtonProps) => {
  return (
    <>
      <Image className={styles.userIcon} src={image} width={40} height={40}/>
    </>
  );
}

export default UserButton;