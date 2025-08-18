import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticPaths, GetStaticProps } from "next";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { AlertCircle, ExternalLink, FileText } from "lucide-react";

export default function Floorp12() {
    const { t } = useTranslation("common");

    const handleRedirectToBlog = () => {
        window.open("https://blog.floorp.app/12.1.0", "_blank");
    };

    return (
        <>
            <Head>
                <title>{t("floorp12.pageTitle")}</title>
                <meta
                    name="description"
                    content={t("floorp12.description")}
                />
            </Head>
            <div className="container mx-auto px-4 md:px-8 max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] py-8 md:py-16">
                <div className="flex flex-col items-center text-center">
                    {/* Hero Section */}
                    <div className="flex items-center justify-center mb-2">
                        <Image
                            src="/Floorp_Mark_12_Gradient.png"
                            alt="Floorp 12"
                            width={128}
                            height={128}
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t("floorp12.heading")}
                    </h1>
                    <p className="text-xl mb-12 max-w-4xl">
                        {t("floorp12.description")}
                    </p>

                    {/* Migration Wizard Section */}
                    <div className="card bg-base-300 shadow-xl max-w-4xl mx-auto w-full mb-12">
                        <div className="card-body">
                            <div className="flex items-center mb-6 justify-center">
                                <AlertCircle className="w-10 h-10 text-warning mr-4" />
                                <h2 className="card-title text-3xl">
                                    {t("floorp12.migrationTitle")}
                                </h2>
                            </div>
                            <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
                                {t("floorp12.migrationDescription")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://docs.floorp.app/docs/features/migrate-to-v12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FileText className="w-6 h-6 mr-2" />
                                    {t("floorp12.viewMigrationGuide")}
                                </a>
                                <button
                                    onClick={handleRedirectToBlog}
                                    className="btn btn-outline btn-lg"
                                >
                                    <ExternalLink className="w-6 h-6 mr-2" />
                                    {t("floorp12.viewBlogPost")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const locale = params?.locale as string || "en-US";
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const locales = i18n.locales;
    const paths = locales.map((locale) => ({
        params: { locale },
    }));

    return {
        paths,
        fallback: false,
    };
};
