import Link from 'next/link'
export default function Homepage() {
    
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link href="/Portfolio">123</Link>
                </li>
                <li>
                    <Link replace href="/clients">123</Link>
                </li>
                
            </ul>
        </div>
    )
}