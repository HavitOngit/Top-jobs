import { Hexagon, Github, Twitter } from "lucide-react";
import { Footer } from "@/components/ui/footer";

function FooterWraper() {
  return (
    <div className="w-full">
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="TopJobs"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/about", label: "About" },
          { href: "/blogs", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy-policy", label: "Privacy" },
          { href: "/terms-of-use", label: "Terms" },
        ]}
        copyright={{
          text: `© ${new Date().getFullYear()} TopJobs`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export { FooterWraper };
