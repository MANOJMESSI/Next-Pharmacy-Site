import Image from "next/image";

export default function Header() {
    return (
        <header className="header">
            <Image src="/images/logo.png" alt="Elbrit Life Sciences" width={150} height={50} className="logo" />
        </header>
    );
}
