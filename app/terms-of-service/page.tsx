import type { Metadata } from "next"
import { Shield, Book, Users, Briefcase, Scale, CreditCard, AlertTriangle, FileText, Power, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | The Cloud Company",
  description: "Terms of Service for The Cloud Company's services and website",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground">The Cloud Company</p>
      </div>

      <div className="space-y-12">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Book className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the services provided by <strong>The Cloud Company</strong>, you agree to be bound
                by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you
                must not use our services.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">2. Services Provided</h2>
              <p className="text-muted-foreground">
                The Cloud Company offers custom web application development, data analytics solutions, and related
                services for enterprises. We reserve the right to modify, suspend, or discontinue any aspect of our
                services at any time without prior notice.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-3">By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information when required.</li>
                <li>Use our services in compliance with all applicable laws and regulations.</li>
                <li>Not engage in any unlawful, abusive, or unauthorized use of our services.</li>
                <li>Not attempt to disrupt, damage, or gain unauthorized access to our systems.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, trademarks, logos, and software provided by The Cloud Company are our exclusive property or
                that of our licensors. You may not copy, modify, distribute, or use our intellectual property without
                our express written consent.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">5. Third-Party Services</h2>
              <p className="text-muted-foreground">
                Our services may integrate with third-party providers such as cloud hosting, analytics, or payment
                services. We are not responsible for the availability, security, or content of these third-party
                services, and your use of them is subject to their respective terms and conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">6. Fees and Payments</h2>
              <p className="text-muted-foreground">
                If applicable, pricing and payment terms for our services will be outlined in a separate agreement.
                Failure to make payments may result in suspension or termination of services.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, The Cloud Company shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from your use of or inability to use our
                services.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">8. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless The Cloud Company, its affiliates, and employees from any
                claims, liabilities, damages, or expenses arising from your use of our services or violation of these
                terms.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Power className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">9. Termination</h2>
              <p className="text-muted-foreground">
                We may suspend or terminate your access to our services at any time for violations of these terms or for
                any other reason at our discretion. Upon termination, all rights and obligations under these terms shall
                cease except for those that should survive termination.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with the laws of the United
                States. Any disputes shall be resolved in the appropriate courts of the United States.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">11. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms of Service periodically. Any changes will be posted on this page with an
                updated effective date. Continued use of our services after modifications constitutes acceptance of the
                revised terms.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-muted-foreground">
          <strong>Effective Date:</strong> March 5, 2025
        </p>
        <p className="text-muted-foreground mt-2">
          <strong>Contact Us:</strong> If you have any questions, please contact us at{" "}
          <strong>legal@thecloudcompany.com</strong>.
        </p>
      </div>
    </div>
  )
}

