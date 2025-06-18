import Image from "next/image";
import { IoHome, IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";

const FloatHeader = () => {
  return (
      <nav>
        <Image src={'/Images/logo.png'} alt={"Float Logo"} width={34} height={34} />
        <div>
          <IoHome />
          <IoSearch />
          <LuLibrary />
        </div>
        <Image src={'/Images/ExampleProfile.jpeg'} alt={"ExampleProfileImage"} width={44} height={44} />
      </nav>
  )
}

export default FloatHeader;
