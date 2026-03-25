"use client"

import { SectionHeader } from "@/components/section-header"
import { FadeIn } from "@/components/motion"

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 bg-card min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Legal"
          title="Terms and Conditions"
          description={"Last updated: " + new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
        />

        <FadeIn delay={0.2}>
          <div className="mt-12 prose prose-invert max-w-none text-muted-foreground space-y-8 leading-relaxed">
            <section>
              <p>
                Welcome to Ignixtech. These Terms and Conditions (“Terms”) govern your access to and use of our website (“Site”) and the services (“Services”) provided by Ignixtech. By accessing or using our Site or Services, you agree to be bound by these Terms. If you do not agree, please refrain from using our Site or Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Use of the Site</h2>
              <ul className="list-none space-y-6">
                <li>
                  <strong className="text-foreground">Eligibility:</strong><br />
                  <span className="mt-1 inline-block">You must be at least 18 years old to use our Site and Services. By using our Site, you represent and warrant that you meet this age requirement.</span>
                </li>
                <li>
                  <strong className="text-foreground">Permitted Use:</strong><br />
                  <span className="mt-1 inline-block">You may use our Site and Services for lawful purposes only. Unauthorized use, including but not limited to hacking, data mining, or any other illegal activity, is strictly prohibited.</span>
                </li>
                <li>
                  <strong className="text-foreground">Account Security:</strong><br />
                  <span className="mt-1 inline-block">If you create an account on our Site, you are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Intellectual Property</h2>
              <p>
                All content on our Site, including but not limited to text, graphics, logos, images, and software, is the property of Ignixtech or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works from any content on our Site without prior written consent from Ignixtech.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Services</h2>
              <p>
                Ignixtech provides various services, including but not limited to UI/UX design, software development, mobile app development, DevOps, quality assurance, and cybersecurity. The specific terms for each service may be outlined in separate agreements.
              </p>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any of our Services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Disclaimers</h2>
              <p>
                Our Site and Services are provided on an “as-is” and “as-available” basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our Site or Services.
              </p>
              <p className="mt-4">
                Ignixtech disclaims all liability for any damages arising from your use of our Site or Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Ignixtech shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your use of our Site or Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. These links are provided for your convenience only, and we are not responsible for the content or practices of these websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Privacy Policy</h2>
              <p>
                Your use of our Site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be effective immediately upon posting the revised Terms on our Site. Your continued use of our Site or Services after the changes indicates your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Nova Scotia, Canada, without regard to its conflict of laws principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:contact@ignixtech.ca" className="text-primary hover:underline font-medium">contact@ignixtech.ca</a>
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
