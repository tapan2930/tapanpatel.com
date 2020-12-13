import { NextPage } from 'next';
import Header from "@components/Header/Header"

const IndexPage: NextPage = () => {
  return (
    <main className="bg-primary text-white font-body">
      <Header />
    </main>
  )
}
export default IndexPage;
