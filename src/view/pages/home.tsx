import React, {useEffect} from 'react';
import { Breadcrumb, Layout, Menu, Divider } from 'antd';
import Tops from '../components/tops/tops';

const { Header, Content, Footer } = Layout;


const Home = () => {
    const menu = ["Nasional", "Internasional", "Hukum", "Sosial Budaya", "Keamanan", "Kesehatan", 
    "Olahraga", "PPA", "Video", "Ini Faktanya"];

    return (
        <Layout>
            <Tops />
            {/* <Header style={{backgroundColor: '#FFFFFF'}}>
            </Header> */}
            <Header style={{backgroundColor: '#BE0106'}}>
                <Menu 
                    style={{backgroundColor: '#BE0106', color: 'white'}}
                    mode='horizontal'
                    items={menu.map((value:string, index:number) => ({
                        key: index,
                        label: value,
                    }))}
                />
            </Header>
        </Layout>
    );
}

export default Home;