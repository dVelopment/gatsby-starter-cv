import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="font-mono text-9xl font-bold text-matrix mb-4">404</div>
        <h1 className="font-mono text-2xl text-white mb-4">
          <span className="text-ghost">error:</span> page_not_found
        </h1>
        <p className="text-ghost max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="font-mono text-sm">
          <span className="text-ghost">$</span>{" "}
          <Link
            to="/"
            className="text-cyber hover:text-matrix transition-colors underline underline-offset-4"
          >
            cd /home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <SEO title="404 - Page Not Found" description="The requested page was not found." />
);
