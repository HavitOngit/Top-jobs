import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfUse() {
  const siteName = "TopJobs";

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-6">
            Terms of Use
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>
            Welcome to {siteName}. By accessing and using our website, you agree
            to comply with and be bound by the following terms and conditions of
            use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Use of the Service
          </h2>
          <p>
            {siteName} provides a platform for accessing government job
            listings. You agree to use our service only for lawful purposes and
            in accordance with these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Intellectual Property
          </h2>
          <p>
            The content on {siteName}, including text, graphics, logos, and
            software, is the property of {siteName} and protected by copyright
            and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            {siteName} shall not be liable for any indirect, incidental,
            special, consequential or punitive damages resulting from your use
            of or inability to use the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your
            continued use of the service after changes constitutes acceptance of
            the modified terms.
          </p>

          <p className="mt-8">
            If you have any questions about these Terms of Use, please contact
            us at legal@{siteName.toLowerCase()}.com.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
