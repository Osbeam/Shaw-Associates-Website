import React from "react";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import blog1 from '../Images/BLog1.png'
import Footer from "./Footer";
// import 'antd/dist/reset.css';
import Slider from './BlogSlider'

const Blog = () => {
    return (
        <>
            <div className="container-fluid">
            <Navbar />

                <div className="bg-blog d-flex flex-column justify-content-left align-items-left text-left">
                    <div className="hero-blog-box">
                        <div className="welcome-container-blog">
                            <div className="blog-hero-img">
                                <img src={blog1} alt="blog-hero-ing" />
                            </div>
                        </div>
                        <div className="blog-hero-content">
                            <h2>Top 5 Tax-Saving Strategies for the Upcoming Fiscal Year</h2>
                            <p>As the fiscal year approaches, it's the
                                perfect time to start thinking about how
                                to minimize your tax liabilities. Effective
                                tax planning can lead to significant savings,
                                allowing you to keep more of your hard-earned
                                money. In this post,
                                we’ll explore five practical strategies
                                that can help you save on taxes in the upcoming fiscal year.</p>
                        </div>
                    </div>
                    <div className="blog-content-section">
                        <div className="blog-container">
                            <ol style={{ listStyle: 'number' }}>
                                <li style={{ marginBottom: '25px' }}>
                                    Maximize Your Section 80C Deductions Section 80C of the Income
                                    Tax Act allows you to claim deductions up to ₹1.5 lakhs on various
                                    investments and expenses. Some popular options include:
                                    <ul>
                                        <li>Public Provident Fund (PPF): A safe and tax-efficient investment option with an attractive interest rate.</li>
                                        <li>National Savings Certificate (NSC): Another secure investment that offers fixed returns and tax benefits</li>
                                        <li>Equity-Linked Savings Scheme (ELSS): A mutual fund that provides both capital appreciation and tax deductions.</li>
                                    </ul>
                                </li>
                                <li style={{ marginBottom: '25px' }}> Invest in Tax-Saving Fixed Deposits
                                    <p>Banks offer tax-saving fixed deposits with a lock-in period of five years, eligible for deductions under Section 80C. While the returns are lower than equity-based instruments, they offer guaranteed returns and are a safer option for risk-averse investors.</p>
                                </li>
                                <li style={{ marginBottom: '25px' }}> Consider National Pension System (NPS) Contributions
                                    Contribution to the National Pension System are eligible for tax deductions under Section 80CCD(1B), over and above the ₹1.5 lakh limit under Section 80C. You can claim an additional deduction of ₹50,000, making it a great option for those looking to secure their retirement while saving on taxes.
                                </li>
                                <li style={{ marginBottom: '25px' }}> Claim Deductions on Home Loan Interest
                                    <p> If you have a home loan, you can claim deductions on the interest paid under Section 24(b) of the Income Tax Act. The maximum deduction allowed is ₹2 lakhs per annum for a self-occupied property. Additionally, you can claim a deduction of up to ₹1.5 lakhs under Section 80EEA if you’re a first-time homebuyer.</p>
                                </li>
                                <li style={{ marginBottom: '25px' }}> Take Advantage of Health Insurance Premium Deductions
                                    <p>Under Section 80D, you can claim deductions on the premiums paid for health insurance policies for yourself, your spouse, children, and parents. The maximum deduction allowed is ₹25,000, which can be increased to ₹50,000 if you’re paying for a senior citizen's policy.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="blog-conclusion">
                        <h1>Conclusion:</h1>
                        <p>By implementing these tax-saving strategies, you can significantly reduce your taxable income and make the most of the deductions available. However, it's essential to plan and invest early in the fiscal year to maximize your benefits. At Shaw Associates, we specialize in personalized tax planning services that align with your financial goals. Contact us today to learn how we can help you achieve optimal tax savings.</p>
                    </div>
                    <div>
                        <div className="other-blog-text">
                            <h1>Other Blogs To Read...</h1>
                        </div>
                    </div>
                </div>
                <Slider/>
                <Footer />
            </div>
        </>
    )
}

export default Blog;