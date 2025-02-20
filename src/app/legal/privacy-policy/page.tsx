import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const siteName = "TopJobs";

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-6">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>
            At {siteName}, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you use our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and professional details when you create an account or
            subscribe to our job alerts.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use your information to provide and improve our services, send
            you relevant job notifications, and communicate important updates
            about our platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure, or
            misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. You may also opt-out of receiving communications from
            us at any time.
          </p>

          <p className="mt-8">
            For more detailed information about our privacy practices, please
            contact us at privacy@
            {siteName.toLowerCase()}.com.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
