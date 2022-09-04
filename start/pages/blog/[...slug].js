import {useRouter} from 'next/router'
export default function BlogPost() {
    const router = useRouter()
    console.log(router.query);
    return (
        <h1>
            <div>HIHI</div>
        </h1>
    )
}