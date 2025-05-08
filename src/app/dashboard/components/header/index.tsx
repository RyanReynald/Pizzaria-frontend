"use client"

import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import logoImg from '/public/La nave.svg'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function Header() {
    const router = useRouter();

    async function handleLogout() {
        deleteCookie("session", { path: "/" })
        toast.success("Logout feito com sucesso!")
        router.replace("/")
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image
                        alt="Logo Sujeito Pizza"
                        src={logoImg}
                        width={150}
                        height={150}
                        priority={true}
                        quality={100}
                        style={{ marginTop: '40px' }}
                    />
                </Link>

                <nav>
                    <Link href={"/dashboard/category"}>
                        Categoria
                    </Link>
                    <Link href={"/dashboard/product"}>
                        Produto
                    </Link>

                    <form action={handleLogout}>
                        <button type='submit'>
                            <LogOutIcon size={24} color="#fff" />
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}