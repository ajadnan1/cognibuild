"use client";

import ServiceLayout from "@/app/components/ServiceLayout";
import { Database } from "lucide-react";

export default function AnalyticsEngineeringPage() {
    return (
        <ServiceLayout
            title="Data Engineering"
            subtitle="Modern Data Platform & Engineering Services"
            description="We architect scalable data platforms that treat data as a product. From ingestion to analytics, we ensure your data is accessible, high-quality, and ready to drive business value."
            icon={<Database className="w-12 h-12 text-cyan-600" />}
            features={[
                "Data Integration (Structured, Semi-structured, Unstructured)",
                "Big Data Migration (Source-to-Target)",
                "Automated Data Pipelining",
                "Data Transformation (ETL/ELT, Medallion Architecture)",
                "Automated Data Quality Engines",
                "Data Testing & Quality Engineering"
            ]}
            benefits={[
                {
                    title: "Data Integration",
                    desc: "We help integrate and ingest data onto your data platform from multiple sources using a variety of tools & frameworks. Our patterns support structured, semi-structured and unstructured data from different source types such as database, files and REST API."
                },
                {
                    title: "Data Migration",
                    desc: "We have strong expertise delivering source-to-target Big Data migrations leveraging proven migration strategies and delivery models. We employ a structured approach to deliver migrations end-to-end with data quality & data integrity embedded at the core."
                },
                {
                    title: "Data Pipelining",
                    desc: "We design and implement automated, master data pipelines with delta mechanisms for each data ingestion pattern, promoting standardisation and re-usability while accelerating transformation, reducing bottlenecks and manual steps along the way."
                },
                {
                    title: "Data Transformation",
                    desc: "We employ various frameworks & architecture patterns such as the medallion architecture to standardise ETL and ELT workflows to incrementally clean, standardise and model your data ready for analytics."
                },
                {
                    title: "Data Quality",
                    desc: "We build automated data quality engines embedded as part of the data pipeline to drive automated data validation checks, providing metadata driven metrics against defined data quality rules."
                },
                {
                    title: "Data Testing",
                    desc: "With Quality Engineering as a core capability, we provide data testing solutions that complement your data engineering teams workflows and provide high quality outcomes & business confidence."
                }
            ]}
        />
    );
}
