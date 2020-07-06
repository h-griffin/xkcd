import Link from 'next/Link'

export default() => (
    <nav>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/About'>
            <a>About</a>
        </Link>
        <style jsx>{`
            a{
                margin-right: 15px;
                color: green;
            }
        `}</style>
    </nav>
)