import styles from "@/styles/Headers/FloatHeader.module.scss";
import Image from "next/image";
import { IoHome, IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";

const FloatHeader = () => {
  return (
      <nav className={styles.floatHeader}>
        <Image src={'/Images/logo.png'} alt={"Float Logo"} width={38} height={38} />
        <div className={styles.floatButtonFlexBox}>
          <IoHome size={26} color={'#e0dede'} />
          <IoSearch size={26} color={'#e0dede'} />
          <LuLibrary size={26} color={'#e0dede'} />
        </div>
        <Image src={'/Images/ExampleProfile.jpeg'}
               alt={"ExampleProfileImage"}
               width={44}
               height={44}
               className={styles.profileImage}
        />
      </nav>
  )
}

export default FloatHeader;
