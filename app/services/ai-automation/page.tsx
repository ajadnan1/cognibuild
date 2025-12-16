"use client";

import ServiceLayout from "@/app/components/ServiceLayout";
import { Brain } from "lucide-react";

export default function AIAutomationPage() {
    return (
        <ServiceLayout
            title="AI Automation"
            subtitle="Autonomous Agents & Intelligent Workflows"
            description="We move beyond simple chatbots to deploy agentic AI systems that can plan, execute, and verify complex business tasks without human intervention."
            icon={<Brain className="w-12 h-12 text-indigo-600" />}
            features={[
                "LangChain & AutoGen Frameworks",
                "RAG (Retrieval-Augmented Generation)",
                "Multi-Agent Orchestration",
                "Human-in-the-loop Workflows",
                "Enterprise Security & Compliance",
                "Real-time Performance Monitoring"
            ]}
            benefits={[
                {
                    title: "Intelligent Document Processing (IDP)",
                    desc: "Automate the extraction of structured data from unstructured documents like invoices, contracts, and claims. Our AI agents understand context, handle variations, and integrate directly with your ERP."
                },
                {
                    title: "Customer Support Agents",
                    desc: "Deploy Tier 1 & 2 support agents that don't just answer FAQs but perform actions—processing refunds, updating account details, and troubleshooting technical issues in real-time."
                },
                {
                    title: "Sales & Outreach Automation",
                    desc: "Supercharge your pipeline with agents that research prospects, personalize outreach messages at scale, and automatically schedule meetings with qualified leads."
                },
                {
                    title: "Workflow Orchestration",
                    desc: "Connect your fragmented SaaS stack. Our agents act as the glue, autonomously moving data and triggering actions across Salesforce, Slack, Jira, and custom internal tools."
                },
                {
                    title: "Predictive Maintenance",
                    desc: "For industrial clients, we deploy agents that monitor IoT sensor data 24/7 to predict equipment failures before they happen, automatically scheduling maintenance tickets."
                },
                {
                    title: "Code Generation & Review",
                    desc: "Accelerate your engineering team with custom coding agents that can generate boilerplate, write unit tests, and perform initial code reviews based on your specific style guides."
                }
            ]}
        />
    );
}
