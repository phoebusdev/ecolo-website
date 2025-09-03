interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <div>
      <h1>Case Study: {id}</h1>
      <p>Individual case study page</p>
    </div>
  );
}