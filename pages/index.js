import Image from "next/image"

export default function Home() {
    return (
        <div className="bg-tertiary text-secondary min-h-screen px-12 rounded-lg my-10">
            <div className="pt-20">
                <Image className="m-auto mb-10"
                    src="/logo-criapp.png"
                    alt="Logo Criap"
                    width={101}
                    height={32}
                />
            </div>
            <h1 className="text-5xl font-sans ...">Crie seus apps Delivery simples <br></br>e rápido</h1>
        </div>
    )
}