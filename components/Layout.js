import Header from './Header'

export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            .App{
                margin: 20px;
                padding: 20px;
                border: 1px solid #DDD;
            }
            // .hello {
            // font: 15px Helvetica, Arial, sans-serif;
            // background: #eee;
            // padding: 100px;
            // text-align: center;
            // transition: 100ms ease-in background;
            // }
            // .hello:hover {
            // background: #ccc;
            // }
        `}</style>
    </div>
)
