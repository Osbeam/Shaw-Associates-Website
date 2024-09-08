import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Services = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="bg-services d-flex flex-column justify-content-left align-items-left text-left">
                    <div className="service-head-text">
                        <p>Our Experties</p>
                    </div>
                    <div className="service-head-content">
                        <p>Comprehensive tax and financial services,
                            guiding your business to compliance and success.</p>
                    </div>
                </div>
                <div className="service-data-container">
                    <div className="data">
                        <h1>Personal Tax Services</h1>
                        <p>Navigating personal taxes can be overwhelming, but with Shaw Associates, you’re never alone. Our Personal Tax Services are designed to simplify the process, ensuring that you meet all legal requirements while optimizing your tax savings. Whether you're a salaried individual, a self-employed professional, or a high-net-worth individual, we offer comprehensive solutions tailored to your unique financial situation.</p>
                        <p>Tax Planning & Optimization: Personalized tax strategies to minimize your tax liabilities and maximize your savings, helping you keep more of what you earn.</p>
                        <p>Tax Compliance & Reporting: Assistance with all aspects of tax compliance, including reporting income, deductions, and exemptions, to ensure full legal adherence.</p>
                        <p>Investment & Wealth Advisory: Strategic advice on tax-efficient investment opportunities and wealth management, aligning your financial goals with tax optimization.</p>
                    </div>
                    <div className="data">
                        <h1>Corporate Tax Services</h1>
                        <p>Our corporate taxation services are designed to help businesses manage their tax responsibilities effectively. We offer:</p>
                        <p>Corporate Tax Filing: Comprehensive support for filing corporate income tax returns.</p>
                        <p>Tax Structuring & Strategy: Tailored tax structuring solutions to optimize your corporate tax position.</p>
                        <p>Corporate Tax Advisory: Strategic advice on mergers, acquisitions, and other business decisions to ensure tax efficiency.</p>
                    </div>
                    <div className="data">
                        <h1>ITR Filing and Advisory</h1>
                        <p>Shaw Associates simplifies the ITR filing process,
                            ensuring you meet all deadlines and maximize your deductions. Our expert team handles everything
                            from choosing the right ITR form to accurately filing your return, giving you peace of mind. Our services include:</p>
                        <ul className="ul-services">
                            <li>Accurate ITR Filing: Selection of the appropriate ITR form and precise filing to avoid errors.</li>
                            <li>Maximized Deductions: Identifying all eligible deductions to reduce your tax liability.</li>
                            <li>Timely Submission: Ensuring your ITR is filed on time, avoiding penalties and interest charges.</li>
                        </ul>
                    </div>
                    <div className="data">
                        <h1>GST Registration & Filingy</h1>
                        <p>Shaw Associates offers comprehensive GST registration and filing
                             services to ensure your business stays compliant and efficient. 
                             We manage everything from the initial registration process, including 
                            documentation and obtaining your GSTIN, to the ongoing filing 
                            of monthly and quarterly returns. Our services include:</p>
                        <ul className="ul-services">
                            <li>Seamless GST Registration: Eligibility checks, document preparation, and GSTIN issuance.</li>
                            <li>Timely Return Filing: Monthly/quarterly filings, Input Tax Credit reconciliation, and error rectification.</li>
                            <li>Compliance Support: Reminders and updates to keep you on track with your tax obligations.</li>
                        </ul>
                    </div>
                    <div className="data">
                        <h1>GST Advisory</h1>
                        <p>Navigate the complexities of GST with confidence using Shaw Associates’ expert advisory services. We provide actionable insights and strategic planning to optimize your tax liabilities and ensure full compliance. Our advisory services include:</p>
                        <ul className="ul-services">
                            <li>GST Impact Analysis: Assessing how GST affects your business.</li>
                            <li>Compliance Reviews: Identifying and improving your GST practices.</li>
                            <li>Strategic Tax Planning: Optimizing transactions and tax positions to minimize liabilities.</li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Services;