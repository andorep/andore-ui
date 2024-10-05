import Link from 'next/link'
import "@/app/globals.css";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h2>Not Found</h2>
            <p>¯\_(ಠ_ಠ)_/</p>
            <Link href="/docs">Return Home</Link>
        </div>
    )
}
