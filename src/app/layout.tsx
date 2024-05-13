import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="./favicon.ico" />
        <meta httpEquiv="Cache-control" content="public, max-age=31536000" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="CODIGORX7" />
        <meta
          name="keywords"
          content="desenvolvimento web, soluções web personalizadas, comércio eletrônico, páginas de aterrissagem, cibersegurança, consultoria de segurança, avaliação de riscos, análise de vulnerabilidades, estratégia de e-mail, treinamento de segurança, gerenciamento de senhas, proteção de dados, resposta a incidentes, atualizações de segurança"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="alternate" hrefLang="en" href="https://codigorx7.vercel.app" />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://codigorx7.vercel.app"
        />
        <link
          rel="alternate"
          hrefLang="pt-br"
          href="https://codigorx7.vercel.app"
        />
        <link rel="canonical" href="https://codigorx7.vercel.app" />
        <title>
          Desenvolvimento Web e Soluções Empresariais | Consultoria de
          Cibersegurança
        </title>
        <meta
          name="description"
          content="Oferecemos serviços completos de desenvolvimento web, incluindo soluções personalizadas, comércio eletrônico e páginas de aterrissagem. Além disso, fornecemos consultoria de cibersegurança focada em avaliação de riscos, análise de vulnerabilidades, estratégia de e-mail, treinamento de segurança, gerenciamento de senhas, proteção de dados, resposta a incidentes e atualizações de segurança."
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Desenvolvimento Web e Soluções Empresariais | Consultoria de Cibersegurança"
        />
        <meta
          property="og:description"
          content="Oferecemos serviços completos de desenvolvimento web, incluindo soluções personalizadas, comércio eletrônico e páginas de aterrissagem. Além disso, fornecemos consultoria de cibersegurança focada em avaliação de riscos, análise de vulnerabilidades, estratégia de e-mail, treinamento de segurança, gerenciamento de senhas, proteção de dados, resposta a incidentes e atualizações de segurança."
        />
        <meta property="og:url" content="https://codigorx7.vercel.app" />
        <meta property="og:site_name" content="Desenvolvimento Web e Soluções Empresariais | Consultoria de Cibersegurança" />
        <meta property="og:image" content="./favicon.ico" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Desenvolvimento Web e Soluções Empresariais | Consultoria de Cibersegurança"
        />
        <meta
          name="twitter:description"
          content="Oferecemos serviços completos de desenvolvimento web, incluindo soluções personalizadas, comércio eletrônico e páginas de aterrissagem. Além disso, fornecemos consultoria de cibersegurança focada em avaliação de riscos, análise de vulnerabilidades, estratégia de e-mail, treinamento de segurança, gerenciamento de senhas, proteção de dados, resposta a incidentes e atualizações de segurança."
        />
        <meta name="twitter:image" content="./favicon.ico" />
        <meta name="twitter:creator" content="@CODIGORX7" />
      </Head>
      <main>{children}</main>
    </>
  );
}