import { useRouter } from 'next/router';
// useRouter - parameter 추출, 함수형 컴포넌트
// withRouter - 클래스 기반 컴포넌트에 사용하는 고차컴포넌트

export default function PortfolioProjectPage() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query.id)
    return (
        <div>
            <h1>The Home PortfolioProjectPage Page</h1>
        </div>
    )
}