'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { useEffect, useState } from 'react';
import LoginPage from './(full-page)/auth/login/page';
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
    children: React.ReactNode;
}

const checkAuth = () => {

    if (localStorage.getItem('TOKEN_APLICACAO_FRONTEND') != undefined) {
        return true;
    } else {
        return false;
    }
}

export default function RootLayout({ children }: RootLayoutProps) {

    const [pageLoaded, setPageLoaded] = useState(false);
    const [autenticado, setAutenticado] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if(pathname.startsWith('/pages') || pathname == '/'){
            setAutenticado(checkAuth());
            setPageLoaded(true);
        }else{
            setAutenticado(true);
            setPageLoaded(true);
        }
    }, [pathname]);

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                {autenticado ?
                    <PrimeReactProvider>
                        <LayoutProvider>{children}</LayoutProvider>
                    </PrimeReactProvider>
                    :
                    pageLoaded ?
                        <PrimeReactProvider>
                            <LayoutProvider>
                                <LoginPage />
                            </LayoutProvider>
                        </PrimeReactProvider>
                        :
                        null
                }
            </body>
        </html>
    );
}
