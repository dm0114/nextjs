import Link from 'next/link'
import router from 'next/router'
export default function ClientsPage() {
    const clients = [
        {id: 'max', name: 'hihi', href: '1'},
        {id: 'momo', name: 'mimi', href: '2'}
    ]
    function loadProjectHandler() {
        //router.replace('clients/max/projectA') // 뒤로가기 막기
        //router.push('/clients/max/projectA')

        // 쿼리 방식으로 이동하기
        router.push({
            pathname: "/clients/[id]",
            query: {id: 'max', clientsproject: 'projecta'},
        })
    }

    return (
        <div>
            <h1>THe Client Page</h1>
            <ul>
                {clients.map((client) => {
                    return(
                        <li key={client.id}>
                            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                            <Link href={{
                                pathname: "/clients/[id]",
                                query: {id: client.id},
                            }}>{client.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}