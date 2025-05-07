import type { Metadata } from "next"
import { Shield, Database, FileText, Lock, Clock, ExternalLink, Users, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | The Cloud Company",
  description: "Privacy Policy for The Cloud Company's services and website",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground">The Cloud Company</p>
      </div>

      <p className="mb-10 text-muted-foreground">
        <strong>The Cloud Company</strong> built its services to provide custom web applications for data analytics
        teams in large enterprises. This Privacy Policy outlines how we collect, use, disclose, and protect personal
        information when you use our services. By accessing or using our services, you agree to the collection and use
        of information in accordance with this Privacy Policy.
      </p>

      <div className="space-y-12">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                To provide and improve our services, we may collect the following types of information:
              </p>

              <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
              <p className="text-muted-foreground mb-2">
                We may collect personally identifiable information, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact details</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Any other information you provide to us</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">1.2 Log Data</h3>
              <p className="text-muted-foreground mb-2">
                When you use our services, we may automatically collect information such as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-1">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type and version</li>
                <li>Pages visited</li>
                <li>Date and time of access</li>
                <li>Error reports and diagnostic data</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground">
                We may use cookies and similar tracking technologies to enhance your experience, analyze trends, and
                improve our services. You can manage cookie preferences through your browser settings.
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
              <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>To provide, operate, and improve our services</li>
                <li>To personalize user experience</li>
                <li>To communicate with you regarding updates, security alerts, and customer support</li>
                <li>To analyze service usage and enhance security measures</li>
                <li>To comply with legal and regulatory requirements</li>
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
              <h2 className="text-2xl font-bold mb-3">3. Sharing of Information</h2>
              <p className="text-muted-foreground mb-3">
                We do not sell or rent personal information to third parties. However, we may share information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Service providers</strong> who assist in business operations (e.g., hosting, analytics,
                  customer support)
                </li>
                <li>
                  <strong>Legal authorities</strong> if required by law or to protect our rights
                </li>
                <li>
                  <strong>Business partners</strong> for joint ventures, acquisitions, or mergers (subject to
                  confidentiality agreements)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground">
                We take reasonable technical and organizational measures to protect your information against
                unauthorized access, alteration, disclosure, or destruction. However, no internet-based service is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain personal information as long as necessary to fulfill the purposes outlined in this policy,
                comply with legal obligations, or resolve disputes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <ExternalLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">6. Third-Party Services</h2>
              <p className="text-muted-foreground mb-3">Our services may include third-party integrations, such as:</p>
              <ul className="list-disc pl-6 mb-3 text-muted-foreground space-y-1">
                <li>Google Analytics</li>
                <li>Cloud hosting providers</li>
                <li>Payment gateways (if applicable)</li>
              </ul>
              <p className="text-muted-foreground">
                These third parties may collect data in accordance with their own privacy policies.
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
              <h2 className="text-2xl font-bold mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal
                information from children. If we discover such data, we will delete it immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-full">
              <UserCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">8. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-2">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-3 text-muted-foreground space-y-1">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict or object to data processing</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, contact us at <strong>privacy@thecloudcompany.com</strong>.
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
              <h2 className="text-2xl font-bold mb-3">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-3">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
                effective date. Continued use of our services after modifications constitutes acceptance of the revised
                policy.
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
          <strong>privacy@thecloudcompany.com</strong>.
        </p>
      </div>
    </div>
  )
}

