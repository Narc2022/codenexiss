import BespokeConfigCard from "./BespokeConfigCard";
import OperationalBandwidth from "./OperationalBandwidth";

export default function DataSection() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-10 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <OperationalBandwidth />
      </div>
      <BespokeConfigCard />
    </section>
  );
}
