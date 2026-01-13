import Image from "next/image"
import Link from "next/link"

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className="items-center hidden lg:flex">
            <Image  src="/logo-dark.svg" alt="Logo" height={26} width={26}/>
            <p className="font-semibold text-black text-xl ml-2.5">
                PennyWise
            </p> 
        </div>
    </Link>
  )
}

export default HeaderLogo