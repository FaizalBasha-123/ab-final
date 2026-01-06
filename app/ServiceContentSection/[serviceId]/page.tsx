
import ServiceContentSection from '../../ServiceContentSection';

export default async function Page({ params }: { params: Promise<{ serviceId: string }> }) {
	// Await params as required by Next.js App Router
	const { serviceId } = await params;
	return <ServiceContentSection serviceId={serviceId} />;
}

export function generateStaticParams() {
	return [
		{ serviceId: 'organization-restructure' },
		{ serviceId: 'roles-responsibilities' },
		{ serviceId: 'swot-gap-analysis' },
		{ serviceId: 'kpi' },
		{ serviceId: 'sop' },
		{ serviceId: 'need-analysis' },
		{ serviceId: 'growth-consulting' },
	];
}
