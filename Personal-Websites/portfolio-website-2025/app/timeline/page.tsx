import Timeline from "@/components/Timeline";

export const metadata = { title: "Timeline — Artem" };

export default function TimelinePage() {
  return (
    <section className="space-y-8 py-12">
      <h1 className="text-3xl font-bold">Timeline</h1>
      <Timeline />
    </section>
  );
}
