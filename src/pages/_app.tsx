import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../app/layout';
import Nav from '../app/components/nav';
import Footer from '../app/components/footer';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    const router = useRouter();
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setFade(true);
        };

        const handleRouteChangeComplete = () => {
            setFade(false);
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router]);

    return (
            <Layout>
                <Nav />
                <div className={fade ? 'fade-out' : 'fade-in'}>
                    <Component {...pageProps} />
                </div>
                <Footer />
            </Layout>
    );
}
