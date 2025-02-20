import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const siteName = "TopJobs"; // You can change this value later if needed

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-6">
            About Us
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>
            Welcome to {siteName} – your trusted source for the latest
            government job openings. We are dedicated to providing daily updates
            on the most recent opportunities in the public sector.
          </p>
          <p>
            At {siteName}, we empower job seekers with accurate and timely
            information. Our platform is designed to notify you instantly about
            new openings, ensuring you never miss a chance to advance your
            career in government.
          </p>
          <p>
            Our team is committed to transparency and reliability. Whether
            you&apos;re looking for your next career move or staying updated
            with industry trends, {siteName} is here to support you every step
            of the way.
          </p>
          <p className="font-semibold text-center">
            Thank you for choosing {siteName}. Stay connected and informed with
            the best updates on government jobs.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
