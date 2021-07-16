import React, { Fragment } from 'react'; 
import Typography from '@material-ui/core/Typography';  
import SectionHead from '../../components/UI/SectionHead/SectionHead'; 
import Box from '@material-ui/core/Box';

const privacyPolicy = (props) => {

    return (
        <Fragment>
            <Typography color="primary" variant="h4" component="h1" align="center" style={{ marginBottom:'20px' }}>PRIVACY POLICY</Typography> 
            <SectionHead>Introduction</SectionHead>
            <Box style={{ margin: "20px 0" }}>
                <Typography>
                    At www.ind-seva.com we understand the care you assign towards Usage and sharing of your information and we appreciate your unwavering trust That we will do so carefully. This notice describes our privacy policy.
                </Typography>
                <Typography>
                    This privacy policy describes how we collect, use, and disclose information when you Visit or use our website www.ind-seva.com (the “site”), collectively “services”.
                </Typography>
                <Typography>
                    This privacy policy explains what information of yours will be collected by us when you access the services, how the information will be used, and how you can control the collection, correction and/or deletion of information. We will not knowingly use or share your information with anyone except as described in this privacy policy. The use of information collected through our site shall be limited to the purposes under this privacy policy and our terms of use.
                </Typography>
                <Typography>
                    By visiting our site or providing your personal information to one of our sales representatives or signing up or logging in you are accepting and consenting to the practices described in this policy. Please note that this includes consenting to the processing of any personal information you provide, as described below.
                </Typography>
                <Typography>
                    Please review this privacy policy carefully. By using our services, you consent to the use and sharing of your personal information as described in this privacy policy. If you do not agree with these practices, please do not use the services, or otherwise provide us with your personal information.
                </Typography>
            </Box>
            
            <SectionHead>Some key terms in our privacy policy </SectionHead> 
            <ul>
                <li>
                    <Typography>
                        “user(s)” (hereinafter collectively referred to as “you”, “your”, “user”), mean our user(s) who use our services
                    </Typography>
                </li>
                <li>
                    <Typography>
                        “user content” means all electronic data, text, messages or other materials, including personal data of users, submitted to the service(s) by you in connection with your use of the service(s).
                    </Typography>
                </li>
                <li>
                    <Typography>
                        “applicable data protection law” means the information technology act 2008 (it act)
                    </Typography>
                </li>
            </ul> 
            <SectionHead>Scope</SectionHead> 
            <Box style={{ margin: '20px 0' }}>
                <Typography variant="h6">
                    This policy covers the below mentioned:
                </Typography>
                <ul>
                    {
                        [
                            "What personal information about Customers does PassportConsultancy collect?",
                            "Use of Information", 
                            "Cookies and Similar Technologies", 
                            "Sharing of Information", 
                            "Storage and Transfer of Personal Information", 
                            "Security of your information", 
                            "Advertising and links to other sites", 
                            "Privacy of Children",  
                            "Do Not Track",  
                            "Questions/Changes to the policy", 
                        ].map((item,i) => (
                            <li key={i+'policy'}><Typography>{item}</Typography></li>
                        ))
                    } 
                </ul>
            </Box> 
            <SectionHead>What personal information about Customers does PassportConsultancy collect?</SectionHead> 
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    The information we learn (and acquire) from customers can be broadly classified into three categories as mentioned below, such information helps us personalize and continually improve our services and hence your experience.
                </Typography>
                <Typography variant="h6">
                    Information you provide us:
                </Typography>
                <Typography>
                    We receive and store any information you enter on our site or give us in any other way. For example, during filing the forms on our website you provide us with name, Email address, mailing address, phone number, and other several information. You can choose not to provide certain information which is not a mandatory request From us, but then you might not be able to take advantage of many of our features. We use the information that you provide for purposes such as responding to your Requests, to convey across any promotional offers from us or the third parties we work with and communicating with you.
                </Typography>
                <Typography>
                    By providing us with this information, you expressly consent to our use of your personal data in accordance with this privacy policy.
                </Typography>
                <Typography variant="h6">
                    Information we collect automatically:
                </Typography>
                <Typography>
                    We receive and store certain types of information whenever you interact with us. For example, like many sites, we use "Cookies," and we obtain certain types of information when your web browser accesses our site or advertisements served by or on behalf of passportconsultancy on other sites.
                </Typography>
                <Typography>
                    We collect navigational information about what site pages you access or visit, your internet protocol (ip) address, which is automatically assigned to your computer whenever you access the internet and that can sometimes be used to derive your general geographic area which purely relates to providing you services appropriately, information about your mobile device (such as operating system of your mobile device or browser type), the urls of websites that referred you to us, non-precise geographic location, technical information about your device, data about the type of browser and operating system used, which web pages you view, the time and duration or you visits to our site, the search queries you may use on the site, whether you clicked on any advertisements, whether you have clicked on any links in any e-mails sent from us, or third-parties on our behalf and whether you have chosen to opt-out of certain services or information sharing and other metadata concerning with your usage of our services.
                </Typography>
                <Typography variant="h6">
                    Information from other sources:
                </Typography>
                <Typography>
                    Passportconsultancy site may include buttons, tools, or information that link to other third-party services (for example, a google "Comment" button). We may collect information about your use of these features. In addition, when you see or interact with these buttons, tools, or information, or view an passportconsultancy web page, some information from your browser may automatically be sent to the other company. Please read that company’s privacy policy for more information. Please refer to our disclosure policy for information about the third parties we work with.
                </Typography>
            </Box> 
            <SectionHead>Use of Information</SectionHead>
            
            <ul>
                {
                    [
                        "To administer your use of our Services",
                        "To better understand your needs and interests",
                        "To better understand and improvise our products and services",
                        "To facilitate your use and personalize your experience",
                        "To serve you relevant ads",
                        "To respond to your inquiries or fulfilling your requests for information about our Service(s)",
                        "To provide you with information about our Services and sending you information and materials from us including marketing communication",
                        "To help you address problems with the Site, including any technical problems",
                        "To Process online job application, you might have applied for",
                        "To detect and prevent identity theft, fraud, and other potentially illegal acts as well as protecting the integrity of the website",
                        "To respond to subpoenas, court orders, or judicial processes",
                        "To provide information to law enforcement agencies or in connection with an investigation on matters related to public safety",
                        "To resolve disputes and troubleshoot problems",
                        "To help with any investigations or complaints",
                        "To provide you with relevant information or services that you request from us or which we feel may interest you based on previous interactions" 
                    ].map((item, i) => (
                    <Typography key={i+'infor'}><li>{item}</li></Typography>
                    ))
                } 
            </ul>
            
            <SectionHead>Cookies and Similar Technologies</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    We may use cookies, pixel tags, and similar technologies that are meant to automatically collect this information. Cookies are small bits of code that are stored by your computer’s web browser and that may automatically identify your browser to the services whenever your computer is used to visit the services. Pixel tags are very small images or small pieces of data embedded in images, also known as "Web beacons" or "Clear gifs,” that can recognize cookies, the time and date a page is viewed, a description of the page where the pixel tag is placed, and similar information from your computer or device. By using the services, you consent to our use of cookies and similar technologies. You can decide if and how your computer will accept a cookie by configuring your preferences or options in your browser. However, if you choose to reject cookies and similar technologies, you may not be able to use certain online products, services or features on the services in the manner they are meant to be used.
                </Typography>
                <Typography>
                    For more information on the use of cookies and how to disable them please refer to our cookie policy.
                </Typography>
                <Typography>
                    The passportconsultancy services may contain links to other websites or online services that are operated and maintained by third parties and that are not under the direct or indirect control of or maintained by passportconsultancy. Such links do not constitute an endorsement by passportconsultancy of those other websites, the content displayed therein, or the persons or entities associated therewith. This privacy policy does not apply to this kind of third-party content, and therefore we encourage you to carefully read the privacy policies of these third-party websites or services you may be using/viewing on your computer/device.
                </Typography>
            </Box>
            
            <SectionHead>Sharing of Information</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    Passportconsultancy is committed to maintaining your trust, and therefore we want you to understand when and with whom we may share the information we collect.
                </Typography>
                <Typography>
                    Service providers: passportconsultancy may share your information with service providers that perform certain functions or services on behalf of passportconsultancy such as to host the services, provide services, manage databases; perform analyses, provide customer service, or send communications for us.
                </Typography>
                <Typography>
                    Business transfer: if passportconsultancy transfers all or part of its business, or make a sale or transfer of assets, or are otherwise involved in a merger or business transfer, or in the unlikely event of bankruptcy, a business reorganization, or similar event, we may transfer your information as part of such transaction. Administrative or legal process: we may disclose your information to third parties in order to protect the legal rights, safety, and security of our concern, our corporate affiliates, subsidiaries, business partners, and the users of our services; enforce our terms of use; respond to and resolve claims or complaints; prevent fraud or for risk management purposes; and comply with or respond to law enforcement bodies/ agencies or legal process/processes or a request for cooperation by a government or other entity so requiring are legitimate and valid, whether or not legally required.
                </Typography>
                <Typography>
                    Other parties with your express or implied consent: we may share information with third parties when you are consenting to such sharing.
                </Typography>
                <Typography>
                    Aggregate information: we may share aggregate information, such as demographic and usage statistics, with other organizations.
                </Typography>
                <Typography>
                    In addition, we may allow third parties to place and read their own cookies, web beacons, and similar technologies to collect information through the services. For example, like many website operators, we may use google analytics to learn more about how visitors interact with our services. You understand that when you use the services, these analytics providers may collect information related to your use of the services.
                </Typography>
                <Typography>
                    Passportconsultancy provides your personal information to third parties who are obligated to use the personal information that we share with them for the purpose of provision of their services to us in order to help us run our business. These third parties include but are not limited to business partners, suppliers, sub-contractors, advertisers & advertising networks, analytics & search engine providers, payment providers. We may also share with third parties aggregate information or information that does not personally identify you. Should you require more details on third parties we work with or have any questions around it, please refer to our disclosure policy.
                </Typography>
                <Typography>
                    For example, we use razorpay software private limited to manage our payments, but we reserve the right to change this service provider at any time for any reason. Your credit card information will also be subject to our payment processor’s privacy policy in addition to ours. Please read the privacy policy on the website of any payment processor that you are directed to regarding the use, storage and protection of your credit card information before submitting any credit card information. When you make a charge, we shall display a completed charge screen. This is your electronic receipt. You should print or save this electronic receipt for your records. You represent and warrant that you have the legal right to use any credit cards, debit cards or other payment means used to initiate any transaction.
                </Typography>
            </Box>
            
            <SectionHead>Storage and Transfer of Personal Information</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    Your personal data and files are stored in india, on our servers and the servers of companies we hire to provide services to us.
                </Typography>
                <Typography>
                    The information that we collect from you may be transferred to, and stored in, a country outside the india. It may also be processed by staff operating outside india who work for us or for one of our suppliers. By submitting your personal information, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.
                </Typography>
                <Typography>
                    Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee the security of your information transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
                </Typography>
            </Box>
            
            <SectionHead>Security of your information</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    We understand that the security of your personal information is important. Sensitive and private data exchange between the site and its users happens over a ssl secured communication channel and is encrypted and protected with digital signatures. Our site is also in compliance with pci vulnerability standards in order to create as secure of an environment as possible for you. While we provide administrative, technical, and physical security controls to protect your personal information. At the same time, it is important for you to protect against unauthorized access to your password and to your computer. Be sure to sign off when finished using a shared computer. However, despite our efforts, no security controls are 100% effective and we cannot ensure or warrant the security of your personal information. For more information about the security practises we follow please write to us at.
                </Typography>
            </Box>
            
            <SectionHead>Advertising and links to other sites</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    We might display interest-based advertising on both our sites and unaffiliated sites using information you make available to us when you interact with our services. Interest-based ads, also sometimes referred to as personalized or targeted ads, are displayed to you based on information from activities including but not limited to usage of our services and visiting sites that contain our content or ads.
                </Typography>
                <Typography>
                    We use cookies, web beacons and other technologies (collectively, “cookies and similar technologies”). Cookies enable us to learn about what ads you see, what ads you click, and other actions you take on our sites and other sites. This allows us to provide you with more useful and relevant ads. For example, by knowing what ads you are shown we can be careful not to show you the same ones repeatedly.
                </Typography>
                <Typography>
                    Some of the functionality on our services may be provided by third parties that are not affiliated with passportconsultancy. These entities may collect or receive certain information about your use of our services and your activities over time and across different websites, including through the use of cookies, web beacons, and similar technologies. This privacy policy does not apply to, and we are not responsible for, third-party cookies, web beacons, or other tracking technologies.
                </Typography>
                <Typography>
                    Passportconsultancy is not responsible for the privacy practices of these entities. In addition, our services may contain links to other websites not operated or controlled by us. Such websites are not under our control and we are not responsible for their privacy policies or practices. If you provide any personal information through any such third-party website, we recommend that you familiarize yourself with the privacy policies and practices of that third party.
                </Typography>
                <Typography>
                    You may choose to enable or log in to our services via various online services like google, including social networking services like facebook, linkedin etcetera. Our services also may enable you to access social networking services such as facebook, twitter, linkedin, or google (collectively, “social network”) directly or indirectly through our services.
                </Typography>
                <Typography>
                    When you link a social network account to our app or log into our service(s) using your social network account, we may collect relevant information necessary to enable our service(s) to access that social network and your data contained within that social network.
                </Typography>
                <Typography>
                    We may share your information with the operator of that social network to facilitate or enhance delivery of that social network or other service(s) to you. A social network may provide us with access to certain information that you have provided to them, and we will use, store, and disclose such information in accordance with this privacy policy. Additionally, a social network may collect personal information and information about your use of our site or service(s) automatically. The manner in which a social network collects, uses, stores, and discloses your information is governed by the policies of such third parties and  passportconsultancy shall have no liability or responsibility for the privacy practices or other actions of any social network that may be enabled within its service(s).
                </Typography>
            </Box>
            
            <SectionHead>Privacy of Children</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    We recognize the importance of children's safety and privacy. We do not request, or knowingly collect, any personally identifiable information from children under the age of 18. Passportconsultancy is very sensitive to privacy issues regarding children. By visiting this site or providing your personal information to one of our representatives or signing up or logging in you are claiming yourself to be 18 years of age or above.
                </Typography>
                <Typography>
                    If you believe that any child under the age of 18 has posted any personal information anywhere on our website, please contact us immediately at support@ind-seva.com and provide as much information as you can to help us locate and delete the personal information.
                </Typography>
                <Typography>
                    If a parent or guardian becomes aware that his or her child or any other child under the age of 18 has provided us with personal information, he or she should write to us at support@ind-seva.com
                </Typography> 
            </Box>
            
            <SectionHead>Questions/Changes to the policy</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    Passportconsultancy welcomes your comments regarding this privacy policy. If you believe that we have not adhered to this policy or if you have questions or concerns with respect to our privacy policy, please write to us at support@ind-seva.com if you believe there exists any lacuna/loop in this policy, you may write to us with proper proof of required amendments you suggest, and after speculations and considerations, we may or may not introduce such changes.
                </Typography>
            </Box> 
        </Fragment>
    );
}

export default privacyPolicy;