import Layout from '../components/layout'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <>
    <Layout>
        <h1>XKCD</h1>
        <h2>{props.comic.title}</h2>
        <img src={props.comic.img} alt={props.comic.alt} />
        <Footer comicNum={props.comic.num}/>
    </Layout>
    </>
  )
}

export async function getServerSideProps(context){
    const response = await fetch('http://xkcd.com/info.0.json');

    const data = await response.json();


    return{
        props: { //passed to page component as props
            comic: data //json from the fetched url
        }, 
    }
}