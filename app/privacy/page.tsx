"use client"

import { SectionHeader } from "@/components/section-header"
import { FadeIn } from "@/components/motion"

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-card min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Legal"
          title="Privacy Policy"
          description={"Last updated: " + new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
        />

        <FadeIn delay={0.2}>
          <div className="mt-12 prose prose-invert max-w-none text-muted-foreground space-y-8 leading-relaxed">
            <section>
              <p>
                This Privacy Policy outlines how Ignixtech ("we," "us," or "our") collects, uses, discloses, and protects your information when you visit our website, interact with our services, or otherwise engage with us. We are committed to protecting your privacy and complying with applicable data protection laws to ensure your personal data is processed fairly, lawfully, and securely.
              </p>
              <p className="mt-4">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please discontinue using our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p>We collect information to provide better services to our users. The data we collect includes:</p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Personal Information Provided by You:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and postal address.</li>
                <li><strong className="text-foreground">Account Information:</strong> Username, password, and other credentials.</li>
                <li><strong className="text-foreground">Payment Details:</strong> Billing address, credit/debit card information, and transaction history.</li>
                <li><strong className="text-foreground">Feedback and Queries:</strong> Information shared during customer support interactions or surveys.</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Automatically Collected Information:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Device Information:</strong> IP address, browser type, operating system, and device details.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Pages viewed, time spent on the site, navigation paths, and referring/exit pages.</li>
                <li><strong className="text-foreground">Cookies and Tracking Technologies:</strong> Information collected through cookies and similar tools for analytics and personalization.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">How We Use Your Information</h2>
              <p>We process your data for the following purposes based on our legitimate interests, contractual obligations, legal requirements, or your consent:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-foreground">Service Delivery:</strong> To provide and manage our services, including account setup, order processing, and customer support.</li>
                <li><strong className="text-foreground">Personalization:</strong> To tailor content and features to your preferences.</li>
                <li><strong className="text-foreground">Marketing and Communication:</strong> To send promotional updates, newsletters, and other relevant communications (with your consent where required).</li>
                <li><strong className="text-foreground">Improvement and Analytics:</strong> To analyze usage trends and improve our website, products, and services.</li>
                <li><strong className="text-foreground">Security and Fraud Prevention:</strong> To protect against unauthorized access, fraud, and malicious activities.</li>
                <li><strong className="text-foreground">Legal Compliance:</strong> To meet legal obligations, resolve disputes, and enforce agreements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Cookies and Similar Technologies</h2>
              <p>We use cookies and related technologies to enhance your browsing experience and improve our website. These include:</p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Types of Cookies:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Essential Cookies:</strong> Necessary for website functionality.</li>
                <li><strong className="text-foreground">Performance Cookies:</strong> For analytics and improving site performance.</li>
                <li><strong className="text-foreground">Functional Cookies:</strong> To remember user preferences and settings.</li>
                <li><strong className="text-foreground">Marketing Cookies:</strong> For targeted advertising and promotional activities.</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Managing Cookies:</h3>
              <p>You can manage your cookie preferences through your browser settings. Note that disabling cookies may impact website functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Disclosure of Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-foreground">Service Providers:</strong> With third-party vendors who assist in delivering our services (e.g., payment processors, IT support, marketing agencies).</li>
                <li><strong className="text-foreground">Business Partners:</strong> To offer collaborative products, services, or promotions.</li>
                <li><strong className="text-foreground">Legal Obligations:</strong> To comply with legal requirements, court orders, or government requests.</li>
                <li><strong className="text-foreground">Protection of Rights:</strong> To enforce agreements or protect the rights, property, or safety of our users or others.</li>
                <li><strong className="text-foreground">Aggregated Data:</strong> Non-identifiable data shared for research, analysis, or business purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Data Storage and Security</h2>
              <p>We implement technical, administrative, and physical safeguards to protect your personal data against unauthorized access, loss, or misuse. Key measures include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-foreground">Encryption:</strong> Secure transmission of sensitive data using SSL technology.</li>
                <li><strong className="text-foreground">Access Controls:</strong> Restricted access to personal data based on roles and responsibilities.</li>
                <li><strong className="text-foreground">Monitoring:</strong> Regular audits and security assessments to identify vulnerabilities.</li>
              </ul>
              <p className="mt-4">While we strive to protect your information, no online transmission is entirely secure. You share your data at your own risk.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">International Data Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries outside your residence. When transferring data internationally, we ensure compliance with applicable data protection laws through recognized safeguards, such as Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Data Retention</h2>
              <p>We retain your personal data only as long as necessary for the purposes outlined in this Privacy Policy or as required by law. Generally, we keep:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-foreground">Account-related data:</strong> Until account deletion.</li>
                <li><strong className="text-foreground">Transactional data:</strong> For at least 24 months.</li>
                <li><strong className="text-foreground">Marketing data:</strong> Until you opt out or withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the following rights under applicable data protection laws:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-foreground">Access:</strong> Request access to your personal data.</li>
                <li><strong className="text-foreground">Correction:</strong> Correct inaccuracies in your data.</li>
                <li><strong className="text-foreground">Erasure:</strong> Request deletion of your data where applicable.</li>
                <li><strong className="text-foreground">Restriction:</strong> Limit processing under certain circumstances.</li>
                <li><strong className="text-foreground">Objection:</strong> Object to processing for direct marketing or other legitimate interests.</li>
                <li><strong className="text-foreground">Data Portability:</strong> Receive your data in a structured format.</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Revoke consent where processing is based on consent.</li>
              </ul>
              <p className="mt-6">
                To exercise your rights, contact us at <a href="mailto:contact@ignixtech.ca" className="text-primary hover:underline font-medium">contact@ignixtech.ca</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be effective upon posting on our website, with the "Last Updated" date revised accordingly. We encourage you to review this page regularly to stay informed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: <a href="mailto:contact@ignixtech.ca" className="text-primary hover:underline font-medium">contact@ignixtech.ca</a>
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
