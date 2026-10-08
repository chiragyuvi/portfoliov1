import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Yuvraj Dhariwal | AI Automation Engineer', description: 'AI Automation Engineer building AI agents, Microsoft 365 automations, Copilot Studio solutions, Power Automate workflows and Azure integrations.', keywords: ['AI agents','business automation','Microsoft 365','Azure','Copilot Studio'], openGraph: { title: 'Yuvraj Dhariwal | AI Automation Engineer', description: 'AI agents and business automations for modern teams.', type: 'website' } };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
