import { Helmet } from 'react-helmet-async';

interface LegalProps {
  page: 'privacy' | 'terms' | 'cookies';
}

export default function Legal({ page }: LegalProps) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'September 2026',
      text: [
        'At Story Coffee House, we value your privacy. This policy outlines how we collect, use, and protect your personal information when you visit our website, use our reservation systems, or participate in our community events.',
        'Information We Collect: We may collect information such as your name, email address, phone number, and location when you voluntarily submit it through our contact forms, community story submissions, or event RSVPs.',
        'How We Use Your Information: The information collected is used solely to provide and improve our services, confirm reservations, communicate regarding events, and feature approved community stories on our platforms.',
        'Data Security: We implement appropriate security measures to protect your personal information. We do not sell or rent your personal information to third parties.',
        'Contact Us: If you have any questions about this Privacy Policy, please contact us at hello@storycoffeehouse.in.'
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'September 2026',
      text: [
        'Welcome to Story Coffee House. By accessing or using our website, you agree to be bound by these Terms of Service.',
        'Use of the Site: You agree to use the site for lawful purposes only. You must not use our site in any way that causes, or may cause, damage to the site or impairment of the availability or accessibility of the site.',
        'Intellectual Property: All content on this website, including text, graphics, logos, and images, is the property of Jacktree Digital Pvt. Ltd. and is protected by copyright laws.',
        'Reservations & Orders: Any reservations or orders placed through third-party platforms linked on this site are subject to the terms and conditions of those respective platforms.',
        'Modifications: We reserve the right to revise these terms at any time. By using this website, you agree to be bound by the current version of these Terms of Service.'
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: 'September 2026',
      text: [
        'This Cookie Policy explains how Story Coffee House uses cookies and similar technologies to recognize you when you visit our website.',
        'What are Cookies: Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.',
        'How We Use Cookies: We use essential cookies to make our website work. We also use analytics cookies to help us understand how visitors interact with our website, which helps us improve the user experience.',
        'Managing Cookies: You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.'
      ]
    }
  };

  const current = content[page];

  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <Helmet>
        <title>{current.title} | Story Coffee House</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-4">{current.title}</h1>
        <p className="text-sm uppercase tracking-widest text-deep-brown/60 mb-12">Last Updated: {current.lastUpdated}</p>
        
        <div className="prose prose-lg text-deep-brown/80">
          {current.text.map((paragraph, index) => {
            const [bold, ...rest] = paragraph.split(':');
            return (
              <p key={index} className="mb-6 leading-relaxed">
                {rest.length > 0 ? (
                  <>
                    <strong className="text-espresso">{bold}:</strong>
                    {rest.join(':')}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
