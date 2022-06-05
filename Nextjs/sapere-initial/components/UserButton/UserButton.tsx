import Image from "next/image";
import { useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle, FaAccessibleIcon, FaRegChartBar } from "react-icons/fa";
import useOnClickOutside from '../../utils/useOnClickOutside';

import styles from "./userButton.module.css";

interface UserButtonProps {
  image: string;
  username: string;
}

const UserButton = ({ image, username }: UserButtonProps) => {
  const [showUserOptions, setShowUserOptions] = useState<Boolean>(false);
  const optRef = useRef() as React.MutableRefObject<HTMLInputElement>;;

  useOnClickOutside(optRef, () => setShowUserOptions(false));

  return (
    <div className="p-relative d-flex align-items-center" ref={optRef}>
      <Image className={styles.userIcon} src={image} width={40} height={40} onClick={() => setShowUserOptions(!showUserOptions)}/>
      {showUserOptions && (
      <div className={styles.userOptions}>
        <ul>
          <li className="text-muted mb-1">@{username}</li>
          <li> <span><FaUserCircle/></span> Perfil</li>
          <li> <span><FaAccessibleIcon/></span> Acessibilidade</li>
          <li> <span><FaRegChartBar/></span> Painéis de controle</li>
          <li> <span><BiLogOut/></span> Sair</li>
        </ul>
      </div>
      )}
    </div>
  );
};

export default UserButton;
